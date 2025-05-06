"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function SwineFluPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Swine Flu (H1N1 Influenza) Treatment in Navi Mumbai</h1>
              <p className="text-lg md:text-xl mb-8">
                Early Detection. Expert Treatment. Faster Recovery.
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
        <img src="/services/7.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
              <h2 className="text-2xl font-bold mb-4">What Is Swine Flu?</h2>
              <p className="text-gray-600">
                At our clinic, we provide prompt and effective care for Swine Flu (H1N1 Influenza)—a contagious viral infection that can cause serious illness if left untreated. If you're experiencing flu-like symptoms, early evaluation and antiviral treatment can prevent complications and protect those around you.
              </p>
              <p className="text-gray-600 mt-4">
                Swine Flu is caused by the H1N1 strain of the influenza virus. It spreads easily from person to person through coughing, sneezing, or touching contaminated surfaces. While most cases are mild, H1N1 can cause severe respiratory illness, especially in high-risk groups.
              </p>
            </div>
            <img
  src="/services/6.jpg"
  alt="6-Minute Walk Test"
  className="w-full h-[200px] rounded-lg shadow-lg object-cover object-center mb-4"
/>
            {/* Symptoms Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Common Symptoms of Swine Flu</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>High fever</li>
                <li>Sore throat</li>
                <li>Cough (dry or productive)</li>
                <li>Body aches and fatigue</li>
                <li>Chills and sweating</li>
                <li>Headache</li>
                <li>Vomiting or diarrhea (in some cases)</li>
                <li>Difficulty breathing (in severe cases)</li>
              </ul>
              <p className="mt-4 text-gray-600">
                If you experience these symptoms—especially during flu season—consult a doctor immediately.
              </p>
            </div>

            {/* High Risk Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Who Is at Higher Risk?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Young children and the elderly</li>
                <li>Pregnant women</li>
                <li>People with asthma, diabetes, or heart/lung disease</li>
                <li>Individuals with weakened immune systems</li>
                <li>Healthcare and frontline workers</li>
              </ul>
            </div>

            {/* Treatment Services Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Swine Flu Care Services</h2>
              <p className="text-gray-600 mb-4">
                At our clinic, we provide:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapid Diagnosis</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Clinical evaluation</li>
                    <li>Nasal/throat swab tests for H1N1 detection (RT-PCR)</li>
                    <li>Oxygen saturation and chest exam (if respiratory symptoms are severe)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Antiviral Treatment</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Oseltamivir (Tamiflu) – most effective when started within 48 hours of symptom onset</li>
                    <li>Fever and symptom management</li>
                    <li>Hydration and rest guidance</li>
                    <li>Hospital care for severe or high-risk cases</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Isolation & Prevention Guidance</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Advice on home isolation to prevent spread</li>
                    <li>Monitoring for complications like pneumonia or respiratory distress</li>
                    <li>Guidance for family and caregivers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vaccination Support</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Annual flu shots including protection against H1N1</li>
                    <li>On-site or scheduled flu vaccination drives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Experienced doctors in infectious disease and respiratory care</li>
                <li>On-site diagnostic testing and treatment</li>
                <li>Quick, compassionate care in Navi Mumbai</li>
                <li>Patient safety and infection control protocols</li>
                <li>Support for family and community education</li>
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