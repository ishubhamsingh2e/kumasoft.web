"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "motherson", logo: "/clients/mothersongrey.png" },
  { name: "shriram-pistons", logo: "/clients/shriram-pistons.png" },
  { name: "sandanvikas", logo: "/clients/sandanvikas.png" },
  { name: "subros", logo: "/clients/subros.png" },
  { name: "global-autotech", logo: "/clients/global-autotech.png" },
  { name: "cyberflake", logo: "/clients/cyberflake.png" },
  { name: "bandhu", logo: "/clients/bandhu.png" },
  { name: "tej", logo: "/clients/tej.png" },
  { name: "unominda", logo: "/clients/unominda.png" },
  { name: "kinetix", logo: "/clients/kinetix.png" },

]

const container = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export function ClientLogos() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center items-center"
    >
      {clients.map((client) => (
        <motion.div
          key={client.name}
          variants={item}
          className="bg-white border border-border/40 rounded-xl p-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 aspect-[3/2]"
        >
          {/* <Image
            src={client.logo || "/placeholder.svg"}
            alt={`${client.name} logo`}
            fill
            style={{ objectFit: "contain",height:"120px" }}
            className="opacity-70 hover:opacity-100 transition-opacity"
          /> */}
          <img src={client.logo || "/placeholder.svg"} alt={`${client.name} logo`} className="h-[100px] w-auto object-contain"/>
        </motion.div>
      ))}
    </motion.div>
  )
}
