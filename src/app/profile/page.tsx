import { auth } from '@/auth'
import { LogOutButton } from '@/shared/atoms/LogInOutButton'
import Image from 'next/image'

const ProfilePage = async () => {
  const session = await auth()

  return (
    <section>
      <p> User signed in with name: {session?.user?.name}</p>
      <p> User signed in with email: {session?.user?.email}</p>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          width={48}
          height={48}
          alt={session.user.name ?? 'Avatar'}
        />
      )}
      <LogOutButton />
    </section>
  )
}

export default ProfilePage
