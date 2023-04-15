import { PropsWithChildren } from 'react'

export default function PublicLayout({ children }: PropsWithChildren) {
  return <div className="flex min-h-full w-full p-2">{children}</div>
}
