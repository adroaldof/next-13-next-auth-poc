import { Link as NextAuthLink } from 'next-intl'
import { ComponentProps, forwardRef } from 'react'

type LinkProps = ComponentProps<typeof NextAuthLink>

function Link({ href, ...rest }: LinkProps, ref: LinkProps['ref']) {
  return (
    <NextAuthLink
      className="leading-tight tracking-tighter text-slate-700 hover:underline dark:text-slate-200"
      ref={ref}
      href={href}
      {...rest}
    />
  )
}

export default forwardRef(Link)
