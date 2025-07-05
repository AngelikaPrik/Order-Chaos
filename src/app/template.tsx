'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="popLayout">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, filter: 'blur(5px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
        }}
        exit={{ opacity: 0, filter: 'blur(5px)' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
