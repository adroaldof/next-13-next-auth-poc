import NextAuth, { RequestInternal, User } from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

/**
 * FIXME: this is a workaround to use next-auth with next-intl
 * @see https://next-auth.js.org/configuration/options
 * at the moment 2023-04-19 it was not possible to localize the pages from next auth
 * I'll wait for the next releases to check when it could be possible the integration with next-intl
 * https://stackoverflow.com/questions/75983133/nextjs-next-auth-wrong-redirection-with-next-intl
 */
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/en/sign-in',
    error: '/en/auth-error',
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
        const response = await fetch(`${process.env.API_URL}/auth/sign-in`, { method: 'POST', body, headers })
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
