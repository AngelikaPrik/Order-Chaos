import { PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface IButton {
  onClick?: () => void
  type: 'button' | 'submit' | 'reset'
}

export const Button = ({
  type,
  onClick,
  children,
}: PropsWithChildren<IButton>) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  )
}
