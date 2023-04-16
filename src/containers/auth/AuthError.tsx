'use client'
import { useSearchParams } from 'next/navigation'

interface AuthErrorProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const AuthError = ({ searchParams }: AuthErrorProps) => {
  const message = searchParams?.message || 'We have encountered a problem'
  return (
    <div className="flex flex-col">
      <h1>Auth Error</h1>
      <p>Description: {message}</p>
      <p>Please check your authorization and try again later</p>
    </div>
  )
}
