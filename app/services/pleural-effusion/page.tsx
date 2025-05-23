"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function PleuralEffusionPage() {
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
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <motion.div
              className="text-white max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pleural Effusion Treatment in Navi Mumbai</h1>
              <p className="text-lg md:text-xl mb-8">
                Safe, Accurate Diagnosis & Advanced Treatment for Pleural Effusion
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8">
                <Link href="/appointment">Book an Appointment</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <AutoScrollingServices />
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-900/20 via-cyan-600/20 to-cyan-900/20">
      <div className="container mx-auto">
        <img src="/services/5.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
                className="w-full justify-start mb-2"
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
                className="w-full justify-start mb-2"
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
            {/* COPD */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">What Is Pleural Effusion?</h2>
              <p className="text-gray-600">
                At our clinic, we provide specialized care for Pleural Effusion—a condition where excess fluid builds up between the layers of the pleura surrounding the lungs. Prompt treatment is essential to relieve symptoms and address the underlying cause.
              </p>
              <p className="text-gray-600 mt-4">
                Pleural effusion is the accumulation of fluid in the pleural space, the thin cavity between the lungs and the chest wall. This fluid can be caused by infection, heart failure, cancer, or other medical conditions.
              </p>
              <p className="text-gray-600 mt-4">
                Pleural effusion can impair breathing and is often a sign of an underlying disease that needs immediate attention.
              </p>
            </div>
            <img
  src="/services/6.jpg"
  alt="6-Minute Walk Test"
  className="w-full h-[200px] rounded-lg shadow-lg object-cover object-center mb-4"
/>
            {/* Symptoms Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Common Symptoms of Pleural Effusion</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Shortness of breath</li>
                <li>Chest pain, especially with deep breaths</li>
                <li>Dry or productive cough</li>
                <li>Fever or chills (in cases of infection)</li>
                <li>Fatigue</li>
              </ul>
              <p className="mt-4 text-gray-600">
                If you are experiencing these symptoms, a medical evaluation is crucial.
              </p>
            </div>

            {/* Treatment Services Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Pleural Effusion Treatment Services</h2>
              <p className="text-gray-600 mb-4">
                At our clinic, our approach combines accurate diagnosis with safe and effective treatment:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Diagnostic Evaluation</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Chest X-ray</li>
                    <li>Ultrasound of the chest</li>
                    <li>CT Scan (if needed)</li>
                    <li>Thoracentesis (fluid drainage and analysis)</li>
                    <li>Pleural fluid testing to determine cause (e.g., infection, cancer, TB)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Treatment Options</h3>
                  <p className="text-gray-600 mb-2">
                    Treatment depends on the cause and severity of the effusion:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Thoracentesis – A minimally invasive procedure to remove fluid and relieve pressure on the lungs.</li>
                    <li>Antibiotics or Anti-TB medications – For infectious causes like pneumonia or tuberculosis.</li>
                    <li>Diuretics – For effusions due to heart failure.</li>
                    <li>Pleurodesis – A procedure to prevent fluid buildup in recurrent cases.</li>
                    <li>Indwelling pleural catheter – For chronic or malignant pleural effusion.</li>
                    <li>Oncology or cardiology referrals – For cancer- or heart-related causes.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Monitoring</h3>
                  <p className="text-gray-600">
                    We ensure close follow-up to monitor recovery and manage any underlying condition contributing to the effusion.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Experienced Pulmonologists & Respiratory Specialists</li>
                <li>State-of-the-art diagnostic tools</li>
                <li>Safe, image-guided thoracentesis</li>
                <li>Personalized, cause-specific treatment plans</li>
                <li>Compassionate, patient-focused care in Navi Mumbai</li>
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