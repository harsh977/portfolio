"use client"

import { motion } from "framer-motion"
import { Home, User, Code, Trophy, Clock, Mail, Github, Sun } from "lucide-react"
import { useState } from "react"

const dockItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Code, href: "#skills", label: "Skills" },
  { icon: Trophy, href: "#achievements", label: "Achievements" },
  { icon: Clock, href: "#timeline", label: "Journey" },
  { icon: Mail, href: "#contact", label: "Contact" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Sun, href: "#", label: "Theme" },
]

export function BottomDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div
      className="fixed bottom-6 inset-x-0 flex justify-center z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-full px-4 py-3 shadow-xl">
        <div className="flex items-center space-x-2">
          {dockItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />

              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-lg whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 10,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
