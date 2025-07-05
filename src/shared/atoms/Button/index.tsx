import { PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface IButton {
  onClick?: () => void
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = ({
  type,
  onClick,
  disabled = false,
  children,
}: PropsWithChildren<IButton>) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={styles.button}
    >
      {children}
    </button>
  )
}
