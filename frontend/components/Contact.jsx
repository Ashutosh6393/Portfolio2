"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I'm always open to interesting conversations and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center shadow-sm dark:shadow-none"
        >
          <div className="flex flex-col items-center">
            <MessageSquare className="h-12 w-12 text-zinc-300 dark:text-zinc-600 mb-6" />
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Let's Connect</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">Drop me a message and let's discuss your project.</p>

            <Button
              asChild
              className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors mb-8"
            >
              <a href="mailto:ashutoshv262@gmail.com">
                <Send className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>

            <div className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-4">Or find me on</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/Ashutosh6393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 transition-all"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ashutosh-verma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/ashutosh_v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 transition-all"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
