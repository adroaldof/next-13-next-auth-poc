import { PropsWithChildren } from 'react'

export default function PrivateLayout({ children }: PropsWithChildren) {
  return <div className="flex min-h-full w-full p-2">{children}</div>
}
