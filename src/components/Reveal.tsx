import type { PropsWithChildren } from 'react'
import { motion, type Variants } from 'framer-motion'
import clsx from 'clsx'

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  once?: boolean
}>

export function Reveal({ children, className, delay = 0, once = true }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={defaultVariants}
      transition={{ delay }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}
