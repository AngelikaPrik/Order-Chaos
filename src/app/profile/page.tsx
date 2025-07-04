import { auth } from '@/auth'
import { StatusEditor } from '@/shared/organisms/StatusEditor'
import { LogOutButton } from '@/shared/atoms/LogOutButton'
import Image from 'next/image'
import { prisma } from '@/prisma'

const ProfilePage = async () => {
  const session = await auth()
  const currentEmail = session?.user?.email

  const dbUser = await prisma.user.findUnique({
    where: { email: currentEmail ?? undefined },
  })

  const otherUsers = await prisma.user.findMany({
    where: {
      NOT: { email: currentEmail },
    },
  })

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ display: 'flex' }}>
        {session?.user?.image && (
          <Image
            src={session.user.image}
            width={48}
            height={48}
            alt={session.user.name ?? 'Avatar'}
          />
        )}
        <p>{session?.user?.name}</p>
      </div>

      <StatusEditor initialStatus={dbUser?.status ?? ''} />

      {otherUsers.length > 0 && (
        <>
          <h3>Другие пользователи:</h3>
          <ul>
            {otherUsers.map((user) => (
              <li key={user.id} style={{ display: 'flex' }}>
                <p>{user.name}</p>
                {user.image && (
                  <Image
                    src={user.image}
                    width={32}
                    height={32}
                    alt="Avatar"
                    style={{ borderRadius: '50%' }}
                  />
                )}
                <p>Статус юзера: {user.status}</p>
              </li>
            ))}
          </ul>
        </>
      )}

      <LogOutButton />
    </section>
  )
}

export default ProfilePage
