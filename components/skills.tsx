"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "C", "Java", "Python", "JavaScript"],
    color: "from-gray-400 to-gray-300",
  },
  {
    title: "Web Technologies",
    skills: ["ReactJS", "Node.js", "Express.js", "Flask", "FastAPI"],
    color: "from-gray-300 to-gray-200",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
    color: "from-gray-500 to-gray-400",
  },
  {
    title: "Cloud & Others",
    skills: ["AWS", "Azure", "Git", "Machine Learning", "Pandas"],
    color: "from-gray-400 to-gray-500",
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-100 tracking-tight">Technical Skills</h2>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm h-full hover:bg-gray-800/50 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-light mb-6 text-gray-200">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        <span className="text-gray-300 font-light">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coding Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-10">
              <h3 className="text-2xl font-light mb-8 text-center text-gray-200">Coding Achievements</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="text-4xl font-light text-gray-200 mb-3">3⭐</div>
                  <div className="text-gray-400 font-light">CodeChef Rating</div>
                  <div className="text-sm text-gray-500 mt-1 font-light">Peak: 1630</div>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-light text-gray-200 mb-3">300+</div>
                  <div className="text-gray-400 font-light">DSA Problems</div>
                  <div className="text-sm text-gray-500 mt-1 font-light">CodeChef, LeetCode, GFG</div>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-light text-gray-200 mb-3">C++</div>
                  <div className="text-gray-400 font-light">Primary Language</div>
                  <div className="text-sm text-gray-500 mt-1 font-light">Competitive Programming</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
