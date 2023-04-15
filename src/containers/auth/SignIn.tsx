'use client'

import { Button } from '@/components/ui/button/Button'
import { Form } from '@/components/ui/form/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

export const SignIn = () => {
  const router = useRouter()

  const schema = buildFormSchema()

  type FormTypes = z.infer<typeof schema>

  const getInTouchForm = useForm<FormTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'adroaldof@gmail.com',
      password: 'monitor7',
    },
  })

  const { handleSubmit, formState, reset } = getInTouchForm

  const onSubmit = async ({ email, password }: FormTypes) => {
    try {
      const auth = await signIn('credentials', { email, password, redirect: false })
      console.log(`** auth`, JSON.stringify(auth, null, 2))
      reset()
      console.log(`***********************`, `  `, `***********************`)
      router.replace(`/dashboard`)
    } catch (error) {
      console.error(`error`, error)
    }
  }

  return (
    <div className=" max-w-lg rounded border-zinc-700 bg-green-400 p-4">
      <h2>Login</h2>
      <FormProvider {...getInTouchForm}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-teal-500">
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

const buildFormSchema = () =>
  z.object({
    email: z.string().nonempty('Email is required').email('Invalid email').toLowerCase(),
    password: z.string().nonempty('Password is required'),
  })
