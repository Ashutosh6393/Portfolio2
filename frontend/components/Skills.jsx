"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Monitor, Server, Database, Cloud, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "TailwindCSS", "State Management", "Performance Optimization", "Component Architecture"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST API Design", "OAuth & JWT", "WebSockets", "Secure API Architecture"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Query Optimization", "Indexing Strategies"]
  },
  {
    title: "DevOps & Infrastructure",
    icon: Cloud,
    skills: ["Docker", "CI/CD", "Environment Management", "Scalable Architecture Design"]
  },
  {
    title: "AI & Machine Learning",
    icon: Sparkles,
    subtitle: "(Learning Phase)",
    skills: ["ML Fundamentals", "Transformers & LLMs", "RAG Systems", "AI Integration in Web Apps"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">Technical Skills</h2>
          <div className="h-1 w-16 bg-zinc-300 dark:bg-zinc-700 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl bg-white dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/30">
                  <category.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">{category.title}</h3>
                  {category.subtitle && (
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">{category.subtitle}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-zinc-100 dark:bg-zinc-700/30 text-zinc-600 dark:text-zinc-400 text-xs border border-zinc-200 dark:border-zinc-700/50 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
