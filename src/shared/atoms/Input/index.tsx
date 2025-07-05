import { ChangeEvent } from 'react'
import styles from './Input.module.scss'

interface IInput {
  type?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  name?: string
  id?: string
  disabled?: boolean
  required?: boolean
  autoFocus?: boolean
}

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  id,
  disabled = false,
  required = false,
  autoFocus = false,
}: IInput) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={id}
      disabled={disabled}
      required={required}
      autoFocus={autoFocus}
      className={styles.input}
    />
  )
}

export default Input
