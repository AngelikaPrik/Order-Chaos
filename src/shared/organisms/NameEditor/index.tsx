'use client'
import { Button } from '@/shared/atoms/Button'
import Input from '@/shared/atoms/Input'
import { useState } from 'react'
import styles from './NameEditor.module.scss'
import { EditIcon, SaveIcon } from '@/shared/atoms/Icons'

export const NameEditor = ({ name }: { name: string }) => {
  const [inputValue, setInputValue] = useState(name)
  const [isEdited, setIsEdited] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/user/update', {
      method: 'POST',
      body: JSON.stringify({ name: inputValue }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      setIsEdited(false)
    } else {
      throw new Error('Ошибка при изменении имени')
    }
  }

  return (
    <>
      {isEdited ? (
        <form className={styles.field} onSubmit={onSubmit}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Расскажи всем как у тебя дела..."
          />
          <Button type="submit" disabled={inputValue.trim() === name}>
            <SaveIcon />
          </Button>
        </form>
      ) : (
        <div className={styles.field}>
          <p>{inputValue}</p>
          <Button type="button" onClick={() => setIsEdited(true)}>
            <EditIcon />
          </Button>
        </div>
      )}
    </>
  )
}
