import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      id={props.name}
      className="flex-1 rounded border border-slate-600 shadow-sm px-3 py-2 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
      {...register(props.name)}
      {...props}
    />
  )
}
