import '@/styles/globals.css'
import { AppProviders } from '@/components/AppProviders'
import { useLocale, useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import { classNames } from '@/lib/class-names'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar/Navbar'
import { Heading } from '@/components/ui/text/Heading'
import Link from '@/components/ui/Link'
import { AuthButton } from '@/components/AuthButton'
import { ThemeSwitcherButton } from '@/components/buttons/ThemeSwitcherButton'
import { LanguageSwitcherDropdown } from '@/components/dropdown/LanguageSwitcherDropdown'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AuthApp',
  description: 'NextJS app with NextAuth as authentication provider',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: 'en' | 'pt'
  }
}

export default function I18nLayout({ children, params }: RootLayoutProps) {
  const locale = useLocale()
  const translate = useTranslations('Navbar')

  if (params.locale !== locale) {
    notFound()
  }

  const logo = (
    <Heading className="mb-0 text-2xl font-bold" data-cy="logo-description">
      <Link href="/">{translate('logo')}</Link>
    </Heading>
  )

  return (
    <html lang={locale} className={classNames('bg-white text-slate-900 antialiased', inter.className)}>
      <body className="min-h-screen bg-slate-50 antialiased dark:bg-slate-900">
        <AppProviders>
          <main className="flex min-h-screen flex-col">
            <Navbar
              logo={logo}
              themeSwitcherButton={<ThemeSwitcherButton />}
              languageSwitcherButton={<LanguageSwitcherDropdown locale={locale} />}
            >
              <Link href="/">{translate('home')}</Link>
              <Link href="/about">{translate('about')}</Link>
              <Link href="/dashboard">{translate('dashboard')}</Link>
              <Link href="/users">{translate('users')}</Link>
              <Link href="/admin">{translate('admin')}</Link>
              <AuthButton signInLabel={translate('signIn')} signOutLabel={translate('signOut')} />
            </Navbar>
            <div className="container mx-auto flex h-full w-full max-w-7xl flex-1 p-4">{children}</div>
          </main>
        </AppProviders>
      </body>
    </html>
  )
}
