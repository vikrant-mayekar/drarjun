"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Heart, Users, BookOpen} from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="flex min-h-screen flex-col">
{/* Banner Section */}
<section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/slider/s2.jpeg"
          alt="Asthma Care"
          fill
          className="object-cover"
          priority
        />
          
      </section>
      <AutoScrollingServices />


      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/dr-arjun.jpeg"
                  alt="Dr. Arjun Ramaswamy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Dr. Arjun Ramaswamy</h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs sm:text-sm font-medium text-teal-700 bg-teal-100 rounded-full">
                  Pulmonologist
                </span>
                <span className="px-3 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                  Intensivist
                </span>
                <span className="px-3 py-1 text-xs sm:text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
                  Sleep Physician
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                Dr. Arjun Ramaswamy is a highly skilled and compassionate specialist with over 10 years of experience in
                pulmonary medicine, critical care, and sleep disorders. His patient-centered approach and commitment to
                excellence have established him as a trusted healthcare provider in Navi Mumbai.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Specializations</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Respiratory Disease Management
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Interventional Pulmonology
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Sleep Medicine
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Critical Care Medicine
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-900 via-cyan-600 to-cyan-900">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"><span className="text-yellow-500">" Education </span>& Qualifications "</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-white text-base leading-relaxed">
              Dr. Arjun has trained at prestigious institutions and holds multiple advanced degrees and certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-3 mt-4">
                <h3 className="text-xl font-bold text-gray-900">MBBS</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Completed Bachelor of Medicine and Bachelor of Surgery from a prestigious medical college with honors.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-3 mt-4">
                <h3 className="text-xl font-bold text-gray-900">MD (Pulmonary Medicine)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Specialized in Pulmonary Medicine with distinction, focusing on advanced respiratory care and diagnostics.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-3 mt-4">
                <h3 className="text-xl font-bold text-gray-900">DM (Critical Care Medicine)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced specialization in Critical Care Medicine, with training in managing complex respiratory conditions in intensive care settings.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-3 mt-4">
                <h3 className="text-xl font-bold text-gray-900">MRCP (UK)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Member of the Royal College of Physicians, demonstrating international standard of medical excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Skills & Expertise Section */}
      <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-cyan-100 via-cyan-50 to-cyan-100">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Skills & <span className="text-yellow-500">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Specialized skills developed through years of training and practice, delivering exceptional care and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Bronchoscopy",
                description:
                  "Expert in diagnostic and therapeutic bronchoscopy procedures for various respiratory conditions.",
                icon: "🔬",
              },
              {
                title: "Endobronchial Ultrasound (EBUS)",
                description:
                  "Specialized in minimally invasive EBUS procedures for diagnosis and staging of lung diseases.",
                icon: "📡",
              },
              {
                title: "Thoracoscopy",
                description: "Skilled in medical thoracoscopy for diagnosis and treatment of pleural diseases.",
                icon: "💉",
              },
              {
                title: "Ventilator Management",
                description:
                  "Extensive experience in managing patients requiring mechanical ventilation in critical care settings.",
                icon: "⚙️",
              },
              {
                title: "Sleep Studies",
                description: "Expert in conducting and interpreting polysomnography and other sleep diagnostic tests.",
                icon: "😴",
              },
              {
                title: "Pulmonary Function Testing",
                description: "Specialized in performing and interpreting comprehensive pulmonary function tests.",
                icon: "📊",
              },
              {
                title: "Respiratory Disease Management",
                description:
                  "Comprehensive management of chronic respiratory conditions like asthma, COPD, and interstitial lung diseases.",
                icon: "🫁",
              },
              {
                title: "Critical Care Ultrasound",
                description: "Skilled in point-of-care ultrasound for critical care diagnostics and interventions.",
                icon: "📷",
              },
              {
                title: "Research & Publication",
                description: "Active contributor to medical research with multiple publications in reputed journals.",
                icon: "📚",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-white group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <h3 className="text-xl font-semibold text-yellow-700 group-hover:text-yellow-600 transition-colors duration-300">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Philosophy</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/thinking.jpg"
                  alt="Dr. Arjun with patient"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Patient-Centered Care</h3>
              </div>
              <p className="text-lg text-teal-50">
                "I believe that every patient deserves personalized care that addresses not just their medical
                condition, but their overall well-being. My approach combines medical expertise with compassion,
                ensuring that each patient receives the highest standard of care tailored to their unique needs."
              </p>
              <div className="flex items-center gap-4 mb-4 mt-8">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-lg text-teal-50">
                "Medicine is an ever-evolving field, and I am committed to staying at the forefront of advancements in
                pulmonary medicine, critical care, and sleep medicine. This dedication to continuous learning ensures
                that my patients benefit from the latest diagnostic techniques and treatment options."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
