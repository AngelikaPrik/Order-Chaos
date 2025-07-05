import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/prisma'
import path from 'path'
import fs from 'fs'

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const contentType = req.headers.get('content-type') || ''

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataToUpdate: any = {}

  if (contentType.includes('multipart/form-data')) {
    const formData = await req.formData()
    const file = formData.get('image') as File | null

    if (file && file.name) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const filename = `${Date.now()}-${file.name}`
      const uploadDir = path.join(process.cwd(), 'public/uploads')

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
      }

      const filePath = path.join(uploadDir, filename)
      fs.writeFileSync(filePath, buffer)

      dataToUpdate.image = `/uploads/${filename}`
    }
  } else if (contentType.includes('application/json')) {
    const body = await req.json()
    const allowedFields = ['name']
    for (const key of allowedFields) {
      if (body[key]) dataToUpdate[key] = body[key]
    }
  }

  if (Object.keys(dataToUpdate).length === 0) {
    return NextResponse.json(
      { error: 'Нет данных для обновления' },
      { status: 400 }
    )
  }

  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: dataToUpdate,
  })

  return NextResponse.json({ success: true, user: updatedUser })
}
