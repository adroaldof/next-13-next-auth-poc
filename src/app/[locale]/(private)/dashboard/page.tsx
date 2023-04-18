import React from 'react'
import { useTranslations } from 'next-intl'

export default function DashboardPage() {
  const translate = useTranslations('DashboardPage')
  return (
    <div>
      <h1>{translate('title')}</h1>
      <p>{translate('description')}</p>
    </div>
  )
}
