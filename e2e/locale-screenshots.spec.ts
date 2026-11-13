import { expect, type Page, test } from '@playwright/test'
import { ADMIN_EMAIL, ADMIN_PASSWORD } from './helpers'

// ---------------------------------------------------------------------------
// Locale rendering in the real interface. The Playwright webServer boots the app
// itself (vite + the node server + a temporary SQLite database), so locale
// checks and the preview screenshots CONTRIBUTING asks for need no deployment.
// Screenshots are written to test-results/.
// ---------------------------------------------------------------------------

type Locale = {
  code: string
  label: string
  signIn: string
  signInWithEmail: string
  signInSubtitle: string
  emailOrUsername: string
  filesNav: string
  settingsNav: string
  languageLabel: string
}

const LOCALES: Locale[] = [
  {
    code: 'en',
    label: 'English',
    signIn: 'Sign In',
    signInWithEmail: 'Sign in with email',
    signInSubtitle: 'Sign in to your account',
    emailOrUsername: 'Email or Username',
    filesNav: 'My Files',
    settingsNav: 'Settings',
    languageLabel: 'Language',
  },
  {
    code: 'zh',
    label: '中文',
    signIn: '登录',
    signInWithEmail: '使用邮箱登录',
    signInSubtitle: '登录到您的账户',
    emailOrUsername: '邮箱或用户名',
    filesNav: '我的文件',
    settingsNav: '设置',
    languageLabel: '语言',
  },
  {
    code: 'ar',
    label: 'العربية',
    signIn: 'تسجيل الدخول',
    signInWithEmail: 'تسجيل الدخول بالبريد الإلكتروني',
    signInSubtitle: 'سجّل الدخول إلى حسابك',
    emailOrUsername: 'البريد الإلكتروني أو اسم المستخدم',
    filesNav: 'ملفاتي',
    settingsNav: 'الإعدادات',
    languageLabel: 'اللغة',
  },
]

const ARABIC = LOCALES[2]

const sidebar = (page: Page) => page.locator('[data-slot="sidebar"]')

function persistLocale(page: Page, code: string) {
  // i18next-browser-languagedetector reads i18nextLng before the app boots.
  return page.addInitScript((lng) => window.localStorage.setItem('i18nextLng', lng), code)
}

async function expandSignInForm(page: Page, locale: Locale) {
  const identityInput = page.locator('#identity')
  if (await identityInput.isVisible().catch(() => false)) return
  await page.getByRole('button', { name: locale.signInWithEmail }).click()
  await expect(identityInput).toBeVisible()
}

async function signInInLocale(page: Page, locale: Locale) {
  await persistLocale(page, locale.code)
  await page.goto('/sign-in')

  await expandSignInForm(page, locale)
  await page.locator('#identity').fill(ADMIN_EMAIL)
  await page.locator('#password').fill(ADMIN_PASSWORD)
  const responsePromise = page.waitForResponse((response) => response.url().includes('/api/auth/sign-in'))
  await page.getByRole('button', { name: locale.signIn }).click()
  expect((await responsePromise).status()).toBe(200)
  await expect(page).toHaveURL(/files/, { timeout: 10_000 })
}

test.describe('Locale rendering', () => {
  for (const locale of LOCALES) {
    test(`sign-in page renders in ${locale.code} @desktop`, async ({ page }) => {
      await persistLocale(page, locale.code)
      await page.goto('/sign-in')

      await expect(page.getByText(locale.signInSubtitle)).toBeVisible()
      await expandSignInForm(page, locale)
      await expect(page.getByLabel(locale.emailOrUsername)).toBeVisible()

      await page.screenshot({ path: `test-results/locale-sign-in-${locale.code}.png`, fullPage: true })
    })

    test(`sidebar and language menu render in ${locale.code} @desktop`, async ({ page }) => {
      await signInInLocale(page, locale)

      await expect(sidebar(page).getByText(locale.filesNav, { exact: true })).toBeVisible()
      await sidebar(page).screenshot({ path: `test-results/locale-sidebar-${locale.code}.png` })

      // The workspace switcher is named "E2E Admin's Space", so the account menu
      // trigger needs an exact match.
      await page.getByRole('button', { name: 'EA E2E Admin', exact: true }).click()
      await expect(page.getByRole('menuitem', { name: locale.settingsNav })).toBeVisible()
      await page.getByRole('menuitem', { name: locale.languageLabel }).hover()
      for (const other of LOCALES) {
        await expect(page.getByRole('menuitemradio', { name: other.label })).toBeVisible()
      }
      await expect(page.getByRole('menuitemradio', { name: locale.label })).toBeChecked()
      await page.screenshot({ path: `test-results/locale-account-menu-${locale.code}.png` })
    })
  }

  test('the Arabic locale is complete across the admin console @desktop', async ({ page }) => {
    await signInInLocale(page, ARABIC)

    // ar.json covers every key, so the admin surfaces render Arabic too.
    await expect(sidebar(page).getByText('ملفاتي', { exact: true })).toBeVisible()
    await expect(sidebar(page).getByText('استُخدم 0 B من 1.0 GB')).toBeVisible()
    await expect(sidebar(page).getByText('التخزين', { exact: true })).toBeVisible()

    await page.goto('/admin')
    await expect(page.locator('header').getByText('لوحة الإدارة')).toBeVisible()
    await page.goto('/admin/downloaders')
    await expect(page.getByText('المنزّلات', { exact: true }).first()).toBeVisible()
    await page.screenshot({ path: 'test-results/locale-admin-downloaders-ar.png' })

    // The analytics copy came from PR #595 (132 admin.analytics.* keys added to
    // en.json), so it is the newest Arabic batch. Section titles render even
    // when the section is locked by entitlements, and the upgrade hint proves
    // the gated copy is Arabic too.
    await page.goto('/admin/analytics')
    await expect(page.getByText('إحصاءات الموقع', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('المستخدمون والنمو', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('فتح الإحصاءات المتقدّمة', { exact: true }).first()).toBeVisible()
    await page.screenshot({ path: 'test-results/locale-admin-analytics-ar.png' })
  })
})
