'use server'

import { auth } from '@/auth'
import { prisma } from '@/prisma'

export const updateUserStatus = async (
  prevState: { success: boolean },
  formData: FormData
): Promise<{ success: boolean }> => {
  const status = formData.get('status') as string
  const session = await auth()

  if (!session?.user?.email) return { success: false }

  await prisma.user.update({
    where: { email: session.user.email },
    data: { status },
  })

  return { success: true }
}

export const updateUserName = async (
  prevState: { success: boolean },
  formData: FormData
): Promise<{ success: boolean }> => {
  const name = formData.get('name') as string
  const session = await auth()

  if (!session?.user?.email) return { success: false }

  await prisma.user.update({
    where: { email: session.user.email },
    data: { name },
  })

  return { success: true }
}
