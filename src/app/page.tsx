import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-2">
      <h1 className="text-zinc-950">Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias suscipit officia asperiores quibusdam tempora
        totam magnam saepe ea vel quaerat, aliquam temporibus earum assumenda consequatur quisquam officiis ex aperiam
        deserunt.
      </p>
    </div>
  )
}
