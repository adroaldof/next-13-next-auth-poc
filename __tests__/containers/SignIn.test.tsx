import { SignIn } from '@/containers/auth/SignIn'
import { afterEach, describe, expect, test } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as nextAuthReact from 'next-auth/react'
import * as nextNavigation from 'next/navigation'
import sinon from 'sinon'

describe('<SignIn />', () => {
  afterEach(() => {
    sinon.restore()
  })

  test('renders the sign in header', () => {
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    expect(main.getByRole('heading', { level: 1, name: /welcome back/i })).toBeDefined()
  })

  test('renders the sign in form with the email and password fields', () => {
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    expect(main.getByRole('form')).toBeDefined()
    const form = within(main.getByRole('form'))
    expect(form.getByLabelText(/email/i)).toBeDefined()
    expect(form.getByLabelText(/password/i)).toBeDefined()
  })

  test('shows required email and password when try to submit an empty form', async () => {
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    const form = within(main.getByRole('form'))
    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
    })
    expect(form.getByRole('textbox', { description: /email is required/i })).toBeDefined()
    expect(form.getByRole('textbox', { description: /password is required/i })).toBeDefined()
  })

  test('shows invalid email message when the email is invalid', async () => {
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    const form = within(main.getByRole('form'))
    await act(async () => {
      await userEvent.type(form.getByRole('textbox', { name: /email/i }), 'not@email')
      await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
    })
    expect(form.getByRole('textbox', { description: /invalid email/i })).toBeDefined()
  })

  test('calls the next auth sign in function when the form is valid', async () => {
    const email = 'john.doe@email.com'
    const password = '5tr0ngPa55w0r:)'
    const signInMock = sinon.mock(nextAuthReact)
    const callbackUrl = '/dashboard'
    signInMock.expects('signIn').once().calledWith('credentials', { email, password, callbackUrl })
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    const form = within(main.getByRole('form'))
    await act(async () => {
      await userEvent.type(form.getByRole('textbox', { name: /email/i }), email)
      await userEvent.type(form.getByRole('textbox', { name: /password/i }), password)
      await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
    })
    signInMock.verify()
  })

  test('calls the next auth with custom callback url', async () => {
    const email = 'john.doe@email.com'
    const password = '5tr0ngPa55w0r:)'
    const callbackUrl = '/custom-callback-url'
    sinon
      .stub(nextNavigation, 'useSearchParams')
      .withArgs()
      .returns({ get: () => callbackUrl } as any)
    const signInMock = sinon.mock(nextAuthReact)
    signInMock.expects('signIn').once().calledWith('credentials', { email, password, callbackUrl })
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    const form = within(main.getByRole('form'))
    await act(async () => {
      await userEvent.type(form.getByRole('textbox', { name: /email/i }), email)
      await userEvent.type(form.getByRole('textbox', { name: /password/i }), password)
      await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
    })
    signInMock.verify()
  })

  test('logs the error when sign in has an error', async () => {
    const email = 'john.doe@email.com'
    const password = '5tr0ngPa55w0r:)'
    const errorMessage = 'Sign in error'
    const consoleMock = sinon.mock(console)
    consoleMock.expects('error').once().calledWith(errorMessage)
    const signInMock = sinon.mock(nextAuthReact)
    signInMock.expects('signIn').once().throws(new Error(errorMessage))
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    const form = within(main.getByRole('form'))
    await act(async () => {
      await userEvent.type(form.getByRole('textbox', { name: /email/i }), email)
      await userEvent.type(form.getByRole('textbox', { name: /password/i }), password)
      await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
    })
    signInMock.verify()
    consoleMock.verify()
  })
})
