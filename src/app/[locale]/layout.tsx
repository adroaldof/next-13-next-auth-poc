import '@/styles/globals.css'
import { AppProviders } from '@/components/AppProviders'
import { useLocale, useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import { classNames } from '@/lib/class-names'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

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

  return (
    <html lang={locale} className={classNames('bg-white text-slate-900 antialiased', inter.className)}>
      <body className="min-h-screen bg-slate-50 antialiased dark:bg-slate-900">
        <AppProviders>
          <main className="flex min-h-screen flex-col">
            <Navbar locale={locale} />
            <div className="container mx-auto flex h-full w-full max-w-7xl flex-1 p-4 pt-24">{children}</div>
          </main>
        </AppProviders>
      </body>
    </html>
  )
}
