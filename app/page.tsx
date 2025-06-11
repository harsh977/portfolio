"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/loading-screen"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Timeline } from "@/components/timeline"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { BottomDock } from "@/components/bottom-dock"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Timeline />
            <Contact />
            <BottomDock />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
