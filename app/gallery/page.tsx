"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Clinic Exterior",
      category: "Clinic",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Consultation Room",
      category: "Clinic",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Advanced Medical Equipment",
      category: "Equipment",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Dr. Arjun with Patient",
      category: "Patient Care",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Bronchoscopy Procedure",
      category: "Procedures",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sleep Study Setup",
      category: "Sleep Medicine",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pulmonary Function Testing",
      category: "Diagnostics",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Team of Medical Professionals",
      category: "Team",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Patient Education Session",
      category: "Education",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Critical Care Unit",
      category: "Critical Care",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Dr. Arjun at Medical Conference",
      category: "Professional",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Telemedicine Consultation",
      category: "Telemedicine",
    },
  ]

  const [filter, setFilter] = useState("All")
  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Banner Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/slider/s3.jpeg"
          alt="Asthma Care"
          fill
          className="object-cover"
          priority
        />
        
      </section>
      <AutoScrollingServices />
     

      {/* Gallery Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium">{image.alt}</h3>
                    <span className="text-teal-200 text-sm">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-teal-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
                <span className="sr-only">Close</span>
              </button>

              <div className="relative w-full max-w-4xl max-h-[80vh]">
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[80vh] mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                  <h3 className="text-xl font-medium">{filteredImages[selectedImage].alt}</h3>
                  <p className="text-teal-200">{filteredImages[selectedImage].category}</p>
                </div>
              </div>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-teal-300 transition-colors"
                onClick={() => setSelectedImage((prev) => (prev! === 0 ? filteredImages.length - 1 : prev! - 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="sr-only">Previous</span>
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-teal-300 transition-colors"
                onClick={() => setSelectedImage((prev) => (prev! === filteredImages.length - 1 ? 0 : prev! + 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
