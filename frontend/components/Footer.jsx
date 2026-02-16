"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Ashutosh Verma<span className="text-zinc-400 dark:text-zinc-500">.</span>
            </p>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/Ashutosh6393"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ashutosh-verma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/ashutosh_v"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:ashutoshv262@gmail.com"
              className="p-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Built with love */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-zinc-400 dark:text-zinc-600 flex items-center justify-center gap-1"
        >
          Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using Next.js & Framer Motion
        </motion.p>
      </div>
    </footer>
  )
}
