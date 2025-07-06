import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/prisma'

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { name } = await req.json()

  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: { name },
  })

  return NextResponse.json({ success: true, user: updatedUser })
}
