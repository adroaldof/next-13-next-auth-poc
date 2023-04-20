import withAuth from 'next-auth/middleware'
import createMiddleware from 'next-intl/middleware'

/**
 * FIXME: this is a workaround to use next-auth with next-intl
 * @see https://next-auth.js.org/configuration/options
 * at the moment 2023-04-19 it was not possible to localize the pages from next auth
 * I'll wait for the next releases to check when it could be possible the integration with next-intl
 * https://stackoverflow.com/questions/75983133/nextjs-next-auth-wrong-redirection-with-next-intl
 */
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
