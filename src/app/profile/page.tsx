import { auth } from '@/auth'
import { NameEditor } from '@/shared/organisms/NameEditor'
import { LogOutButton } from '@/shared/atoms/LogOutButton'
import { prisma } from '@/prisma'
import styles from './page.module.scss'
import Image from 'next/image'

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
            <div className={styles.profile}>
              <div className={styles.nickname}>
                <Image
                  src={dbUser?.image ?? ''}
                  width={64}
                  height={64}
                  alt="Avatar preview"
                />
                <NameEditor name={dbUser?.name ?? ''} />
              </div>
              <div className={styles.status}>
                <div className={styles.status_text}>
                  «Я с рулетом на балконе!»
                </div>
                <div className={styles.status_edit}>[Изменить статус]</div>
              </div>
            </div>
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
