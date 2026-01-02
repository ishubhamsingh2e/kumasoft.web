"use client"

import { motion } from "framer-motion"

export interface GridItemData {
  id: string
  title: string
  description: string
}

const container = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
}

export function InfoGrid({ items }: { items: GridItemData[] }) {
  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8"
    >
      {items.map((data) => (
        <motion.div key={data.id} variants={item} className="space-y-2">
          <span className="text-xs font-medium  block text-secondary">{data.id}</span>
        <div className="">
            <h4 className="text-2xl font-bold leading-tight">{data.title}</h4>
          <p className="text-muted-foreground leading-relaxed text-md max-w-sm">{data.description}</p>
        </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
