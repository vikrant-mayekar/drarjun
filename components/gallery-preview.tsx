"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)

  const galleryImages = [
    {
      src: "/gallery/20.jpeg",
      alt: "Dr. Arjun Ramaswamy",
    },
    {
      src: "/gallery/21.jpeg",
      alt: "Dr. Arjun Ramaswamy",
    },
    {
      src: "/gallery/04.jpg",
      alt: "",
    },
    {
      src: "/gallery/06.jpg",
      alt: "",
    },
  ]

  // Auto-slide logic for mobile
  useEffect(() => {
    if (!isPaused && window.innerWidth < 768) {
      autoSlideRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
      }, 5000)
    }
    return () => {
      if (autoSlideRef.current) clearTimeout(autoSlideRef.current)
    }
  }, [currentIndex, isPaused, galleryImages.length])

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        next()
      } else {
        prev()
      }
    }

    touchStartX.current = null
  }

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Gallery</h2>
          <div className="w-16 sm:w-20 h-1 bg-yellow-500 mx-auto mb-3 sm:mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg px-4">
            Take a visual tour of our clinic, procedures, and patient care moments.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="block md:hidden relative">
          <div
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Link href="/gallery">
              <div className="relative h-[280px] sm:h-[320px] w-full">
                <Image
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={currentIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-sm sm:text-base">{galleryImages[currentIndex].alt}</h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border-gray-200 bg-white/80 shadow-lg hover:bg-yellow-100 hover:text-yellow-600 z-10 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border-gray-200 bg-white/80 shadow-lg hover:bg-yellow-100 hover:text-yellow-600 z-10 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
                  index === currentIndex ? "bg-yellow-500 scale-110" : "bg-white"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link href="/gallery">
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-sm sm:text-base">{image.alt}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
