"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function InterstitialLungDiseasePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Interstitial Lung Disease (ILD) Treatment in Navi Mumbai</h1>
              <p className="text-lg md:text-xl mb-8">
                Specialized ILD Diagnosis & Management for Better Breathing and Better Living
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
        <img src="/services/4.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
              <h2 className="text-2xl font-bold mb-4">What Is Interstitial Lung Disease?</h2>
              <p className="text-gray-600">
                At our clinic, we offer expert care for patients with Interstitial Lung Disease (ILD)—a complex group of lung conditions that cause scarring and inflammation in the lungs. Early diagnosis and personalized treatment can slow disease progression and improve your quality of life.
              </p>
              <p className="text-gray-600 mt-4">
                Interstitial Lung Disease (ILD) refers to a group of over 200 disorders that cause inflammation and scarring (fibrosis) of the lung tissue, particularly the interstitial (the tissue around the air sacs).
              </p>
              <p className="text-gray-600 mt-4">
                Common types of ILD include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                <li>Idiopathic Pulmonary Fibrosis (IPF)</li>
                <li>Hypersensitivity Pneumonitis</li>
                <li>Connective tissue disease-related ILD (e.g., in rheumatoid arthritis)</li>
                <li>Sarcoidosis</li>
                <li>Occupational ILD (asbestosis, silicosis)</li>
              </ul>
            </div>
            <img
  src="/services/6.jpg"
  alt="6-Minute Walk Test"
  className="w-full h-[200px] rounded-lg shadow-lg object-cover object-center mb-4"
/>
            {/* Symptoms Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Symptoms of ILD</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Progressive shortness of breath</li>
                <li>Dry, persistent cough</li>
                <li>Fatigue and weakness</li>
                <li>Chest discomfort</li>
                <li>Unintentional weight loss</li>
                <li>"Velcro-like" crackles on lung exam</li>
              </ul>
              <p className="mt-4 text-gray-600">
                If you're experiencing these symptoms, especially if they've worsened over time, a detailed lung evaluation is essential.
              </p>
            </div>

            {/* Treatment Services Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our ILD Treatment Services</h2>
              <p className="text-gray-600 mb-4">
                At our clinic, we follow a multidisciplinary, evidence-based approach to manage ILD:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Diagnosis</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>High-Resolution CT (HRCT) scans</li>
                    <li>Pulmonary Function Tests (PFTs)</li>
                    <li>6-Minute Walk Test</li>
                    <li>Bronchoscope and lung biopsy (if needed)</li>
                    <li>Autoimmune and allergy testing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Medical Management</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Ant fibrotic medications (Pirfenidone, Nintedanib for IPF)</li>
                    <li>Immunosuppressant for connective tissue disease-related ILD</li>
                    <li>Corticosteroids for inflammatory types</li>
                    <li>Oxygen therapy if required</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pulmonary Rehabilitation</h3>
                  <p className="text-gray-600">
                    Structured programs to improve breathing, stamina, and overall well-being.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lifestyle & Environmental Counseling</h3>
                  <p className="text-gray-600">
                    We guide patients on avoiding environmental and occupational exposures that may worsen ILD.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Regular Monitoring & Support</h3>
                  <p className="text-gray-600">
                    ILD is a chronic condition. We provide ongoing care, monitoring of disease progression and timely medication adjustments.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us for ILD Care?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Expert Pulmonologists with ILD specialization</li>
                <li>Advanced diagnostics and imaging</li>
                <li>Patient-centered, compassionate approach</li>
                <li>Collaborative care with rheumatologists, radiologists, and pathologists</li>
                <li>Convenient location in Navi Mumbai with modern facilities</li>
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