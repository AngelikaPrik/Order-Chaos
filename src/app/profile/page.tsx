import { auth } from '@/auth'
import { NameEditor } from '@/shared/organisms/NameEditor'
import { LogOutButton } from '@/shared/atoms/LogOutButton'
import { prisma } from '@/prisma'
import styles from './page.module.scss'
import { AvatarEditor } from '@/shared/organisms/AvatarEditor'

const ProfilePage = async () => {
  const session = await auth()
  const currentEmail = session?.user?.email

  const dbUser = await prisma.user.findUnique({
    where: { email: currentEmail ?? undefined },
  })

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AvatarEditor initialAvatar={dbUser?.image ?? ''} />
        <NameEditor name={dbUser?.name ?? ''} />
        <LogOutButton />
      </div>
    </section>
  )
}

export default ProfilePage
