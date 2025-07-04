'use client'

import { logout } from '@/shared/lib/actions/auth'
import { Button } from '../Button'

export const LogOutButton = () => {
  return (
    <Button type="button" onClick={() => logout()}>
      <p>Выйти</p>
    </Button>
  )
}
