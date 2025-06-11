"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-16 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 text-gray-100 tracking-tight">Let's Connect</h2>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-10">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="p-3 md:p-4 bg-gray-700/30 rounded-full border border-gray-600/30">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light mb-1">Email</p>
                      <p className="text-gray-200 font-light">harshdaftari2@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="p-3 md:p-4 bg-gray-700/30 rounded-full border border-gray-600/30">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light mb-1">Phone</p>
                      <p className="text-gray-200 font-light">+91 7439888101</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="p-3 md:p-4 bg-gray-700/30 rounded-full border border-gray-600/30">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light mb-1">Location</p>
                      <p className="text-gray-200 font-light">Bangalore, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700/50">
                  <h4 className="text-lg font-light mb-6 text-gray-200 text-center">Connect With Me</h4>
                  <div className="flex justify-center space-x-4 md:space-x-6">
                    <Button
                      size="sm"
                      className="bg-white hover:bg-gray-900 text-gray-900 hover:text-white border border-gray-900 font-light transition-all duration-300"
                      asChild
                    >
                      <a href="https://github.com/harsh977" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white hover:bg-gray-900 text-gray-900 hover:text-white border border-gray-900 font-light transition-all duration-300"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/harsh-daftari-333746360/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-gray-800/50 text-center"
        >
          <p className="text-gray-500 font-light">© 2025 Harsh Daftari. Built with Next.js and Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  )
}
