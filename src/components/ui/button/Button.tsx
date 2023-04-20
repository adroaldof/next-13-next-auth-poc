import { classNames } from '@/lib/class-names'
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

export const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded transition-colors disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-slate-600 text-white hover:bg-slate-800 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200',
        destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-slate-600 text-white hover:bg-slate-800 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200 border border-slate-200 dark:border-slate-700',
        subtle: 'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300',
        ghost:
          'bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        lg: 'h-11 px-8',
        md: 'h-10 py-2 px-4',
        sm: 'h-9 px-2',
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
  ({ className, children, variant, isLoading, size, fullWidth, ...props }, ref) => (
    <button
      className={classNames(buttonVariants({ variant, size, className }), { 'w-full': fullWidth })}
      ref={ref}
      disabled={isLoading}
      type="button"
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  ),
)

Button.displayName = 'Button'
