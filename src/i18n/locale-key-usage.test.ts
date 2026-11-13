import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import ar from './locales/ar.json'
import en from './locales/en.json'
import zh from './locales/zh.json'

const locales: Record<string, Record<string, string>> = {
  en: en as Record<string, string>,
  zh: zh as Record<string, string>,
  ar: ar as Record<string, string>,
}

// Reading source in a test follows the existing pattern (admin-analytics-locale.test.ts,
// src/lib/subtitles/index.test.ts). Every t() call in the app must resolve to a key in
// every locale: a key the code asks for and no locale defines renders as the raw key
// string on screen (i18next returns the key when the lookup misses), so this suite is
// the guard against that class of bug.
const SRC = join(process.cwd(), 'src')

function sourceFiles(dir: string): string[] {
  const out: string[] = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...sourceFiles(p))
    else if (/\.(ts|tsx)$/.test(name) && !name.includes('.test.')) out.push(p)
  }
  return out
}

// A lookup resolves when the key exists, or when it is a plural base: i18next picks
// `key_one` / `key_other` for a count, so the bare base is never stored in en.
function resolves(locale: Record<string, string>, key: string) {
  return Object.hasOwn(locale, key) || (Object.hasOwn(locale, `${key}_one`) && Object.hasOwn(locale, `${key}_other`))
}

const files = sourceFiles(SRC)
const literalKeys = new Set<string>()
const templateFamilies: { prefix: string; suffix: string; where: string }[] = []

for (const file of files) {
  const text = readFileSync(file, 'utf8')
  for (const m of text.matchAll(/\bt\(\s*(['"])([^'"\n]+)\1/g)) literalKeys.add(m[2])
  for (const m of text.matchAll(/\bt\(\s*`([^`]*)`/g)) {
    const raw = m[1]
    if (!raw.includes('${')) continue
    templateFamilies.push({
      prefix: raw.split('${')[0],
      suffix: raw.includes('}') ? raw.split('}').slice(1).join('') : '',
      where: file.replace(SRC, ''),
    })
  }
}

describe('locale key usage in app code', () => {
  it('finds t() calls in the source', () => {
    expect(files.length).toBeGreaterThan(0)
    expect(literalKeys.size).toBeGreaterThan(1000)
  })

  for (const locale of Object.keys(locales)) {
    it(`every literal t() key resolves in ${locale}`, () => {
      const missing = [...literalKeys].filter((key) => !resolves(locales[locale], key))
      expect(missing).toEqual([])
    })
  }

  it('every dynamic t() key family is complete in every locale', () => {
    const gaps: string[] = []
    for (const { prefix, suffix, where } of templateFamilies) {
      const keys = Object.keys(en).filter((key) => key.startsWith(prefix) && key.endsWith(suffix))
      expect(keys.length, `${where} family "${prefix}…${suffix}" must have keys in en.json`).toBeGreaterThan(0)
      for (const locale of Object.keys(locales)) {
        for (const key of keys) {
          if (!resolves(locales[locale], key)) gaps.push(`${where} ${locale}: ${key}`)
        }
      }
    }
    expect(gaps).toEqual([])
  })
})
