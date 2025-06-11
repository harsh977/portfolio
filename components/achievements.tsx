"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Star, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "1st Place @ AI Verse National Level Hackathon",
    description: "72-hour hackathon victory",
    color: "text-gray-300",
  },
  {
    icon: Trophy,
    title: "1st Place @ Impact AI 2.0",
    description: "24-hour hackathon champion",
    color: "text-gray-300",
  },
  {
    icon: Trophy,
    title: "1st Place @ Rotech Crack the Code",
    description: "Coding competition winner",
    color: "text-gray-300",
  },
  {
    icon: Award,
    title: "SAP Hackfest 2025 Regional Winner",
    description: "Currently competing in State Round",
    color: "text-gray-300",
  },
  {
    icon: Award,
    title: "2nd Place @ BMSCE PhaseShift Codeathon",
    description: "College-level coding competition",
    color: "text-gray-300",
  },
  {
    icon: Star,
    title: "3 Star CodeChef Rating",
    description: "Peak Rating: 1630",
    color: "text-gray-300",
  },
]

const leadership = [
  {
    icon: Users,
    title: "Class Representative",
    description: "Facilitated communication between students and faculty",
    color: "text-gray-300",
  },
  {
    icon: Users,
    title: "Event Organizer",
    description: "Organized major college events, demonstrated leadership",
    color: "text-gray-300",
  },
  {
    icon: Users,
    title: "Junior Coordinator - Utsav Fest",
    description: "Promoted and managed campaign outreach for college cultural event",
    color: "text-gray-300",
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="achievements" className="py-16 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 text-gray-100 tracking-tight">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Celebrating victories in hackathons, competitions, and leadership roles
          </p>
        </motion.div>

        {/* Hackathon Wins */}
        <div className="mb-12 md:mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-12 text-gray-200"
          >
            🏆 Hackathon Victories
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm h-full hover:bg-gray-800/50 transition-all duration-500 group">
                  <CardContent className="p-6 md:p-8 text-center">
                    <motion.div
                      className="inline-flex p-4 rounded-full bg-gray-700/50 mb-6 border border-gray-600/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <achievement.icon className="h-6 w-6 text-gray-300" />
                    </motion.div>
                    <h4 className="text-lg font-light text-gray-200 mb-3">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm font-light">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light mb-12 text-gray-200"
          >
            👥 Leadership & Extracurricular
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {leadership.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.05 }}
              >
                <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm h-full hover:bg-gray-800/50 transition-all duration-500">
                  <CardContent className="p-6 md:p-8">
                    <item.icon className="h-8 w-8 text-gray-300 mb-6" />
                    <h4 className="text-lg font-light text-gray-200 mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-sm font-light">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
