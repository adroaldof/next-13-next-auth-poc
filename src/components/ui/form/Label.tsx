import { LabelHTMLAttributes } from 'react'

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className="text-sm text-slate-700 dark:text-slate-300 flex items-center justify-between" {...props} />
}
