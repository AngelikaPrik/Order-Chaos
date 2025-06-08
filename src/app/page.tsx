'use client'

import { login } from '@/shared/lib/actions/auth'
import { Button } from '@/shared/atoms/Button'

export default function Home() {
  return (
    <section>
      <h2>Вы не зарегистирированы?</h2>
      <Button type="button" onClick={() => login()}>
        <p>Войти</p>
      </Button>
    </section>
  )
}
