import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-zinc-700">
        <main className="flex min-h-screen flex-col bg-zinc-300">
          <nav className="flex flex-shrink-0 items-center justify-between bg-zinc-400 p-4">
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
              <Link href="/sign-in">Sign In</Link>
            </div>
          </nav>
          <div className="flex flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}
