import { LabelHTMLAttributes } from 'react'

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300" {...props} />
}
