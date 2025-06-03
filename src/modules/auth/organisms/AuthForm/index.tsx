'use client'
import styles from './AuthForm.module.scss'
import { Button } from '@/shared/atoms/Button'
import { FieldGroup } from '../../molecules/FieldGroup'
import { useAuth } from '../../hooks/useAuth'

export const AuthForm = () => {
  const { email, password, setEmail, setPassword, onSubmit, loading } =
    useAuth()

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <FieldGroup
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
      />
      <Button type="submit">{loading ? 'Загрузка...' : 'Войти'}</Button>
    </form>
  )
}
