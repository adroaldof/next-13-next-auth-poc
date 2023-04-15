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
      className="flex-1 rounded border border-zinc-700 bg-zinc-200 px-3 py-2 text-zinc-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      {...register(props.name)}
      {...props}
    />
  )
}
