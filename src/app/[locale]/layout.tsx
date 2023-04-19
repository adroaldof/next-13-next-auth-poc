import { AuthButton } from '@/components/AuthButton'
import { AppProviders } from '@/components/AppProviders'
import { Link, useLocale, useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'

import '@/styles/globals.css'
import { LanguageSwitcherDropdown } from '@/components/dropdown/LanguageSwitcherDropdown'

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

  return (
    <html lang={locale}>
      <body className="text-zinc-700">
        <AppProviders>
          <main className="flex min-h-screen flex-col bg-zinc-300">
            <nav className="flex flex-shrink-0 items-center justify-between bg-zinc-400 p-4 text-zinc-100">
              <div className="flex items-center">
                <Link href="/">
                  <h1 className="ml-2 text-2xl font-bold" data-cy="logo-description">
                    {translate('logo')}
                  </h1>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/">{translate('home')}</Link>
                <Link href="/about">{translate('about')}</Link>
                <Link href="/dashboard">{translate('dashboard')}</Link>
                <Link href="/users">{translate('users')}</Link>
                <Link href="/admin">{translate('admin')}</Link>
                <AuthButton signInLabel={translate('signIn')} signOutLabel={translate('signOut')} />
                <LanguageSwitcherDropdown locale={locale} />
              </div>
            </nav>
            <div className="flex flex-1">{children}</div>
          </main>
        </AppProviders>
      </body>
    </html>
  )
}
