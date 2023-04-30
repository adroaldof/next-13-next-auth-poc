import { FC } from 'react'
import { AuthButton } from '../AuthButton'
import { ThemeSwitcherButton } from '../buttons/ThemeSwitcherButton'
import { LanguageSwitcherDropdown } from '../dropdown/LanguageSwitcherDropdown'
import { useTranslations } from 'next-intl'
import { Heading } from '../ui/text/Heading'
import Link from '../ui/Link'

interface NavbarProps {
  locale: 'en' | 'pt' | 'es'
}

export const Navbar: FC<NavbarProps> = ({ locale }) => {
  const translate = useTranslations('Navbar')
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-300 bg-slate-100 py-4 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800">
      <nav className="container mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center">
          <Heading className="mb-0 text-2xl font-bold" data-cy="logo-description">
            <Link href="/">{translate('logo')}</Link>
          </Heading>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/">{translate('home')}</Link>
          <Link href="/about">{translate('about')}</Link>
          <Link href="/dashboard">{translate('dashboard')}</Link>
          <Link href="/users">{translate('users')}</Link>
          <Link href="/admin">{translate('admin')}</Link>
          <AuthButton signInLabel={translate('signIn')} signOutLabel={translate('signOut')} />
          <ThemeSwitcherButton />
          <LanguageSwitcherDropdown locale={locale} />
        </div>
      </nav>
    </div>
  )
}
