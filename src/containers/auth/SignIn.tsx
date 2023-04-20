'use client'

import { Button } from '@/components/ui/button/Button'
import { Form } from '@/components/ui/form/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'
import { Heading } from '@/components/ui/text/Heading'

const schema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email').toLowerCase(),
  password: z.string().nonempty('Password is required'),
})

type FormTypes = z.infer<typeof schema>

export const SignIn = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/dashboard'

  const getInTouchForm = useForm<FormTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'adroaldof@gmail.com',
      password: 'monitor7',
    },
  })

  const { handleSubmit, formState } = getInTouchForm

  const onSubmit = async ({ email, password }: FormTypes) => {
    try {
      await signIn('credentials', { email, password, callbackUrl, redirect: true })
    } catch (error) {
      console.error(`error sign on in:`, error)
    }
  }

  return (
    <main className="w-1/2 max-w-md rounded border-b-2 border-r-2 bg-slate-100 p-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading size="sm">Welcome back</Heading>
      <FormProvider {...getInTouchForm}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" role="form">
          <Form.Field>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input type="email" name="email" autoComplete="email" />
            <Form.ErrorMessage field="email" />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input type="password" name="password" autoComplete="password" role="textbox" />
            <Form.ErrorMessage field="password" />
          </Form.Field>
          <div className="flex flex-row gap-4">
            <Button
              size="md"
              type="submit"
              fullWidth
              disabled={formState?.isSubmitting}
              isLoading={formState?.isSubmitting}
            >
              Sign In
            </Button>
          </div>
        </form>
      </FormProvider>
    </main>
  )
}
