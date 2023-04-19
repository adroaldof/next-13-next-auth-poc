'use client'

import { Session } from 'next-auth'
import { Button } from '../ui/button/Button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown/DropdownMenu'
import { useLocale, useTranslations } from 'next-intl'
import { FC } from 'react'
import Image from 'next/image'

import profilePicture from '../../../public/profile-picture.png'
import { signOut } from 'next-auth/react'
// import { toast } from '../ui/toast/Toaster'
import { useRouter } from 'next/navigation'

type ProfileDropdownProps = {
  session: Session | null
}

export const ProfileDropdown: FC<ProfileDropdownProps> = ({ session }) => {
  const router = useRouter()
  const locale = useLocale()
  const translateNavbar = useTranslations('Navbar')

  const onSignOut = async () => {
    try {
      await signOut({ callbackUrl: `/${locale}/see-you-soon` })
    } catch (error) {
      console.error({ type: 'error', title: 'Error singing out', message: 'Please try again later' })
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-full p-0">
          <Image
            src={session?.user?.image || profilePicture}
            alt={session?.user?.name || 'Picture picture'}
            width={36}
            height={36}
            className="rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => onSignOut()}>{translateNavbar('signOut')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
