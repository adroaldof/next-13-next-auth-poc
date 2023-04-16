/* eslint-disable no-unused-vars */
import type { Session, User } from 'next-auth'
import type { JST } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    email: string
    accessToken: string
    role?: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      role?: string
    }
  }
}
