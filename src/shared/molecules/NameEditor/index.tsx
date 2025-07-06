'use client'
import Input from '@/shared/atoms/Input'
import { updateUserName } from '@/shared/lib/actions/user'
import { useActionState, useEffect, useState } from 'react'

interface INameEditor {
  name: string
}
export const NameEditor = ({ name }: INameEditor) => {
  const [inputValue, setInputValue] = useState(name)
  const [isEdited, setIsEdited] = useState(false)

  const [formState, formAction] = useActionState(updateUserName, {
    success: false,
  })

  useEffect(() => {
    if (formState.success) {
      setIsEdited(false)
    }
  }, [formState])

  return (
    <div>
      {isEdited ? (
        <form action={formAction}>
          <Input
            name="name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Введи своё имя"
          />
          <button type="submit">[Сохранить имя]</button>
        </form>
      ) : (
        <>
          <p>{inputValue}</p>
          <div onClick={() => setIsEdited(true)}>[Изменить имя]</div>
        </>
      )}
    </div>
  )
}
