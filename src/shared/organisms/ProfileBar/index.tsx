'use client'
import { NameEditor } from '@/shared/molecules/NameEditor'
import styles from './ProfileBar.module.scss'
import Image from 'next/image'
import { StatusEditor } from '@/shared/molecules/StatusEditor'
import { User } from '@prisma/client'

interface IProfileBar {
  user: User | null
}

export const ProfileBar = ({ user }: IProfileBar) => {
  return (
    <div className={styles.profile}>
      <div className={styles.nickname}>
        <Image
          src={user?.image ?? ''}
          width={64}
          height={64}
          alt="Avatar preview"
        />
        <NameEditor name={user?.name ?? ''} />
      </div>
      <StatusEditor status={user?.status ?? ''} />
    </div>
  )
}
