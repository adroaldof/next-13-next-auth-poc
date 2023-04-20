import React from 'react'
import { useTranslations } from 'next-intl'
import { Heading } from '@/components/ui/text/Heading'
import { Paragraph } from '@/components/ui/text/Paragraph'

export default function AdminPage() {
  const translate = useTranslations('AdminPage')
  return (
    <div>
      <Heading size="sm">{translate('title')}</Heading>
      <Paragraph>{translate('description')}</Paragraph>
    </div>
  )
}
