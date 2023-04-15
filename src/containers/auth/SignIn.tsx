'use client'

import { Button } from '@/components/ui/button/Button'
import { Form } from '@/components/ui/form/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'

const schema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email').toLowerCase(),
  password: z.string().nonempty('Password is required'),
})

type FormTypes = z.infer<typeof schema>

export const SignIn = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/dashboard'

  const getInTouchForm = useForm<FormTypes>({ resolver: zodResolver(schema) })

  const { handleSubmit, formState, reset } = getInTouchForm

  const onSubmit = async ({ email, password }: FormTypes) => {
    try {
      await signIn('credentials', { email, password, callbackUrl, redirect: false })
      reset()
    } catch (error) {
      console.error(`error`, error)
    }
  }

  return (
    <div className="w-1/2 max-w-md rounded bg-zinc-400 p-4">
      <h2>Welcome back</h2>
      <FormProvider {...getInTouchForm}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Form.Field>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input type="email" name="email" autoComplete="email" />
            <Form.ErrorMessage field="email" />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input type="password" name="password" autoComplete="password" />
            <Form.ErrorMessage field="password" />
          </Form.Field>
          <div className="flex flex-row gap-4">
            <Button size="md" type="submit" fullWidth disabled={formState?.isSubmitting}>
              Sign In
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
