import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return <div className="flex min-h-full w-full items-center justify-center">{children}</div>
}
