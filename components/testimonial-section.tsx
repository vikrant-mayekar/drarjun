"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Patient",
      image: "/user.png",
      quote:
        "Dr. Arjun's expertise in treating my chronic asthma has been life-changing. His patient-centered approach and thorough explanations made me feel comfortable and confident in my treatment plan.",
    },
    {
      name: "Rajesh Patel",
      role: "Patient",
      image: "/user.png",
      quote:
        "After struggling with sleep apnea for years, Dr. Arjun's diagnosis and treatment plan has dramatically improved my quality of life. His attention to detail and follow-up care is exceptional.",
    },
    {
      name: "Anita Desai",
      role: "Patient",
      image: "/user.png",
      quote:
        "Dr. Arjun's care during my critical illness was outstanding. His expertise in pulmonary medicine and critical care, combined with his compassionate approach, made a difficult time much easier for me and my family.",
    },
    {
      name: "Suresh Kumar",
      role: "Patient",
      image: "/user.png",
      quote:
        "The staff and Dr. Arjun were extremely supportive during my treatment. I highly recommend this clinic for anyone with respiratory issues.",
    },
    {
      name: "Meena Joshi",
      role: "Patient",
      image: "/user.png",
      quote:
        "Professional, caring, and knowledgeable. My experience with Dr. Arjun was excellent from start to finish.",
    },
    {
      name: "Vikram Singh",
      role: "Patient",
      image: "/user.png",
      quote:
        "I felt heard and understood. The treatment was effective and the follow-up was thorough. Thank you, Dr. Arjun!",
    },
    {
      name: "Aarti Menon",
      role: "Patient",
      image: "/user.png",
      quote:
        "The clinic is well-equipped and the care is top-notch. I am grateful for the attention and expertise provided.",
    },
  ]

  // Show 1 testimonial on mobile, 2 on tablet, 3 on desktop
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 3
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const total = testimonials.length

  // Auto-slide logic
  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = setTimeout(() => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % total)
      }, 5000)
    }
    return () => {
      if (autoSlideRef.current) clearTimeout(autoSlideRef.current)
    }
  }, [currentIndex, isPaused, total])

  const next = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total)
  }

  // Get the testimonials to show based on screen size
  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCount }).map((_, i) => {
      return testimonials[(currentIndex + i) % total]
    })
  }

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
      {/* Animated floating background shapes */}
      <motion.div
        className="absolute -top-16 sm:-top-32 -left-16 sm:-left-32 w-48 sm:w-96 h-48 sm:h-96 bg-yellow-200/30 rounded-full blur-3xl z-0 animate-pulse"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-16 sm:-bottom-32 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-yellow-200/30 rounded-full blur-3xl z-0 animate-pulse"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            <span className="text-yellow-800">What</span> Our Patients Say
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg px-4">
            Hear from our patients about their experiences with Dr. Arjun Ramaswamy and our clinic.
          </p>
        </motion.div>

        <div
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="flex gap-4 sm:gap-6 justify-center items-stretch transition-transform duration-500">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <motion.div
                key={testimonial.name + idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-1 min-w-0 max-w-sm mx-auto"
              >
                <Card className="border-none shadow-xl bg-white/70 backdrop-blur-lg rounded-2xl p-0 h-full flex flex-col justify-between">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-300 to-yellow-200 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md border-2 border-white/60"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-700" />
                    </motion.div>
                    <p className="text-sm sm:text-base text-gray-800 italic mb-3 sm:mb-4 font-medium line-clamp-4 sm:line-clamp-5">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center mt-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mb-2 border-2 border-yellow-200 shadow">
                        <Image
                          src={testimonial.image || "/user.png"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-yellow-700">{testimonial.name}</h3>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-gray-200 bg-white/80 shadow-lg hover:bg-yellow-100 hover:text-yellow-600 z-10 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-gray-200 bg-white/80 shadow-lg hover:bg-yellow-100 hover:text-yellow-600 z-10 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 space-x-2 sm:space-x-3">
          {Array.from({ length: total }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 border-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
                index === currentIndex ? "bg-yellow-500 scale-110" : "bg-white"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
