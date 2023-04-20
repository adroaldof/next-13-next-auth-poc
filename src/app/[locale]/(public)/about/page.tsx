import { Heading } from '@/components/ui/text/Heading'
import { Paragraph } from '@/components/ui/text/Paragraph'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function AboutPage() {
  const translate = useTranslations('AboutPage')
  return (
    <div>
      <Heading size="sm">{translate('title')}</Heading>
      <Paragraph>{translate('description')}</Paragraph>
      <Paragraph>- {translate('nextJs')}</Paragraph>
      <Paragraph>- {translate('nextAuth')}</Paragraph>
      <Paragraph>- {translate('nextIntl')}</Paragraph>
      <Paragraph>- {translate('jest')}</Paragraph>
      <Paragraph>- {translate('cypress')}</Paragraph>
    </div>
  )
}
