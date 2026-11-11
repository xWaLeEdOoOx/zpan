import { describe, expect, it } from 'vitest'
import ar from './locales/ar.json'
import en from './locales/en.json'

const arLocale = ar as Record<string, string>
const enLocale = en as Record<string, string>

// The Arabic locale covers these surfaces completely. Keys outside them fall
// back to English until their batch lands.
const ARABIC_PREFIXES = [
  'auth.',
  'nav.',
  'common.',
  'preview.',
  'quota.',
  'settings.appearance.',
  'public.',
  'files.',
  'trash.',
  'uploadPanel.',
  'music.',
  'mediaLibrary.',
  'tasks.',
]

const ARABIC_PLURAL_SUFFIXES = ['_zero', '_one', '_two', '_few', '_many', '_other']

const ARABIC_SCRIPT = /[\u0600-\u06FF]/
const arKeys = Object.keys(arLocale)

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

  it('ar.json covers every key in the covered prefixes', () => {
    const missing = Object.keys(enLocale)
      .filter((key) => ARABIC_PREFIXES.some((prefix) => key.startsWith(prefix)))
      .filter((key) => !Object.hasOwn(arLocale, key))
    expect(missing).toEqual([])
  })

  it('no key in ar.json has an empty value', () => {
    for (const key of arKeys) {
      expect(arLocale[key]?.trim(), `ar.json key "${key}" must not be empty`).not.toBe('')
    }
  })

  it('plural keys provide every Arabic plural form', () => {
    // Checked for every base whose plural pair ar.json has started covering.
    const missing = pluralBases
      .filter((base) => Object.hasOwn(arLocale, `${base}_one`))
      .flatMap((base) =>
        ARABIC_PLURAL_SUFFIXES.filter((suffix) => !Object.hasOwn(arLocale, `${base}${suffix}`)).map(
          (suffix) => `${base}${suffix}`,
        ),
      )
    expect(missing).toEqual([])
  })
})

describe('arabic locale values', () => {
  it('every translated value uses Arabic script', () => {
    // Strings with no letters in English outside placeholders (placeholder-only
    // templates) are exempt.
    const latinOnly = arKeys.filter(
      (key) =>
        enLocale[key] !== undefined &&
        /[A-Za-z]/.test(enLocale[key].replace(/\{\{\s*\w+\s*\}\}/g, '')) &&
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
  })

  it('falls back to English for prefixes ar.json does not cover yet', async () => {
    const { default: i18n } = await import('./index')
    await i18n.changeLanguage('ar')
    expect(i18n.t('files.title')).toBe('الملفات')
    expect(i18n.t('shares.title')).toBe('My Shares')
    expect(i18n.t('admin.title')).toBe('Admin Console')
    expect(i18n.resolvedLanguage).toBe('ar')
  })

  it('returns to English when the language switches back', async () => {
    const { default: i18n } = await import('./index')
    await i18n.changeLanguage('en')
    expect(i18n.t('auth.signIn')).toBe('Sign In')
  })
})
