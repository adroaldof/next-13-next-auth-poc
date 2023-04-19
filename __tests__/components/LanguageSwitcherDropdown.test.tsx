import { getNextLocalizedPathname } from '@/components/dropdown/LanguageSwitcherDropdown'
import { test, expect } from 'vitest'

test('returns the same pathname when the next locale is equals to the current one', () => {
  const currentPathname = '/en/about'
  const currentLocale = 'en'
  const nextPathname = getNextLocalizedPathname(currentPathname, currentLocale)
  expect(nextPathname).toBe(currentPathname)
})

test('returns the path with the new locale when pathname has a different one', () => {
  const currentPathname = '/en/about'
  const currentLocale = 'es'
  const nextPathname = getNextLocalizedPathname(currentPathname, currentLocale)
  expect(nextPathname).toBe('/es/about')
})

test('return the next locale with only the locale as pathname the it is at the root', () => {
  const currentPathname = '/'
  const currentLocale = 'es'
  const nextPathname = getNextLocalizedPathname(currentPathname, currentLocale)
  expect(nextPathname).toBe('/es')
})

test('return the next locale when the current pathname is empty', () => {
  const currentPathname = ''
  const currentLocale = 'es'
  const nextPathname = getNextLocalizedPathname(currentPathname, currentLocale)
  expect(nextPathname).toBe('/es')
})
