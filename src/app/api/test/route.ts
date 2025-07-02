import { NextResponse } from 'next/server'
import { prisma } from '@/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (err) {
    console.error('Prisma error:', err)
    return NextResponse.json({ error: 'Prisma failed' }, { status: 500 })
  }
}
