import { AuthButton } from '@/components/AuthButton'
import { AppProviders } from '@/components/AppProviders'
import { Link, useLocale } from 'next-intl'
import { notFound } from 'next/navigation'

import '@/styles/globals.css'

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

export default async function I18nLayout({ children, params }: RootLayoutProps) {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang="en">
      <body className="text-zinc-700">
        <AppProviders>
          <main className="flex min-h-screen flex-col bg-zinc-300">
            <nav className="flex flex-shrink-0 items-center justify-between bg-zinc-400 p-4 text-zinc-100">
              <div className="flex items-center">
                <Link href="/">
                  <h1 className="ml-2 text-2xl font-bold">AuthApp</h1>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/users">Users</Link>
                <Link href="/admin">Admin</Link>
                <AuthButton />
              </div>
            </nav>
            <div className="flex flex-1">{children}</div>
          </main>
        </AppProviders>
      </body>
    </html>
  )
}
