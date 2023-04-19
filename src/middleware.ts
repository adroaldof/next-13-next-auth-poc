import withAuth from 'next-auth/middleware'
import createMiddleware from 'next-intl/middleware'

const locales = ['pt', 'en', 'es']
const publicPages = ['', 'about', 'sign-in']
const publicRoutes = RegExp(`^/(${locales.join('|')})?(/(${publicPages.join('|')}))?/?$`, 'i')

const rolePages = ['admin']
const rolePagesWhitelist = RegExp(`^/(${locales.join('|')})?(/(${rolePages.join('|')}))?/?$`, 'i')

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
})

export default withAuth(intlMiddleware, {
  callbacks: {
    authorized: ({ req, token }) => {
      const isPublicRoute = publicRoutes.test(req.nextUrl.pathname)
      const isRoleBasedRoute = rolePagesWhitelist.test(req.nextUrl.pathname)
      if (!!token && !isPublicRoute && isRoleBasedRoute) {
        return token.role === 'admin'
      }
      return isPublicRoute || !!token
    },
  },
})

export const config = {
  matcher: ['/((?!api/auth|_next|favicon.ico).*)'],
}
