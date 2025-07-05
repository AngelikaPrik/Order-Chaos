'use client'

import { Button } from '@/shared/atoms/Button'
import Image from 'next/image'
import { useRef, useState } from 'react'

export const AvatarEditor = ({ initialAvatar }: { initialAvatar: string }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(initialAvatar || null)
  const [uploading, setUploading] = useState(false)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
    }
  }

  const onUpload = async () => {
    if (!file) return
    setUploading(true)

    const formData = new FormData()
    formData.append('image', file)

    const res = await fetch('/api/user/update', {
      method: 'POST',
      body: formData,
    })

    if (res) {
      setUploading(false)
      setFile(null)
    }
  }

  const onClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div>
      <div onClick={onClick}>
        {preview ? (
          <Image src={preview} width={64} height={64} alt="Avatar preview" />
        ) : (
          <div>👤</div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={onFileChange}
        style={{ display: 'none' }}
      />

      {file && (
        <Button type="button" onClick={onUpload} disabled={uploading}>
          {uploading ? '⏳ Загрузка...' : 'Сохранить'}
        </Button>
      )}
    </div>
  )
}
