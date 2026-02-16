"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const techStack = {
  working: [
    "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma",
    "WebSockets", "Redis Pub/Sub", "Docker", "CI/CD", "Auth.js", "OAuth"
  ],
  interests: [
    "Backend Engineering", "Distributed Systems", "Real-time Collaboration",
    "AI & Generative Models", "Production-grade Architecture"
  ]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="h-1 w-16 bg-zinc-700 rounded" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-zinc-400 leading-relaxed"
        >
          <p>
            I'm a full stack developer with hands-on experience building real-world applications using modern web technologies. I care about{" "}
            <span className="text-zinc-200 font-medium">system design</span>,{" "}
            <span className="text-zinc-200 font-medium">scalability</span>,{" "}
            <span className="text-zinc-200 font-medium">security</span>, and writing code that doesn't break the moment traffic increases.
          </p>

          <div className="py-4">
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">I've worked with:</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {techStack.working.map((tech) => (
                <motion.div key={tech} variants={item}>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 transition-colors border border-zinc-700/50"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="py-4">
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">I'm deeply interested in:</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {techStack.interests.map((interest) => (
                <motion.div key={interest} variants={item}>
                  <Badge
                    variant="outline"
                    className="text-zinc-300 border-zinc-600 hover:border-zinc-500 transition-colors"
                  >
                    {interest}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <p className="text-zinc-300 font-medium pt-4">
            Right now, I'm focused on building systems that are scalable, stateless, and resilient.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
