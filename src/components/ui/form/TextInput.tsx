import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { Control } from '@radix-ui/react-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const TextInput = (props: InputProps) => {
  const { register } = useFormContext()

  return (
    <Control asChild>
      <input
        id={props.name}
        className="flex-1 rounded border border-slate-400 bg-slate-200 px-3 py-2 text-zinc-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-100 dark:text-slate-900"
        role="textbox"
        {...register(props.name)}
        {...props}
      />
    </Control>
  )
}
