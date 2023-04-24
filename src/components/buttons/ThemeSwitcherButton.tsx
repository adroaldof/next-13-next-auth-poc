'use client'

import { useTheme } from 'next-themes'
import { Icons } from '../ui/icons/Icons'
import { Button } from '../ui/button/Button'

export const ThemeSwitcherButton = () => {
  const { setTheme, theme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      data-cy="theme-switcher"
      aria-label="Theme switcher"
    >
      <Icons.Sun className="rotate-0 scale-0 stroke-1 text-slate-700 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-100 dark:text-slate-200 dark:hover:text-slate-300" />
      <Icons.Moon className="absolute rotate-0 scale-100 stroke-1 text-slate-700 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-0 dark:text-slate-200 dark:hover:text-slate-300" />
      <span className="sr-only">Theme switcher</span>
    </Button>
  )
}
