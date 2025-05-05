"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"

export default function PulseOximeterPage() {
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
          src="/images/pulse-oximeter-banner.jpg"
          alt="Pulse Oximeter Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <motion.div
              className="text-white max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pulse Oximeter Services</h1>
              <p className="text-lg md:text-xl mb-8">
                Accurate oxygen saturation monitoring to assess your respiratory health and oxygen levels.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8">
                <Link href="/appointment">Book a Test</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <AutoScrollingServices />
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-900/20 via-cyan-600/20 to-cyan-900/20">
      <div className="container mx-auto">
        <img src="/services/9.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <Button 
              variant="outline" 
              className="w-full justify-start mb-2"
              onClick={() => window.location.href = '/services/asthma'}
            >
              Asthma
            </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/copd'}
              >
                COPD
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/tuberculosis'}
              >
                Tuberculosis Treatment
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/interstitial-lung-disease'}
              >
                Interstitial Lung Disease
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/pleural-effusion'}
              >
                Pleural Effusion
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/obstructive-sleep-apnea-in-adult'}
              >
                Obstructive Sleep Apnea In Adult
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2 "
                onClick={() => window.location.href = '/services/swine-flue'}
              >
                Swine Flue
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/pulmonary-function-test'}
              >
               Pulmonary Function Test
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
                onClick={() => window.location.href = '/services/pulse-oximeter'}
              >
                Pulse Oximeter
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/bipap-cpap-oxygen-therapy'}
              >
                Bipap | CPAP | Oxygen Therapy
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/polysomnography'}
              >
                Polysomnography
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/6mwt'}
              >
                6MWT
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/sputum-test'}
              >
                Sputum Test
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/chest-x-ray'}
              >
                Chest X Ray
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/vaccination'}
              >
                Vaccination
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/peakflow-metry'}
              >
                Peakflow Metry
              </Button>
            </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg p-6">
            {/* Introduction */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">What Is a Pulse Oximeter Test?</h2>
              <p className="text-gray-600">
                At our clinic, we offer Pulse Oximetry Testing—a simple, painless, and essential test that measures your blood oxygen levels. Whether you're managing a chronic lung condition, recovering from an illness, or experiencing breathing issues, pulse oximetry provides fast insights into your oxygen saturation and overall health.
              </p>
              <p className="text-gray-600 mt-4">
                A Pulse Oximeter is a small, clip-like device placed on your finger, toe, or earlobe. It uses light to measure oxygen saturation (SpO₂) — the percentage of oxygen in your blood, and pulse rate — your heart rate per minute. This test helps detect hypoxia (low oxygen levels), which may signal a respiratory or circulatory issue.
              </p>
            </div>
            <img src="/services/pulse-oximeter.png" alt="Pulse Oximeter" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
            
            {/* Who Needs Testing */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Who Needs Pulse Oximetry?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Have asthma, COPD, pneumonia, ILD, or heart disease</li>
                <li>Are experiencing shortness of breath, fatigue, or chest tightness</li>
                <li>Have had COVID-19 or another recent respiratory infection</li>
                <li>Use home oxygen therapy</li>
                <li>Need pre-operative or post-operative monitoring</li>
                <li>Are undergoing sleep apnea screening</li>
              </ul>
            </div>

            {/* Results Interpretation */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">What Do the Results Mean?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Normal SpO₂: 95% – 100%</li>
                <li>Mildly Low: 90% – 94% (may need follow-up)</li>
                <li>Low Oxygen Levels: Below 90% (requires medical attention)</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Our medical team will explain your results and recommend further evaluation or treatment if needed.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Get Tested at Our Clinic?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Accurate readings with medical-grade equipment</li>
                <li>Supervised by trained professionals</li>
                <li>Quick results in under 5 minutes</li>
                <li>Integrated with your full respiratory evaluation</li>
                <li>Safe, sanitized, and patient-friendly facility</li>
              </ul>
            </div>
          </div>
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