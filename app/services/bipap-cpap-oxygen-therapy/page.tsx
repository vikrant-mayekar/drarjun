"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function BiPAPCPAPTherapyPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">BiPAP/CPAP Oxygen Therapy</h1>
              <p className="text-lg md:text-xl mb-8">
                Advanced respiratory support therapy to improve breathing and enhance oxygen delivery.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8">
                <Link href="/appointment">Book a Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <AutoScrollingServices />
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-900/20 via-cyan-600/20 to-cyan-900/20">
      <div className="container mx-auto">
        <img src="/services/10.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/pulse-oximeter'}
              >
                Pulse Oximeter
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
              <h2 className="text-2xl font-bold mb-4">Breathe Easier with Proven Respiratory Therapies</h2>
              <p className="text-gray-600">
                At our clinic, we offer BiPAP, CPAP, and Oxygen Therapy to help patients with sleep apnea, COPD, and other respiratory conditions improve their breathing, sleep better, and regain energy. Our expert-led therapies are tailored to each patient's needs for maximum comfort and results.
              </p>
            </div>
            <img
  src="/services/6.jpg"
  alt="6-Minute Walk Test"
  className="w-full h-[200px] rounded-lg shadow-lg object-cover object-center mb-4"
/>
            {/* Who Needs Support */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Who Needs Respiratory Support?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Obstructive Sleep Apnea (OSA)</li>
                <li>Chronic Obstructive Pulmonary Disease (COPD)</li>
                <li>Asthma</li>
                <li>Pulmonary Fibrosis or ILD</li>
                <li>Heart failure with breathing difficulty</li>
                <li>Post-COVID respiratory weakness</li>
                <li>Low blood oxygen levels (hypoxemia)</li>
              </ul>
            </div>

            {/* CPAP Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">CPAP (Continuous Positive Airway Pressure)</h2>
              <p className="text-gray-600 mb-4">Best for: Obstructive Sleep Apnea (OSA)</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Delivers constant airflow to keep airways open during sleep</li>
                <li>Reduces snoring, daytime sleepiness, and health risks</li>
                <li>Helps improve sleep quality and energy levels</li>
                <li>Non-invasive and highly effective when used consistently</li>
              </ul>
            </div>

            {/* BiPAP Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">BiPAP (Bilevel Positive Airway Pressure)</h2>
              <p className="text-gray-600 mb-4">Best for: Moderate to severe sleep apnea, COPD, and patients with weak breathing muscles</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provides two pressure levels—a higher one for inhalation and a lower one for exhalation</li>
                <li>More comfortable for patients with complex or severe respiratory needs</li>
                <li>Can support breathing in hospital or at home</li>
              </ul>
            </div>

            {/* Oxygen Therapy Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Oxygen Therapy</h2>
              <p className="text-gray-600 mb-4">Best for: Patients with chronic lung or heart conditions with low oxygen levels</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Delivers medical-grade oxygen through nasal cannula or mask</li>
                <li>Improves tissue oxygenation, energy, and cognitive function</li>
                <li>Used in acute illness, recovery, or long-term management</li>
                <li>Can be provided in-clinic or through home oxygen setups</li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Services Include:</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Expert consultation with pulmonologists</li>
                <li>In-clinic or home-based CPAP/BiPAP titration</li>
                <li>Oxygen level monitoring (SpO₂ and ABG tests)</li>
                <li>Equipment fitting, education & training</li>
                <li>Device rentals and setup assistance</li>
                <li>Regular follow-up and device compliance support</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Experienced respiratory specialists & sleep technicians</li>
                <li>State-of-the-art therapy devices</li>
                <li>Personalized therapy plans</li>
                <li>Safe, hygienic, and supportive care environment</li>
                <li>Convenient location in Navi Mumbai</li>
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