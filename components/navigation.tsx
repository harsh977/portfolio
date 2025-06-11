"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Journey", href: "#timeline" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="text-xl font-light text-gray-100 tracking-wider"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Harsh Daftari
          </motion.div>

          <div className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300 relative group text-sm tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-300 group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
