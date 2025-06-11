"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Elegant Logo */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-full h-full rounded-full border-2 border-gray-300 flex items-center justify-center">
            <motion.span
              className="text-2xl font-light text-gray-100 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              HD
            </motion.span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-xl font-light mb-8 text-gray-200 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Harsh Daftari
        </motion.h1>

        {/* Elegant Progress Bar */}
        <div className="w-64 h-px bg-gray-800 mx-auto mb-4">
          <motion.div
            className="h-full bg-gray-300"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="text-gray-500 text-xs tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Loading Portfolio
        </motion.p>
      </div>
    </motion.div>
  )
}
