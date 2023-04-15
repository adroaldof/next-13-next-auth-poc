'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

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
    <Link href="/sign-in">Sign In</Link>
  )
}
