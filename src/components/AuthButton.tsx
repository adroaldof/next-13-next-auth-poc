'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export const AuthButton = () => {
  const session = useSession()
  const onSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }
  return session.status === 'authenticated' ? (
    <button type="button" onClick={() => onSignOut()}>
      Sign Out
    </button>
  ) : (
    <button type="button" onClick={() => signIn()}>
      Sign In
    </button>
  )
}
