'use client'

import { login, logout } from '@/shared/lib/actions/auth'
import { Button } from '../Button'

export const LogInButton = () => {
  return (
    <Button type="button" onClick={() => login()}>
      <p>Войти</p>
    </Button>
  )
}

export const LogOutButton = () => {
  return (
    <Button type="button" onClick={() => logout()}>
      <p>Выйти</p>
    </Button>
  )
}
