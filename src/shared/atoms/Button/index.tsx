import { PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface IButton {
  type: 'button' | 'submit' | 'reset'
}

export const Button = ({ type, children }: PropsWithChildren<IButton>) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  )
}
