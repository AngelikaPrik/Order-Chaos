import styles from './Input.module.scss'
import { ChangeEvent } from 'react'

interface InputProps {
  type: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const Input = ({ type, value, onChange, placeholder }: InputProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
