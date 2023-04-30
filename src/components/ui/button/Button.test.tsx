import { vi, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/button/Button'
import Sinon from 'sinon'

test('calls supplied on click function when clicked', async () => {
  const onClick = Sinon.spy()
  render(<Button onClick={onClick} />)
  await userEvent.click(screen.getByRole('button'))
  expect(onClick.calledOnce).toBe(true)
})

test('does not call supplied on click function when button is disabled', async () => {
  const onClick = Sinon.spy()
  render(<Button onClick={onClick} disabled={true} />)
  await userEvent.click(screen.getByRole('button'))
  expect(onClick.calledOnce).not.toBe(true)
})

test('does not call supplied on click function when button is loading', async () => {
  const onClick = Sinon.spy()
  render(<Button onClick={onClick} isLoading={true} />)
  await userEvent.click(screen.getByRole('button'))
  expect(onClick.calledOnce).not.toBe(true)
})
