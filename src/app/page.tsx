'use server'
import { auth } from '@/auth'
import { LogInButton } from '@/shared/atoms/LogInOutButton'
import { redirect } from 'next/navigation'

const Home = async () => {
  const session = await auth()

  if (session?.user) {
    redirect('/profile')
  }

  return (
    <section>
      <h2>Вы не зарегистирированы?</h2>
      <LogInButton />
    </section>
  )
}

export default Home
