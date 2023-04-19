import { useTranslations } from 'next-intl'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const translate = useTranslations('Home')
  return (
    <div className="p-2">
      <h1 className="text-zinc-950">{translate('title')}</h1>
      <p>{translate('welcomeMessage')}</p>
    </div>
  )
}
