import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect('/api/auth/signin')
  }

  return <>{children}</>
}
