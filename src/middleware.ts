import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export { withAuth } from 'next-auth/middleware'

const notAuthorizedMessage = `You don't have the clearance to access this page.`

export default withAuth(
  async (req, res) => {
    const { nextUrl, nextauth } = req

    if (nextUrl.pathname.startsWith('/admin') && nextauth.token?.role !== 'admin') {
      return NextResponse.rewrite(new URL(`/auth-error?message=${notAuthorizedMessage}`, req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

export const config = {
  matcher: ['/dashboard/:path*', '/users/:path*', '/admin/:path*'],
}
