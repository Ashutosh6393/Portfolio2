"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Code, Star } from "lucide-react"

const timelineItems = [
  {
    year: "Present",
    title: "Full-Time at HCLTech",
    description: "Trained in .NET, ASP.NET Core, C#, Angular, Docker, API design. Strong focus on backend engineering and AI systems.",
    icon: Briefcase,
    color: "bg-emerald-500"
  },
  {
    year: "2024",
    title: "Building Real-Time Systems",
    description: "Developed CodeMate - a real-time collaborative code editor with WebSockets, Redis Pub/Sub, and containerized execution.",
    icon: Code,
    color: "bg-blue-500"
  },
  {
    year: "2023",
    title: "SaaS Development",
    description: "Built DotPDF and other SaaS applications combining backend engineering with AI integration.",
    icon: Star,
    color: "bg-purple-500"
  },
  {
    year: "Education",
    title: "B.Tech in Computer Science",
    description: "Amity University - Built strong foundation in programming, algorithms, and system design.",
    icon: GraduationCap,
    color: "bg-amber-500"
  }
]

export default function Timeline() {
  return (
    <section id="journey" className="py-20 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Career Snapshot</h2>
          <div className="h-1 w-16 bg-zinc-700 rounded" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center shadow-lg`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                  <div className={`p-5 rounded-xl bg-zinc-800/30 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 ${index % 2 === 0 ? '' : ''}`}>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-zinc-700/50 text-zinc-300 mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
