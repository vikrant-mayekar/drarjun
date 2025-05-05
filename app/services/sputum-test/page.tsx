"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"

export default function SputumTestPage() {
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
          src="/images/sputum-test-banner.jpg"
          alt="Sputum Test Services"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sputum Test Services</h1>
              <p className="text-lg md:text-xl mb-8">
                Comprehensive analysis of respiratory secretions for accurate diagnosis of lung conditions.
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
        <img src="/services/13.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/bipap-cpap-oxygen-therapy'}
              >
                Bipap | CPAP | Oxygen Therapy
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2 "
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
              <h2 className="text-2xl font-bold mb-4">Sputum Test in Navi Mumbai | Accurate Lung Infection Diagnosis</h2>
              <p className="text-gray-600">
                Quick, Reliable Testing for Respiratory Infections. At Our Clinic, we offer Sputum Testing to diagnose a variety of respiratory conditions, including tuberculosis (TB), pneumonia, bronchitis, and lung cancer. This simple yet powerful test plays a vital role in identifying the cause of a persistent cough, infection, or abnormal chest imaging.
              </p>
            </div>
            <img src="/services/sputum-test.png" alt="Sputum Test" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
            
            {/* What Is Sputum Test */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">What Is a Sputum Test?</h2>
              <p className="text-gray-600">
                A Sputum Test examines a sample of mucus (phlegm) coughed up from the lungs. It helps detect bacteria, fungi, cancer cells, and inflammatory markers in the lower respiratory tract—not just the throat.
              </p>
            </div>

            {/* Types of Tests */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Types of Sputum Tests</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Sputum Culture</li>
                <li>Sputum for Acid-Fast Bacilli (AFB) / TB Testing</li>
                <li>GeneXpert MTB/RIF (Rapid TB detection with drug resistance)</li>
                <li>Cytology for suspected malignancy</li>
                <li>Gram stain and sensitivity testing</li>
              </ul>
            </div>

            {/* When Recommended */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">When Is a Sputum Test Recommended?</h2>
              <p className="text-gray-600 mb-4">You may need a sputum test if you experience:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Persistent cough lasting more than 2 weeks</li>
                <li>Cough with mucus or blood</li>
                <li>Fever, night sweats, and weight loss</li>
                <li>Chest pain or difficulty breathing</li>
                <li>History of TB, smoking, or occupational exposure</li>
              </ul>
            </div>

            {/* Test Procedure */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">How Is the Test Done?</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>You will be asked to cough deeply and produce a sample from the lungs, not just the throat.</li>
                <li>The sample is collected in a sterile container.</li>
                <li>If you're unable to produce sputum naturally, induced sputum collection may be done using a nebulizer.</li>
                <li>The sample is sent to the lab for analysis.</li>
              </ol>
            </div>

            {/* What It Detects */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">What Does the Sputum Test Detect?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Tuberculosis (Mycobacterium tuberculosis)</li>
                <li>Pneumonia-causing bacteria</li>
                <li>Fungal infections</li>
                <li>Lung cancer cells</li>
                <li>Antibiotic resistance patterns (to guide treatment)</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Accurate, same-day or rapid test options</li>
                <li>Experienced lab technicians & pulmonologists</li>
                <li>TB testing and GeneXpert facility available</li>
                <li>Safe and hygienic sample collection</li>
                <li>Trusted by doctors and hospitals in Navi Mumbai</li>
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