'use client'

import { FC } from 'react'
import { Button } from '../ui/button/Button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown/DropdownMenu'
import { Icons } from '../ui/icons/Icons'
import { usePathname, useRouter } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

interface LanguageSwitcherDropdownProps {
  locale: string
}

export const getNextLocalizedPathname = (pathname: string, nextLocale: string) => {
  const [, currentLocale, ...pathnameParts] = pathname.split('/')
  if (currentLocale !== nextLocale) return `/${[nextLocale, ...pathnameParts].join('/')}`
  return pathname
}

export const LanguageSwitcherDropdown: FC<LanguageSwitcherDropdownProps> = ({ locale }) => {
  const pathname = usePathname()
  const router = useRouter()

  const onLocaleChange = (nextLocale: string) => {
    if (nextLocale === locale) return
    const nextPathname = getNextLocalizedPathname(pathname || '/', nextLocale)
    router.push(nextPathname)
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="px-2"
            data-cy="switch-language-trigger"
            aria-label="Language Switcher"
          >
            <Icons.Languages className="stroke-1 transition-all hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-300" />
            <span className="sr-only">Switch Language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" forceMount data-cy="switch-language">
          <DropdownMenuItem onClick={() => onLocaleChange('en')} data-cy="en">
            <span>English</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onLocaleChange('pt')} data-cy="pt">
            <span>Português</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onLocaleChange('es')} data-cy="es">
            <span>Español</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </NextIntlClientProvider>
  )
}
