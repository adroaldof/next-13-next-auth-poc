import { FC, LabelHTMLAttributes } from 'react'
import { Label as RxLabel } from '@radix-ui/react-form'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: FC<LabelProps> = (props: LabelHTMLAttributes<HTMLLabelElement>) => (
  <RxLabel className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300" {...props} />
)
