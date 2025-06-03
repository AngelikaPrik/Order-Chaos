'use client'
import { useState } from 'react'

export const useAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Авторизуем:', email, password)
    setLoading(false)
  }

  return {
    email,
    password,
    loading,
    setEmail,
    setPassword,
    onSubmit,
  }
}
