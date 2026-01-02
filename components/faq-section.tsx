"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQ_ITEMS = [
  {
    id: "services-offered",
    number: "01",
    question: "What services does Kumasoft provide?",
    content:
      "We deliver end-to-end digital solutions: from custom web applications and branding to immersive 3D experiences. Our goal is to blend high-end design with robust engineering.",
  },
  {
    id: "project-timeline",
    number: "02",
    question: "How long does a typical project take?",
    content:
      "Speed depends on complexity. Corporate sites take 4-6 weeks, while deep-tech products can span 3-6 months. We prioritize quality over rushing, but we never miss a deadline.",
  },
  {
    id: "pricing-model",
    number: "03",
    question: "How do you price your projects?",
    content:
      "Value-based pricing. We offer milestone-driven contracts that ensure transparency. No hidden fees, just clear deliverables tailored to your business goals.",
  },
  {
    id: "client-involvement",
    number: "04",
    question: "Will I be involved in the process?",
    content:
      "Highly. We operate on a 'Radical Transparency' model. You'll have access to our Slack channels and weekly sprint reviews to ensure we're perfectly aligned.",
  },
  {
    id: "post-launch-support",
    number: "05",
    question: "Do you offer support after delivery?",
    content:
      "Delivery is just the beginning. We provide dedicated post-launch monitoring and iterative scaling support to ensure your product thrives in the wild.",
  },
]

export function FaqSection() {
  const [openId, setOpenId] = React.useState<string | null>(FAQ_ITEMS[0].id)

  return (
    <section className="w-full bg-primary py-24 px-6 md:px-12 overflow-hidden relative">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full -ml-32 -mb-32" />

      <div className="container mx-auto grid lg:grid-cols-12 gap-16 relative z-10">
        {/* Left Side: Editorial Intro */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-secondary/5 text-accent text-xs font-bold tracking-widest uppercase"
          >
            <span className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
            Common Inquiries
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9]"
          >
            Curiosity is the <span className="text-accent italic">engine</span> of innovation.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-sm leading-relaxed"
          >
            Everything you need to know about how we work, our process, and what makes us different from the rest.
          </motion.p>

          <div className="pt-8 group">
            <button className="flex items-center gap-4 text-white font-bold group">
              <span className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-accent transition-all duration-500">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-xl tracking-tight underline decoration-accent underline-offset-8">
                Book a session
              </span>
            </button>
          </div>
        </div>

        {/* Right Side: Interactive List */}
        <div className="lg:col-span-7 space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "group relative border-b border-white/10 transition-all duration-500",
                openId === item.id ? "pb-8" : "pb-6",
              )}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="flex w-full items-start justify-between text-left pt-6 relative z-10"
              >
                <div className="absolute inset-0 -mx-6  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10" />

                <div className="flex items-start gap-6 md:gap-12 transition-transform duration-500 group-hover:translate-x-2">
                  <span className="text-xs font-mono text-accent pt-1">{item.number}</span>
                  <span
                    className={cn(
                      "text-2xl md:text-4xl font-bold tracking-tighter hover:text-secondary transition-all duration-500 hover:skew-x-[-8deg] ",
                      openId === item.id ? "text-white" : "text-white/40 group-hover:text-white/70",
                    )}
                  >
                    {item.question}
                  </span>
                </div>

                <div
                  className={cn(
                    "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-500",
                    openId === item.id ? "bg-secondary border-accent rotate-45" : "group-hover:border-white/30",
                  )}
                >
                  <Plus
                    className={cn("h-5 w-5 transition-colors", openId === item.id ? "text-primary" : "text-white/40")}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-[2.75rem] md:pl-[4.25rem] pt-6 max-w-xl">
                      <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">{item.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
