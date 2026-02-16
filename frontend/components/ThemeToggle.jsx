"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" />
      ) : (
        <Moon className="h-4 w-4 text-zinc-600 hover:text-zinc-900 transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
