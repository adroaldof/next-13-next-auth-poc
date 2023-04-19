'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FC } from 'react'

interface AuthButtonProps {
  signInLabel: string
  signOutLabel: string
}

export const AuthButton: FC<AuthButtonProps> = ({ signInLabel, signOutLabel }) => {
  const session = useSession()
  const onSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }
  return session.status === 'authenticated' ? (
    <button type="button" onClick={() => onSignOut()}>
      {signInLabel}
    </button>
  ) : (
    <button type="button" onClick={() => signIn()}>
      {signOutLabel}
    </button>
  )
}
