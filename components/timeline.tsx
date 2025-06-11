"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, Trophy, BookOpen } from "lucide-react"

const timelineEvents = [
  {
    year: "2022",
    title: "Started B.E. Information Technology",
    institution: "BMS College of Engineering",
    description:
      "Began my journey in Information Technology with a focus on software development and emerging technologies.",
    icon: GraduationCap,
    achievements: ["CGPA: 9.25/10", "Dean's List", "Active in coding clubs"],
  },
  {
    year: "2022",
    title: "Completed Senior Secondary",
    institution: "Swami Vivekananda VidyaMandir (CBSE)",
    description: "Graduated with excellent academic performance, laying a strong foundation for engineering studies.",
    icon: School,
    achievements: ["91.80% in CBSE XII", "Science Stream", "Mathematics Excellence"],
  },
  {
    year: "2023",
    title: "First Hackathon Victory",
    institution: "Competitive Programming Journey",
    description:
      "Won my first major hackathon and started building a reputation in the competitive programming community.",
    icon: Trophy,
    achievements: ["Multiple hackathon wins", "3⭐ CodeChef rating", "300+ DSA problems solved"],
  },
  {
    year: "2024-2025",
    title: "Research & Publications",
    institution: "Academic Research",
    description: "Published research dataset and working on cutting-edge AI/ML projects with real-world applications.",
    icon: BookOpen,
    achievements: ["Dataset publication", "Paper under review", "AI/ML expertise"],
  },
]

export function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="timeline" className="py-32 bg-gray-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-100 tracking-tight">My Journey</h2>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            From academic excellence to hackathon victories - a timeline of growth and achievements
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-600" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="inline-flex p-3 rounded-full bg-gray-700/50 mb-6 border border-gray-600/30">
                        <event.icon className="h-6 w-6 text-gray-300" />
                      </div>
                      <div className="text-2xl font-light text-gray-200 mb-3">{event.year}</div>
                      <h3 className="text-xl font-light text-gray-100 mb-2">{event.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 font-light">{event.institution}</p>
                      <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">{event.description}</p>
                      <div className="space-y-2">
                        {event.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            <span className="text-gray-400 text-xs font-light">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gray-300 border-4 border-gray-950"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
