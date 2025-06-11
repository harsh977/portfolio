"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "VibeSense",
    subtitle: "Real-Time Emotion Detection Using Deep Learning",
    description:
      "Built a real-time emotion recognition system using a custom Indian accent dataset. Collected over 1,000 unique voice samples and augmented them to 5,000+ using audio processing techniques. Achieved high classification accuracy and outperformed existing solutions.",
    tech: ["Python", "Deep Learning", "LSTM", "Audio Processing"],
    website: "https://final-frontend-chi.vercel.app",
    github: "#",
  },
  {
    title: "Anti-Cheating Quiz App",
    subtitle: "Secure Assessment Platform",
    description:
      "Web-based quiz platform that prevents tab switching during tests to ensure fair assessment. Includes dashboards for students and teachers, connection pooling for stability, timer-based tests, and question shuffling.",
    tech: ["React", "Node.js", "PostgreSQL", "WebRTC"],
    website: "https://quizzer.site",
    github: "#",
  },
  {
    title: "Vikasya",
    subtitle: "Senior Support Platform",
    description:
      "Built to support elderly individuals with accessible service listings, community assistance features, and simple UI/UX tailored for ease of use. Designed during a civic-tech initiative to enhance social good.",
    tech: ["React", "Express.js", "MongoDB", "UI/UX"],
    website: "#",
    github: "https://github.com/harsh977/sahayak-frontend-v1",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-32 bg-gray-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-100 tracking-tight">Featured Projects</h2>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Innovative solutions that showcase technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm h-full hover:bg-gray-800/50 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-200 font-light">{project.title}</CardTitle>
                  <p className="text-sm text-gray-400 font-light">{project.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-sm leading-relaxed font-light">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/30 text-xs rounded-full text-gray-300 border border-gray-600/30 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    {project.website !== "#" && (
                      <Button
                        size="sm"
                        className="bg-gray-200 hover:bg-white text-gray-900 font-medium transition-all duration-300"
                        asChild
                      >
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 font-medium transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-light mb-12 text-center text-gray-200">Publications & Research</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="text-lg font-light text-gray-200 mb-3">Dataset Publication</h4>
                <p className="text-sm text-gray-400 mb-4 font-light">Mendeley Data, V1 (2025)</p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">
                  Indian English Speech Emotion Dataset - A comprehensive dataset of 1,000 original audio samples from
                  native Indian English speakers across four emotions, achieving 96% accuracy with LSTM models.
                </p>
               <a
  href="https://doi.org/10.17632/mtk28hgc6x.1"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="sm"
    variant="outline"
    className="border-gray-500 text-gray-300 hover:bg-gray-700 font-medium"
  >
    View Publication
  </Button>
</a>

              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="text-lg font-light text-gray-200 mb-3">Under Review</h4>
                <p className="text-sm text-gray-400 mb-4 font-light">
                  International Journal of Computing and Digital Systems
                </p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">
                  "AIRE: Adaptive Inverse RMSE Ensembling for Second-hand Car Price Prediction" - Novel approach to car
                  price prediction using ensemble methods.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-700 font-medium"
                >
                  Under Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
