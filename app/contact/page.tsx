"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import AutoScrollingServices from "@/components/AutoScrollingServices"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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

     

      {/* Contact Information & Form Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-cyan-100 via-cyan-50 to-cyan-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
                  Get in Touch
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Have questions about our services or want to schedule an appointment? Contact us using the information
                  below or fill out the form.
                </p>
              </div>

              <div className="space-y-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">Our Locations</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-800 mb-1">Hiranandani Crystal Plaza</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                101-105, 1st Floor, Sector 7, Kharghar, Navi Mumbai - 410210
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-800 mb-1">Apollo Hospital</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                Plot -13, Parsik Hill Rd, off Uran Road, opp. Nerul Wonders Park, Sector 23, CBD Belapur, Navi Mumbai, Maharashtra 400614
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">Phone</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Clinic: +91 9833857855
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">Email</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          arjun567.ar@gmail.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">Clinic Hours</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Apollo Hospital:  Monday - Saturday: 9:00 AM - 4:00 PM
                          <br />
                          Clinic: Monday - Saturday: 5:00 PM - 7:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="border-none shadow-xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-2 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      className="bg-green-50 border border-yellow-200 text-yellow-800 rounded-lg p-4 mb-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Thank you for your message! We'll get back to you shortly.
                    </motion.div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full border-gray-200 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="w-full border-gray-200 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full border-gray-200 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="w-full min-h-[150px] border-gray-200 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-lg py-6 transition-all duration-300 shadow-md hover:shadow-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our clinic is conveniently located in Hiranandani Crystal Plaza, Sector 7, Kharghar, Navi Mumbai.
            </p>
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Replace with actual Google Maps embed */}
            <div className="w-full h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.686980546451!2d73.0629710745489!3d19.03351005330635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c26acaa7e387%3A0xf21f5e6255641da8!2sCrystal%20Plaza%20By%20Hiranandani!5e0!3m2!1sen!2sin!4v1746186862424!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
