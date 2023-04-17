import { SignIn } from '@/containers/auth/SignIn'
import { describe, expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<SignIn />', () => {
  test('renders the sign in header', () => {
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    expect(main.getByRole('heading', { level: 2, name: /welcome back/i })).toBeDefined()
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
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
    expect(form.getByText(/email is required/i)).toBeDefined()
    expect(form.getByText(/password is required/i)).toBeDefined()
  })

  test('shows invalid email message when the email is invalid', async () => {
    render(<SignIn />)
    const main = within(screen.getByRole('main'))
    const form = within(main.getByRole('form'))
    await userEvent.type(form.getByRole('textbox', { name: /email/i }), 'not@email')
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
    expect(form.getByText(/invalid email/i)).toBeDefined()
  })
})
