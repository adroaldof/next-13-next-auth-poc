import { useFormContext } from 'react-hook-form'
import { FC } from 'react'
import { Message as RxMessage } from '@radix-ui/react-form'

interface ErrorMessageProps {
  field: string
}

function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj)

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

  return result
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ field }) => {
  const {
    formState: { errors },
  } = useFormContext()

  const fieldError = get(errors, field)

  if (!fieldError) {
    return null
  }

  return (
    <RxMessage className="mt-1 text-xs font-bold text-red-600 dark:text-rose-500" role="alert">
      {fieldError.message?.toString()}
    </RxMessage>
  )
}
