"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Award, Heart, Clock, Shield } from "lucide-react"
import ServiceCarousel from "@/components/service-carousel"
import TestimonialSection from "@/components/testimonial-section"
import GalleryPreview from "@/components/gallery-preview"
import { AutoScrollingServices } from "@/components/AutoScrollingServices"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"

export default function Home() {
  const [activeContent, setActiveContent] = useState<string>('services')
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const heroImages = [
    {
      src: "/logo.png",
      alt: "Dr. Arjun Ramaswamy - Pulmonologist",
    },
    {
      src: "/hero-bg.png",
      alt: "Clinic Consultation Room",
    },
    {
      src: "/lungs.webp",
      alt: "Advanced Medical Equipment",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-black to-black/90 px-4 md:px-8 lg:px-16 py-16 md:py-0 relative overflow-hidden">
        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 z-0"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "linear",
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/40 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50" />
        </div>
        {/* Right-side Medical Background Image */}
        <div className="absolute right-0 top-0 h-full w-full z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-60 mix-blend-lighten"
            style={{
              objectPosition: 'center',
            }}
          >
            <source src="/lungs.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.div
          className="z-10 flex flex-col items-start justify-center w-full md:w-1/2 space-y-6 md:pr-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <span className="px-3 py-1 text-sm font-medium text-yellow-500 bg-yellow-500/10 rounded-full">
            Pulmonologist | Intensivist | Sleep Physician
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Breathe Easy, <span className="text-yellow-500">Live Better</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            Expert care for respiratory health, critical conditions, and sleep disorders with a patient-centered
            approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-white text-black rounded-full px-8">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-yellow-500 text-yellow-800 hover:bg-yellow-500/10 hover:text-black"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="z-10 w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >

        </motion.div>
      </section>

      {/* Services Scroll Section */}
      <AutoScrollingServices />

      {/* About Section */}
      <section className="w-full py-6 sm:py-10 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-black/10">
        
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Left: About Text */}
          
          {/* Right: Doctor Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-yellow-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <Image
                src="/image.webp"
                alt="Dr. Arjun in clinic"
                width={600}
                height={320}
                className="rounded-xl shadow-xl relative transform transition duration-500 group-hover:scale-105 border-4 w-full h-auto"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 space-y-4 bg-gray-600/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-white">
              About <br/><span className="text-yellow-500"> Dr. Arjun Ramaswamy</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-yellow-400 mb-4 rounded-full"></div>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              With over 10 years of expertise in pulmonary medicine, critical care, and sleep disorders, Dr. Arjun has
              trained at top medical institutions and is dedicated to providing exceptional patient care.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-yellow-400" style={{ color: '#FFD700' }}>
              Expertise & Training
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Dr. Arjun Ramaswamy completed his MBBS, MD, and DM from prestigious institutions, followed by
              specialized training in interventional pulmonology and critical care medicine.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-1 p-1 rounded-lg">
                <ChevronRight className="text-blue-700 w-4 h-4" />
                <span className="text-gray-100 text-sm sm:text-base">Member of ERS, APCCM, NCCP, ABIP, and ICS</span>
              </div>
              <div className="flex items-center gap-1 p-1 rounded-lg">
                <ChevronRight className="text-blue-700 w-4 h-4" />
                <span className="text-gray-100 text-sm sm:text-base">Specialized in advanced pulmonary procedures</span>
              </div>
              <div className="flex items-center gap-1 p-1 rounded-lg">
                <ChevronRight className="text-blue-700 w-4 h-4" />
                <span className="text-gray-100 text-sm sm:text-base">Trained at leading medical institutions</span>
              </div>
            </div>
            <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md w-full sm:w-auto">
              <Link href="/about">Learn More About Dr. Arjun</Link>
            </Button>
          </motion.div>
        </div>
      </section>

    
     
      {/* Why Choose Us Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-900 via-cyan-600 to-cyan-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"><span className="text-yellow-500">" Why</span> Choose Us "</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Left Cards */}
            <div className="flex flex-col gap-8 z-10">
              <WhyChooseCard
                icon={<Award className="h-8 w-8 text-teal-600" />} // Equipment
                title="Focus on Patient Education"
                description="We believe informed patients make better decisions. We take time to explain your diagnosis and treatment options clearly."
              />
              <WhyChooseCard
                icon={<Shield className="h-8 w-8 text-teal-600" />} // Experienced Dentists
                title="Advanced Diagnostic Tools"
                description="We use state-of-the-art technology, including spirometry, bronchoscopy, and sleep studies, to ensure accurate diagnosis and effective treatment."
              />
            </div>
            {/* Center Image */}
            <div className="mx-8 my-8 lg:my-0 z-20">
              <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-blue-100 overflow-hidden">
                <Image src="/lung-home.webp" alt="Tooth" width={450} height={450} className="object-contain w-64 h-64" />
              </div>
            </div>
            {/* Right Cards */}
            <div className="flex flex-col gap-8 z-10">
              <WhyChooseCard
                icon={<Heart className="h-8 w-8 text-yellow-500" />} // Success Rate
                title="Integrated, Holistic Care"
                description="We collaborate with cardiologists, allergists, and primary care physicians to deliver well-rounded care for complex cases."
              />
              <WhyChooseCard
                icon={<Shield className="h-8 w-8 text-yellow-500" />} // Sterilization
                title="Board-Certified Pulmonologists"
                description="Our team comprises highly qualified and experienced specialists dedicated to diagnosing and treating a wide range of pulmonary diseases."
              />
            </div>
          </div>
        </div>
      </section>

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
                <Image src="/astma.webp" alt="Well Equipped Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Asthma</h3>
              <p className="text-gray-600 text-base">Asthma is a chronic condition that causes inflammation and narrowing of the airways, making it difficult to breathe. It can be triggered by various factors, including allergens, irritants, and exercise.</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/services/asthma">Get More Details</Link>
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
              <h3 className="text-2xl font-bold mb-2 text-blue-900">COPD ( Emphysema & Chronic Bronchicctasis )</h3>
              <p className="text-gray-600 text-base mb-4">COPD is a chronic condition that causes inflammation and scarring of the lung tissue, making it difficult to breathe. It can be caused by various factors, including genetics, environment, and lifestyle.</p>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative mt-auto">
                <Image src="/COPD.webp" alt="Operation Theater" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/services/copd">Get More Details</Link>
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
                <Image src="/pulmonary.webp" alt="Mediclaim Facilities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Pulmonary Function Test</h3>
              <p className="text-gray-600 text-base">PFT is a test that measures the amount of air that can be inhaled and exhaled, and the speed at which air can be inhaled and exhaled. It is a type of test that is used to diagnose and monitor various lung conditions.</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/services/pulmonary-function-test">Get More Details</Link>
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
                <Image src="/interstitial.jpg" alt="Well Equipped Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Interstitial Lung Disease</h3>
              <p className="text-gray-600 text-base">ILD is a condition that causes inflammation and scarring of the lung tissue, making it difficult to breathe. It can be caused by various factors, including genetics, environment, and lifestyle.</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/services/interstitial-lung-disease">Get More Details</Link>
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
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Tuberculosis</h3>
              <p className="text-gray-600 text-base mb-4">Tuberculosis is a bacterial infection that can cause respiratory illness. It is caused by the tuberculosis bacteria, which is a type of bacteria that can infect humans and animals.</p>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative mt-auto">
                <Image src="/tuberculosis.webp" alt="Operation Theater" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/services/tuberculosis">Get More Details</Link>
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
                <Image src="/obstructive.webp" alt="Mediclaim Facilities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Obstructive Sleep Apnes & Sleep Disorders</h3>
              <p className="text-gray-600 text-base">Obstructive sleep apnea in adults is a condition that causes the upper airway to collapse during sleep, which can lead to snoring, daytime sleepiness, and other health problems.</p>
              <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <Link href="/services/obstructive-sleep-apnea-in-adult">Get More Details</Link>
              </Button>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-4">
            <Button asChild className="mt-4 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full px-8 py-4 text-base font-medium text-black transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Gallery Preview Section */}
      <GalleryPreview />

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

type WhyChooseCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function WhyChooseCard({ icon, title, description }: WhyChooseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-72">
      <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-600 text-2xl">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
