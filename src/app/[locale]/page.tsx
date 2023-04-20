import { Heading } from '@/components/ui/text/Heading'
import { Paragraph } from '@/components/ui/text/Paragraph'
import { useTranslations } from 'next-intl'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const translate = useTranslations('Home')
  return (
    <div className="p-2">
      <Heading size="sm">{translate('title')}</Heading>
      <Paragraph>{translate('welcomeMessage')}</Paragraph>
    </div>
  )
}
