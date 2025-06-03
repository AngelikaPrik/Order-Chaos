import styles from './FieldGroup.module.scss'
import { Input } from '../../atoms/Input'

interface IFieldGroup {
  email: string
  password: string
  onEmailChange: (v: string) => void
  onPasswordChange: (v: string) => void
}

export const FieldGroup = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
}: IFieldGroup) => {
  return (
    <div className={styles.group}>
      <label className={styles.label}>
        Email
        <Input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="example@mail.com"
        />
      </label>

      <label className={styles.label}>
        Пароль
        <Input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="********"
        />
      </label>
    </div>
  )
}
