'use client'

import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'
import { ThemeProvider } from 'next-themes'

type AppProvidersProps = {
  children: React.ReactNode
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}
