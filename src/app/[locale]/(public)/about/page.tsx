import { useTranslations } from 'next-intl'
import React from 'react'

export default function AboutPage() {
  const translate = useTranslations('AboutPage')
  return (
    <div>
      <h1>{translate('title')}</h1>
      <p>{translate('description')}</p>
      <p>- {translate('nextJs')}</p>
      <p>- {translate('nextAuth')}</p>
      <p>- {translate('nextIntl')}</p>
      <p>- {translate('jest')}</p>
      <p>- {translate('cypress')}</p>
    </div>
  )
}
