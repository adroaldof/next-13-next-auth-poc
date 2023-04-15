import NextAuth, { Awaitable, RequestInternal, User } from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt/types'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/sign-in',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
        _req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>,
      ): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required for authentication')
        }
        const body = JSON.stringify({ email: credentials.email, password: credentials.password })
        const headers = { 'Content-Type': 'application/json' }
        const response = await fetch('http://localhost:5000/api/auth/sign-in', { method: 'POST', body, headers })
        const user = await response.json()
        return !user ? null : (user as User)
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      return { ...token, ...user }
    },
    async session({ token, session }) {
      return { ...session, ...token }
    },
  },
}

export default NextAuth(authOptions)
