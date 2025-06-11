"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Spline from "@splinetool/react-spline"


export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-16 md:py-32 bg-gray-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 text-gray-100 tracking-tight">About Me</h2>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-light mb-6 text-gray-200">Current Focus</h3>
                <p className="text-gray-400 mb-8 leading-relaxed font-light">
                  I'm currently pursuing B.E. in Information Technology at BMS College of Engineering with a CGPA of
                  9.25/10. As a passionate full-stack developer, I specialize in building scalable web applications and
                  AI-powered solutions.
                </p>

                <h3 className="text-xl md:text-2xl font-light mb-6 text-gray-200">Philosophy</h3>
                <p className="text-gray-400 mb-8 leading-relaxed font-light">
                  My journey in technology is fueled by curiosity and the desire to solve real-world problems. From
                  winning multiple hackathons to publishing research datasets, I'm constantly pushing myself to learn
                  and innovate.
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center p-4 md:p-6 bg-gray-700/20 rounded-lg border border-gray-700/30">
                    <div className="text-2xl md:text-3xl font-light text-gray-200 mb-2">9.25</div>
                    <div className="text-sm text-gray-500 tracking-wide uppercase">CGPA</div>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-gray-700/20 rounded-lg border border-gray-700/30">
                    <div className="text-2xl md:text-3xl font-light text-gray-200 mb-2">5+</div>
                    <div className="text-sm text-gray-500 tracking-wide uppercase">Hackathon Wins</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Elegant 3D Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm">
                <Spline scene="https://prod.spline.design/U3k9sHakqDxGaW0L/scene.splinecode" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
