"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "CodeMate",
    subtitle: "Real-Time Code Collaboration Platform",
    description: "A real-time collaborative code editor where multiple users can edit code simultaneously, see live cursor movements, track real-time viewer counts, and compile and execute code.",
    highlights: [
      "WebSocket-based bidirectional communication",
      "Redis Pub/Sub for horizontal scalability",
      "Stateless server design",
      "Containerized execution using Docker",
      "Real-time synchronization logic"
    ],
    tech: ["React", "Node.js", "Express", "Socket.io", "Monaco Editor", "Redis", "Docker", "AWS Lambda"],
    github: "https://github.com/Ashutosh6393/CodeMate",
    live: "https://codemate.v8coder.com/",
    image: "https://ashutosh6393.github.io/Portfolio/images/project-2.webp"
  },
  {
    title: "DotPDF",
    subtitle: "Chat With Your PDF",
    description: "SaaS application that allows users to upload PDFs and chat with them using AI. Combines backend engineering with applied AI for document intelligence.",
    highlights: [
      "File ingestion pipeline",
      "Embeddings and vector search",
      "RAG-based retrieval",
      "Context-aware AI responses"
    ],
    tech: ["Next.js", "React", "OpenAI", "Vector DB", "TailwindCSS"],
    github: "https://github.com/Ashutosh6393",
    image: null
  },
  {
    title: "Interactive Analytics Dashboard",
    subtitle: "Data Visualization Platform",
    description: "Built with focus on clean state management and production-level architecture. Features real-time updates and responsive data visualization.",
    highlights: [
      "User authentication",
      "Real-time updates",
      "Data visualization",
      "Responsive UI"
    ],
    tech: ["Next.js", "Recharts", "Supabase", "TailwindCSS"],
    github: "https://github.com/Ashutosh6393",
    image: null
  },
  {
    title: "Mega Blog",
    subtitle: "Full Stack Blogging Platform",
    description: "A blogging website where you can read and write blogs. Built with React for the frontend and Appwrite for backend services.",
    highlights: [
      "User authentication",
      "CRUD operations",
      "Rich text editing",
      "Responsive design"
    ],
    tech: ["React", "Appwrite", "TailwindCSS"],
    github: "https://github.com/Ashutosh6393/Mega-Blog",
    image: "https://ashutosh6393.github.io/Portfolio/images/project-1.webp"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Projects</h2>
          <div className="h-1 w-16 bg-zinc-700 rounded" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    {project.image && (
                      <div className="lg:w-72 h-48 lg:h-auto relative overflow-hidden bg-zinc-800">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    {/* Content Section */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                          <p className="text-sm text-zinc-400">{project.subtitle}</p>
                        </div>
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Key Highlights</h4>
                        <ul className="text-sm text-zinc-400 space-y-1">
                          {project.highlights.slice(0, 3).map((highlight) => (
                            <li key={highlight} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-emerald-500" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-zinc-800/50 text-zinc-400 text-xs border border-zinc-700/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
