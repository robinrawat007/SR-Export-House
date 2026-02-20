import type { PropsWithChildren } from 'react'
import { motion, type Variants } from 'framer-motion'
import clsx from 'clsx'

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'none'

function buildVariants(direction: Direction, distance: number): Variants {
  const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    zoom: { scale: 0.94 },
    none: {},
  }

  const { x = 0, y = 0, scale = 1 } = offsets[direction]

  return {
    hidden: { opacity: 0, x, y, scale },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  once?: boolean
  direction?: Direction
  distance?: number
  amount?: number
}>

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  direction = 'up',
  distance = 28,
  amount = 0.15,
}: RevealProps) {
  const variants = buildVariants(direction, distance)

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}
