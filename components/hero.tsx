"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950" />
        {/* Elegant grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 text-gray-100 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            Harsh Daftari
          </motion.h1>

          <div className="text-xl md:text-2xl text-gray-400 mb-12 h-16 font-light tracking-wide">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                3000,
                "Software Engineer",
                3000,
                "Problem Solver",
                3000,
                "Innovation Driver",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <motion.p
            className="text-lg text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Information Technology student at BMS College of Engineering with expertise in full-stack development,
            AI/ML, and cloud technologies. Passionate about creating elegant solutions to complex problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
  href="/Resume.pdf"
  download
  className="inline-flex items-center bg-gray-100 hover:bg-white text-gray-900 px-8 py-4 text-sm tracking-wide font-medium rounded-md transition-all duration-300"
>
  <Download className="mr-2 h-4 w-4" />
  Download Resume
</a>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-4 text-sm tracking-wide font-medium transition-all duration-300"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/harsh977", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-daftari-333746360/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:harshdaftari2@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-4 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
              >
                <social.icon className="h-5 w-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 text-gray-500" />
        </div>
      </motion.div>
    </section>
  )
}
