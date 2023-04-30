'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { FC } from 'react'
import { Button } from './ui/button/Button'

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
    <Button type="button" variant="link" onClick={() => signIn()} className="justify-start px-0">
      {signInLabel}
    </Button>
  ) : (
    <Button type="button" variant="link" onClick={() => onSignOut()} className="justify-start px-0">
      {signOutLabel}
    </Button>
  )
}
