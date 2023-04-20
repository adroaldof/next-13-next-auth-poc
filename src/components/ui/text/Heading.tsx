import { classNames } from '@/lib/class-names'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes, forwardRef } from 'react'

const headingVariants = cva('text-slate-700 dark:text-slate-300 leading-tight tracking-tighter mb-4', {
  variants: {
    size: {
      xl: 'text-4xl md:text-5xl lg:text-7xl',
      lg: 'text-3xl md:text-4xl lg:text-6xl',
      md: 'text-2x1 md:text-3xl lg:text-4xl',
      sm: 'text-1xl md:text-2xl lg:text-3xl',
      xs: 'text-lg md:text-1xl lg:text-2xl',
    },
    defaultVariants: {
      size: 'md',
    },
  },
})

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

export const Heading: FC<HeadingProps> = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, children, ...props }, ref) => (
    <h1 ref={ref} {...props} className={classNames(headingVariants({ size, className }))}>
      {children}
    </h1>
  ),
)

Heading.displayName = 'Heading'
