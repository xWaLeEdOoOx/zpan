import { describe, expect, it } from 'vitest'
import ar from './locales/ar.json'
import en from './locales/en.json'

const arLocale = ar as Record<string, string>
const enLocale = en as Record<string, string>

// ar.json is a complete locale: every en.json key has an Arabic value, plus the
// six Arabic CLDR plural forms for each plural base en stores as _one/_other.
const ARABIC_PLURAL_SUFFIXES = ['_zero', '_one', '_two', '_few', '_many', '_other']

const ARABIC_SCRIPT = /[\u0600-\u06FF]/
const arKeys = Object.keys(arLocale)

// Protocol names, typed confirmation strings, and product plan brand names stay
// Latin in every locale; the same list is enforced by the locale build script.
const LATIN_EXEMPTIONS = new Set([
  'settings.tabWebDav',
  'settings.apiKeys.typeWebdav',
  'settings.apiKeys.type.webdav',
  'settings.ihost.customDomain.placeholder',
  'settings.ihost.disable.confirmPlaceholder',
  'settings.billing.comparison.pro',
  'settings.billing.comparison.business',
  'settings.billing.bound.planPro',
  'storage.freePlanName',
  'storage.freePlanPrice',
  'admin.overview.analyticsBadge',
  'admin.nav.auth',
  'admin.licenseRibbon.pro',
  'admin.licenseRibbon.business',
  'admin.about.url',
  'admin.about.nodeVersion',
  'admin.about.cloud.title',
  'admin.storages.sort.bucket',
  'admin.storages.providerPlaceholder',
  'admin.storages.bucketPlaceholder',
  'admin.storages.regionPlaceholder',
  'admin.storages.accessKeyPlaceholder',
  'admin.storages.secretKeyPlaceholder',
  'admin.storages.billingDescription',
  'admin.settings.webdavSection',
  'admin.settings.webdavDomainPlaceholder',
  'admin.auth.scopesPlaceholder',
  'admin.auth.providerIdPlaceholder',
  'admin.auth.emailSmtp',
  'admin.auth.smtpHostPlaceholder',
  'admin.auth.smtpUserPlaceholder',
  'admin.imageDomains.cloudflare',
  'admin.imageDomains.routingModeWorker',
])

// en stores plurals as `base_one` / `base_other`; Arabic needs all six CLDR forms.
const pluralBases = [
  ...new Set(
    Object.keys(enLocale)
      .filter((key) => /_(one|other)$/.test(key))
      .map((key) => key.replace(/_(one|other)$/, '')),
  ),
]

function isArabicPluralForm(key: string) {
  return (
    ARABIC_PLURAL_SUFFIXES.some((suffix) => key.endsWith(suffix)) &&
    pluralBases.includes(key.replace(/_(zero|one|two|few|many|other)$/, ''))
  )
}

function placeholders(value: string) {
  return (value.match(/\{\{\s*\w+\s*\}\}/g) ?? []).sort().join('|')
}

describe('arabic locale coverage', () => {
  it('ar.json contains only keys that exist in en.json, plus full Arabic plural forms', () => {
    expect(arKeys.filter((key) => !Object.hasOwn(enLocale, key) && !isArabicPluralForm(key))).toEqual([])
  })

  it('ar.json covers every key in en.json', () => {
    const missing = Object.keys(enLocale).filter((key) => !Object.hasOwn(arLocale, key))
    expect(missing).toEqual([])
  })

  it('no key in ar.json has an empty value', () => {
    for (const key of arKeys) {
      expect(arLocale[key]?.trim(), `ar.json key "${key}" must not be empty`).not.toBe('')
    }
  })

  it('plural keys provide every Arabic plural form', () => {
    const missing = pluralBases.flatMap((base) =>
      ARABIC_PLURAL_SUFFIXES.filter((suffix) => !Object.hasOwn(arLocale, `${base}${suffix}`)).map(
        (suffix) => `${base}${suffix}`,
      ),
    )
    expect(missing).toEqual([])
  })
})

describe('arabic locale values', () => {
  it('every translated value uses Arabic script', () => {
    // Exempt placeholder-only templates and literal technical examples
    // (email, URL, scheme prefixes) that stay Latin by design.
    const isTechnicalExample = (value: string) =>
      /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value) || /^(https?:|magnet:|ftp:)/i.test(value)
    const latinOnly = arKeys.filter(
      (key) =>
        enLocale[key] !== undefined &&
        /[A-Za-z]/.test(enLocale[key].replace(/\{\{\s*\w+\s*\}\}/g, '')) &&
        !isTechnicalExample(enLocale[key]) &&
        !LATIN_EXEMPTIONS.has(key) &&
        !ARABIC_SCRIPT.test(arLocale[key]),
    )
    expect(latinOnly).toEqual([])
  })

  it('interpolation placeholders match en.json for every key', () => {
    const mismatched = arKeys
      .filter((key) => enLocale[key] !== undefined)
      .filter((key) => placeholders(arLocale[key]) !== placeholders(enLocale[key]))
    expect(mismatched).toEqual([])
  })

  it('keeps technical format names untranslated', () => {
    expect(arLocale['preview.videoUnsupportedContainer']).toContain('AVI')
    expect(arLocale['preview.videoUnsupportedContainer']).toContain('WMV')
    expect(arLocale['preview.videoUnsupportedContainer']).toContain('FLV')
    expect(arLocale['preview.videoUnsupportedContainer']).toContain('RMVB')
    expect(arLocale['preview.videoUnsupportedVideoCodec']).toContain('XviD')
    expect(arLocale['preview.videoUnsupportedAudioCodec']).toContain('Dolby TrueHD')
    expect(arLocale['preview.officeLocalHint']).toContain('Microsoft Office')
    expect(arLocale['preview.officeLocalHint']).toContain('localhost')
    expect(arLocale['preview.nfo.xmlFormat']).toContain('XML')
  })
})

describe('arabic locale value contracts', () => {
  const CONTRACTS: Array<[string, string]> = [
    ['auth.signIn', 'تسجيل الدخول'],
    ['auth.signUp', 'إنشاء حساب'],
    ['auth.signOut', 'تسجيل الخروج'],
    ['auth.password', 'كلمة المرور'],
    ['auth.forgotPassword', 'نسيت كلمة المرور؟'],
    ['nav.files', 'ملفاتي'],
    ['nav.trash', 'سلة المهملات'],
    ['nav.settings', 'الإعدادات'],
    ['common.save', 'حفظ'],
    ['common.cancel', 'إلغاء'],
    ['common.loading', 'جارٍ التحميل...'],
    ['preview.download', 'تنزيل'],
    ['quota.storage', 'التخزين'],
    ['settings.appearance.language', 'اللغة'],
    ['settings.appearance.themeDark', 'داكن'],
    ['files.title', 'الملفات'],
    ['files.newFolder', 'مجلد جديد'],
    ['files.rename', 'إعادة تسمية'],
    ['files.moveToTrash', 'نقل إلى سلة المهملات'],
    ['files.colSize', 'الحجم'],
    ['trash.restore', 'استعادة'],
    ['trash.deletePermanently', 'حذف نهائي'],
    ['tasks.title', 'المهام'],
    ['mediaLibrary.title', 'مكتبة الوسائط'],
    ['uploadPanel.title', 'عمليات الرفع'],
    ['music.queue', 'قائمة التشغيل'],
    ['downloads.title', 'التنزيل عن بُعد'],
    ['downloads.status.downloading', 'قيد التنزيل'],
    ['device.approve', 'الموافقة'],
    ['device.deny', 'الرفض'],
    ['device.code', 'رمز الجهاز'],
    ['actors.type.api_key', 'مفتاح API'],
    ['shares.title', 'مشاركاتي'],
    ['shares.statusActive', 'نشطة'],
    ['shares.revoke', 'إلغاء'],
    ['share.saveToDrive', 'حفظ في مساحتي'],
    ['share.passwordPlaceholder', 'أدخل كلمة المرور'],
    ['profile.publicSpaceTitle', 'المساحة العامة لـ {{name}}'],
    ['teams.title', 'الفرق'],
    ['teams.role.owner', 'المالك'],
    ['org.workspaceName', 'اسم مساحة العمل'],
    ['activity.title', 'النشاط'],
    ['notification.minutesAgo', 'قبل {{count}} دقيقة'],
    ['announcement.title', 'إعلانات الموقع'],
    ['settings.title', 'الإعدادات'],
    ['settings.tabApiKeys', 'مفاتيح API'],
    ['settings.apiKeys.create', 'إنشاء مفتاح'],
    ['ihost.title', 'استضافة الصور'],
    ['settings.oauthApps.revokeAccess', 'إلغاء الوصول'],
    ['storage.currentPlan', 'الخطة الحالية'],
    ['storage.creditBalance', 'رصيد الائتمان'],
    ['features.analytics', 'التحليلات'],
    ['features.category.pro', 'ميزات Pro'],
    ['admin.nav.overview', 'النظرة العامة'],
    ['admin.nav.users', 'المستخدمون'],
    ['admin.nav.storages', 'خزائن التخزين'],
    ['admin.about.title', 'حول ZPan'],
    ['admin.backToFiles', 'العودة إلى التطبيق'],
    ['admin.users.title', 'المستخدمون'],
    ['admin.storages.title', 'خزائن التخزين'],
    ['admin.storages.colBucket', 'الدلو'],
    ['admin.audit.title', 'سجلات التدقيق'],
    ['admin.announcement.title', 'إعلان الموقع'],
    ['admin.settings.title', 'الإعدادات'],
    ['admin.auth.title', 'مزوّدات OAuth'],
    ['admin.auth.redirectUri', 'رابط إعادة التوجيه'],
    ['admin.cloudStore.title', 'خطط التخزين'],
    ['admin.downloaders.title', 'المنزّلات'],
    ['admin.teams.title', 'الفرق'],
    ['admin.entitlement.amount', 'الكمية'],
    ['admin.imageDomains.apiToken', 'رمز API لـ Cloudflare'],
  ]

  for (const [key, value] of CONTRACTS) {
    it(`ar.json key "${key}" is "${value}"`, () => {
      expect(arLocale[key]).toBe(value)
    })
  }

  it('interpolates {{email}} into the verification message', async () => {
    const { default: i18n } = await import('./index')
    await i18n.changeLanguage('ar')
    expect(i18n.t('auth.verifyEmailSent', { email: 'a@b.com' })).toContain('a@b.com')
  })

  it('interpolates the quota usage template', async () => {
    const { default: i18n } = await import('./index')
    await i18n.changeLanguage('ar')
    expect(i18n.t('quota.usage', { used: '5 GB', total: '10 GB' })).toBe('استُخدم 5 GB من 10 GB')
  })
})

describe('arabic runtime translation', () => {
  it('translates known keys to Arabic after switching to ar', async () => {
    const { default: i18n } = await import('./index')
    await i18n.changeLanguage('ar')
    expect(i18n.t('auth.signIn')).toBe('تسجيل الدخول')
    expect(i18n.t('common.save')).toBe('حفظ')
    expect(i18n.t('nav.files')).toBe('ملفاتي')
    expect(i18n.t('settings.appearance.language')).toBe('اللغة')
    expect(i18n.t('downloads.title')).toBe('التنزيل عن بُعد')
    expect(i18n.t('files.rename')).toBe('إعادة تسمية')
  })

  it('renders Arabic across every surface now that ar.json is complete', async () => {
    const { default: i18n } = await import('./index')
    await i18n.changeLanguage('ar')
    expect(i18n.t('files.title')).toBe('الملفات')
    expect(i18n.t('storage.title')).toBe('التخزين')
    expect(i18n.t('admin.title')).toBe('لوحة الإدارة')
    expect(i18n.t('admin.users.title')).toBe('المستخدمون')
    expect(i18n.t('admin.cloudStore.title')).toBe('خطط التخزين')
    expect(i18n.t('admin.downloaders.title')).toBe('المنزّلات')
    expect(i18n.resolvedLanguage).toBe('ar')
  })

  it('returns to English when the language switches back', async () => {
    const { default: i18n } = await import('./index')
    await i18n.changeLanguage('en')
    expect(i18n.t('auth.signIn')).toBe('Sign In')
  })
})
