import { classNames } from '@/lib/class-names'
import { Form } from '@radix-ui/react-form'
import { FC } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'

type ProviderProps = {
  children: React.ReactNode
  form: UseFormReturn<any, any>
  onSubmit: (data: any) => void
  className?: string
}

export const Provider: FC<ProviderProps> = ({ children, form, onSubmit, className }) => (
  <FormProvider {...form}>
    <Form onSubmit={onSubmit} className={classNames('flex flex-col gap-4', className)} role="form">
      {children}
    </Form>
  </FormProvider>
)
