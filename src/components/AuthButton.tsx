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
  return session.status === 'unauthenticated' ? (
    <button type="button" onClick={() => signIn()}>
      {signInLabel}
    </button>
  ) : (
    <button type="button" onClick={() => onSignOut()}>
      {signOutLabel}
    </button>
  )
}
