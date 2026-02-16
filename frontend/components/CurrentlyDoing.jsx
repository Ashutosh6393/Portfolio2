"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, GraduationCap, Wrench } from "lucide-react"

const activities = [
  {
    icon: Code2,
    title: "Reviving CodeMate",
    description: "A real-time collaborative code editor"
  },
  {
    icon: Wrench,
    title: "Improving Architecture",
    description: "Of my SaaS projects for better scalability"
  },
  {
    icon: Sparkles,
    title: "Learning AI/ML",
    description: "Fundamentals and LLM internals"
  },
  {
    icon: GraduationCap,
    title: "Practicing Backend",
    description: "Engineering at system level depth"
  }
]

export default function CurrentlyDoing() {
  return (
    <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">What I'm Currently Doing</h2>
          <div className="h-1 w-16 bg-zinc-300 dark:bg-zinc-700 rounded" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-5 rounded-xl bg-white dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 shadow-sm dark:shadow-none"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/30 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  <activity.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">{activity.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
