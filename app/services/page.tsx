"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TreesIcon as Lungs, Microscope, Moon, HeartPulse, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function ServicesPage() {
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
<section className="relative w-full aspect-[16/5] sm:h-[400px] md:h-[500px]">
  {/* Mobile Image */}
  <Image
    src="/services/1.jpg"
    alt="Asthma Care Mobile"
    fill
    className="object-cover object-center block sm:hidden"
    priority
    sizes="100vw"
  />
  {/* Tablet/Desktop Image */}
  <Image
    src="/services/1.jpg"
    alt="Asthma Care"
    fill
    className="object-cover object-center hidden sm:block"
    priority
    sizes="(min-width: 640px) 100vw, 0vw"
  />
</section>
      <AutoScrollingServices />
     
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center"><span className="text-yellow-800">Our</span> Services</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-4">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="/dr-report.jpg" alt="Well Equipped Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Well Equipped & Fully AC Hospital</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Modern Operation Theater & Delivery Room</h3>
              <p className="text-gray-600 text-base mb-4">Health and medical is a encompasses a wide</p>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative mt-auto">
                <Image src="/services/lungs-home.png" alt="Operation Theater" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255, 0, 120, 0.10)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-pink-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="/dr-report.jpg" alt="Mediclaim Facilities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Mediclaim Facilities</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-4">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative mb-16">
                <Image src="/dr-report.jpg" alt="Well Equipped Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Well Equipped & Fully AC Hospital</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Modern Operation Theater & Delivery Room</h3>
              <p className="text-gray-600 text-base mb-4">Health and medical is a encompasses a wide</p>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative mt-auto">
                <Image src="/services/lungs-home.png" alt="Operation Theater" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255, 0, 120, 0.10)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-pink-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="/dr-report.jpg" alt="Mediclaim Facilities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Mediclaim Facilities</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-4">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="/dr-report.jpg" alt="Well Equipped Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Well Equipped & Fully AC Hospital</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Modern Operation Theater & Delivery Room</h3>
              <p className="text-gray-600 text-base mb-4">Health and medical is a encompasses a wide</p>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative mt-auto">
                <Image src="/services/lungs-home.png" alt="Operation Theater" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255, 0, 120, 0.10)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-pink-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="/dr-report.jpg" alt="Mediclaim Facilities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Mediclaim Facilities</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-4">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative mb-16">
                <Image src="/dr-report.jpg" alt="Well Equipped Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Well Equipped & Fully AC Hospital</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Modern Operation Theater & Delivery Room</h3>
              <p className="text-gray-600 text-base mb-4">Health and medical is a encompasses a wide</p>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative mt-auto">
                <Image src="/services/lungs-home.png" alt="Operation Theater" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255, 0, 120, 0.10)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-pink-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="/dr-report.jpg" alt="Mediclaim Facilities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Mediclaim Facilities</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-4">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative mb-16">
                <Image src="/dr-report.jpg" alt="Well Equipped Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Well Equipped & Fully AC Hospital</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Modern Operation Theater & Delivery Room</h3>
              <p className="text-gray-600 text-base mb-4">Health and medical is a encompasses a wide</p>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative mt-auto">
                <Image src="/services/lungs-home.png" alt="Operation Theater" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255, 0, 120, 0.10)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex-1 flex flex-col items-start max-w-sm mx-auto border-2 border-blue-100 hover:border-pink-400 transition-all duration-300 group"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="/dr-report.jpg" alt="Mediclaim Facilities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Mediclaim Facilities</h3>
              <p className="text-gray-600 text-base">Health and medical is a encompasses a wide range of topics related to health</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/appointment">Get More Details</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-black to-black/90 text-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Breathe Better?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Schedule your consultation with Dr. Arjun Ramaswamy today and take the first step towards improved
              respiratory health.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-600 rounded-full px-10 py-6 text-lg"
            >
              <Link href="/appointment">Book Your Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
