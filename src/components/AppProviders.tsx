'use client'
import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'

type AppProvidersProps = {
  children: React.ReactNode
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
