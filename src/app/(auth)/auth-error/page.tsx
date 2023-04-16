import { AuthError } from '@/containers/auth/AuthError'
import React from 'react'

interface AuthErrorPageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function AuthErrorPage({ searchParams }: AuthErrorPageProps) {
  return <AuthError searchParams={searchParams} />
}
