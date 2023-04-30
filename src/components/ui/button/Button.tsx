import { classNames } from '@/lib/class-names'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

export const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded transition-colors disabled:pointer-events-none text-slate-200 dark:text-slate-900 dark:hover:bg-slate-200 disabled:opacity-50 disabled:text-slate-300',
  {
    variants: {
      variant: {
        default: 'bg-slate-600 hover:bg-slate-800 dark:bg-slate-300',
        destructive:
          'text-red-500 dark:text-red-500 hover:bg-red-600 hover:text-slate-200 dark:hover:text-slate-200 dark:hover:bg-red-600',
        outline:
          'text-slate-900 dark:text-slate-200 bg-slate-300 hover:bg-slate-200 dark:bg-slate-500 dark:hover:bg-slate-600 border border-slate-900 dark:border-slate-400',
        ghost: 'text-slate-900 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-900',
        link: 'text-slate-700 dark:text-slate-200 bg-transparent dark:bg-transparent underline-offset-4 hover:underline hover:bg-transparent dark:hover:bg-transparent !px-0',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        lg: 'h-11 px-8 text-lg',
        md: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'default', size = 'md', isLoading, disabled, fullWidth, role, ...props }, ref) => (
    <button
      className={classNames(buttonVariants({ variant, size, className, fullWidth }))}
      ref={ref}
      disabled={isLoading || disabled}
      type="button"
      role={role || 'button'}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  ),
)

Button.displayName = 'Button'
