"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TreesIcon as Lungs, Microscope, Moon, HeartPulse } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const isMobile = useMobile()
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const services = [
    {
      title: "Respiratory Disease Management",
      description: "Comprehensive care for asthma, COPD, interstitial lung disease, and other respiratory conditions.",
      icon: Lungs,
      color: "bg-teal-100",
      textColor: "text-teal-600",
    },
    {
      title: "Interventional Pulmonology",
      description: "Advanced procedures including bronchoscopy, EBUS, thoracoscopy, and airway stenting.",
      icon: Microscope,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Sleep Medicine",
      description: "Diagnosis and treatment of sleep apnea and other sleep-related breathing disorders.",
      icon: Moon,
      color: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      title: "Critical Care Medicine",
      description: "Specialized care for critically ill patients with respiratory failure and other conditions.",
      icon: HeartPulse,
      color: "bg-red-100",
      textColor: "text-red-600",
    },
  ]

  const visibleItems = isMobile ? 1 : 3
  const totalItems = services.length

  const next = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
  }

  // Auto play
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      next()
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current)
      }
    }
  }, [currentIndex])

  // Calculate visible indices
  const getVisibleIndices = () => {
    const indices = []
    for (let i = 0; i < visibleItems; i++) {
      indices.push((currentIndex + i) % totalItems)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full border-gray-200 hover:bg-gray-100 hover:text-teal-600"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full border-gray-200 hover:bg-gray-100 hover:text-teal-600"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6">
          <AnimatePresence initial={false} custom={direction}>
            {visibleIndices.map((index, i) => (
              <motion.div
                key={index}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 200 : -200,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -200 : 200,
                }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 ${services[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {React.createElement(services[index].icon, { className: `h-10 w-10 ${services[index].textColor}` })}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-teal-600 transition-colors duration-300">{services[index].title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{services[index].description}</p>
                    <Link
                      href="/services"
                      className={`${services[index].textColor} font-semibold hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform duration-300`}
                    >
                      Learn more <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-teal-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
