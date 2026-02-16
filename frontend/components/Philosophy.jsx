"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const principles = [
  "Code should be readable before it's clever",
  "Systems should be designed before they're built",
  "Scalability should not be an afterthought",
  "Security is not optional",
  "Real-time systems require careful state management"
]

export default function Philosophy() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Engineering Mindset</h2>
          <div className="h-1 w-16 bg-zinc-700 rounded" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
        >
          <Quote className="absolute top-6 left-6 h-8 w-8 text-zinc-700" />
          
          <div className="pt-8 space-y-4">
            <p className="text-lg text-zinc-300 mb-6">I believe:</p>
            
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <motion.li
                  key={principle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-zinc-400"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{principle}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-zinc-300 font-medium text-center border-t border-zinc-800 pt-6"
          >
            I aim to build products that survive production traffic, not just demo day.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
