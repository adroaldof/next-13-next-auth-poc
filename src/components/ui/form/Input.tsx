import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { Control } from '@radix-ui/react-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return (
    <Control asChild>
      <input
        id={props.name}
        className="flex-1 rounded border border-slate-400 bg-slate-200 px-3 py-2 text-zinc-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-300 dark:text-slate-900"
        {...register(props.name)}
        {...props}
        role={props.role || 'textbox'}
      />
    </Control>
  )
}
