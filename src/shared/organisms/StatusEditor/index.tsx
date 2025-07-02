'use client'
import { useState } from 'react'

export const StatusEditor = ({ initialStatus }: { initialStatus: string }) => {
  const [status, setStatus] = useState(initialStatus)
  const [responseStatus, setResponseStatus] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResponseStatus('⏳')

    const res = await fetch('/api/user/update', {
      method: 'POST',
      body: JSON.stringify({ status }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      setResponseStatus('Сохранено')
    } else {
      setResponseStatus('Ошибка')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Расскажи всем как у тебя дела..."
        rows={4}
        style={{ width: '100%', maxWidth: 400 }}
      />
      <br />
      <button type="submit">Сохранить</button>
      <span style={{ marginLeft: 10 }}>{responseStatus}</span>
    </form>
  )
}
