'use client'

import { login } from '@/shared/lib/actions/auth'
import { Button } from '../Button'

export const LogInButton = () => {
  return (
    <Button type="button" onClick={() => login()}>
      <p>Войти</p>
    </Button>
  )
}
