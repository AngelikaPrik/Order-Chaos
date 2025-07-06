import { auth } from '@/auth'
import { LogOutButton } from '@/shared/atoms/LogOutButton'
import { prisma } from '@/prisma'
import styles from './page.module.scss'
import { ProfileBar } from '@/shared/organisms/ProfileBar'

const ProfilePage = async () => {
  const session = await auth()
  const currentEmail = session?.user?.email

  const dbUser = await prisma.user.findUnique({
    where: { email: currentEmail ?? undefined },
  })

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профиль</h2>
          <div className={styles.content}>
            <ProfileBar user={dbUser} />
            <div className={styles.details}>
              <LogOutButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
