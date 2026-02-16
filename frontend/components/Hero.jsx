"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, FileDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-700 shadow-xl">
              <Image
                src="https://ashutosh6393.github.io/Portfolio/images/my-image.webp"
                alt="Ashutosh Verma"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-background" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Ashutosh Verma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-400 mb-6"
            >
              <span className="text-zinc-200 font-medium">Full Stack Developer</span>
              {" "}&bull;{" "}
              <span className="text-zinc-400">Real-Time Systems</span>
              {" "}&bull;{" "}
              <span className="text-zinc-400">AI-Powered Applications</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-zinc-400 leading-relaxed mb-8 max-w-2xl"
            >
              I build production-ready web applications with clean architecture, real-time capabilities, and secure backends. Currently exploring{" "}
              <span className="text-zinc-200">AI systems</span>,{" "}
              <span className="text-zinc-200">scalable WebSockets</span>, and{" "}
              <span className="text-zinc-200">distributed architectures</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
            >
              <Button
                asChild
                className="bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800 transition-colors"
              >
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:bg-zinc-800 transition-colors"
              >
                <a href="https://ashutosh6393.github.io/Portfolio/ashutosh-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileDown className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com/Ashutosh6393"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ashutosh-verma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ashutosh_v"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:ashutoshv262@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
