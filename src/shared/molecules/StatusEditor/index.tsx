'use client'
import { useActionState, useEffect, useState } from 'react'
import styles from './StatusEditor.module.scss'
import Input from '@/shared/atoms/Input'
import { updateUserStatus } from '@/shared/lib/actions/user'

interface IStatusEditor {
  status: string
}

export const StatusEditor = ({ status }: IStatusEditor) => {
  const [statusValue, setStatusValue] = useState(status)
  const [isEdited, setIsEdited] = useState(false)

  const [formState, formAction] = useActionState(updateUserStatus, {
    success: false,
  })

  useEffect(() => {
    if (formState.success) {
      setIsEdited(false)
    }
  }, [formState])

  return (
    <div className={styles.status}>
      {isEdited ? (
        <form action={formAction}>
          <div className={styles.status_text}>
            <Input
              name="status"
              value={statusValue}
              onChange={(e) => setStatusValue(e.target.value)}
              placeholder="Расскажи всем как у тебя дела"
            />
          </div>
          <button type="submit" className={styles.status_edit}>
            [Сохранить статус]
          </button>
        </form>
      ) : (
        <>
          <div className={styles.status_text}>«{statusValue}»</div>
          <div className={styles.status_edit} onClick={() => setIsEdited(true)}>
            [Изменить статус]
          </div>
        </>
      )}
    </div>
  )
}
