import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

export { withAuth } from 'next-auth/middleware'

const i18nMiddleware = createMiddleware({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
})

export default i18nMiddleware

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}

// const notAuthorizedMessage = `You don't have the clearance to access this page.`

// export default withAuth(
//   async (req, res) => {
//     const { nextUrl, nextauth } = req
//     if (nextUrl.pathname.startsWith('/admin') && nextauth.token?.role !== 'admin') {
//       return NextResponse.rewrite(new URL(`/auth-error?message=${notAuthorizedMessage}`, req.url))
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   },
// )

// export const config = {
//   matcher: ['/dashboard/:path*', '/users/:path*', '/admin/:path*'],
// }
