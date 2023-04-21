import { FC, HTMLAttributes } from 'react'
import { Field as RxField } from '@radix-ui/react-form'

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  name: string
}

export const Field: FC<FieldProps> = (props) => <RxField className="flex flex-col gap-1" {...props} />
