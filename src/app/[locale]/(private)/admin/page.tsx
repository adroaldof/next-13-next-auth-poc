import React from 'react'
import { useTranslations } from 'next-intl'

export default function AdminPage() {
  const translate = useTranslations('AdminPage')
  return (
    <div>
      <h1>{translate('title')}</h1>
      <p>{translate('description')}</p>
    </div>
  )
}
