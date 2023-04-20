import { classNames } from '@/lib/class-names'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes, forwardRef } from 'react'

const paragraphVariants = cva('max-w-prose text-slate-700 dark:text-slate-300 mb-2', {
  variants: {
    size: {
      default: 'text-base sm:text-lg',
      sm: 'text-sm sm:text-base',
    },
    defaultVariants: {
      size: 'default',
    },
  },
})

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {}

export const Paragraph: FC<ParagraphProps> = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => (
    <p ref={ref} {...props} className={classNames(paragraphVariants({ size, className }))}>
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
