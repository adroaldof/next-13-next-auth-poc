'use client'

import { ReactNode, FC, useState } from 'react'
import { Icons } from '../ui/icons/Icons'
import { Transition } from '@headlessui/react'
import { Button } from '../ui/button/Button'

interface NavbarProps {
  logo: ReactNode
  children: ReactNode
  themeSwitcherButton?: ReactNode
  languageSwitcherButton?: ReactNode
}

export const Navbar: FC<NavbarProps> = ({ logo, children, themeSwitcherButton, languageSwitcherButton }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-slate-300 bg-gray-200 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex items-center">
          <div className="flex flex-1 items-center md:justify-between">
            <div className="flex-shrink-0">{logo}</div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-4">
                {children}
                <div className="flex gap-2">
                  {themeSwitcherButton}
                  {languageSwitcherButton}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 md:hidden">
            {themeSwitcherButton}
            {languageSwitcherButton}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Icons.Menu className="block text-slate-700 dark:text-slate-200" aria-hidden="true" />
              ) : (
                <Icons.X className="block text-slate-700 dark:text-slate-200" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="border-t border-slate-300 p-4 dark:border-slate-700 md:hidden" id="mobile-menu">
            <div ref={ref} className="flex flex-col">
              {children}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}
