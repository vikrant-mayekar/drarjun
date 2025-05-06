"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function PeakFlowMetryPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Peak Flow Meter Services</h1>
              <p className="text-lg md:text-xl mb-8">
                Comprehensive monitoring and assessment of lung function for better asthma management.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8">
                <Link href="/appointment">Schedule Assessment</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <AutoScrollingServices />
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-900/20 via-cyan-600/20 to-cyan-900/20">
      <div className="container mx-auto">
        <img src="/services/16.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
                onClick={() => window.location.href = '/services/peakflow-metry'}
              >
                Peakflow Metry
              </Button>
            </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg p-6">
            {/* Introduction */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Peak Flowmetry (Peak Flow Meter Test) in Navi Mumbai | Lung Function Monitoring</h2>
              <p className="text-gray-600">
                Track Your Breathing. Manage Your Asthma. Stay in Control. At Our Clinic, we offer Peak Flowmetry Testing—a quick, simple, and reliable way to measure how well your lungs are working. Whether you have asthma, COPD, or other breathing difficulties, a peak flow test helps monitor your condition and guide your treatment.
              </p>
            </div>
            <img
  src="/services/6.jpg"
  alt="6-Minute Walk Test"
  className="w-full h-[200px] rounded-lg shadow-lg object-cover object-center mb-4"
/>
            {/* What Is Peak Flow Meter Test */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">What Is a Peak Flow Meter Test?</h2>
              <p className="text-gray-600">
                Peak Flowmetry uses a handheld device (Peak Flow Meter) to measure the Peak Expiratory Flow Rate (PEFR)—how fast you can blow air out of your lungs. This number helps doctors understand how open or narrow your airways are.
              </p>
            </div>

            {/* Who Should Take This Test */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Who Should Take This Test?</h2>
              <p className="text-gray-600 mb-4">You may benefit from Peak Flowmetry if you:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Have asthma or a history of asthma symptoms</li>
                <li>Experience shortness of breath or wheezing</li>
                <li>Have COPD or chronic bronchitis</li>
                <li>Need to monitor your lung health over time</li>
                <li>Are recovering from a respiratory infection</li>
                <li>Use inhalers or other respiratory medications</li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Benefits of Peak Flowmetry</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Detects early signs of asthma attacks or flare-ups</li>
                <li>Helps assess effectiveness of medication</li>
                <li>Supports personalized asthma action plans</li>
                <li>Monitors daily or weekly lung performance</li>
                <li>Guides decisions about emergency care or inhaler use</li>
              </ul>
            </div>

            {/* How the Test Works */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">How the Test Works</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>You take a deep breath in, then blow out as hard and fast as you can into the device.</li>
                <li>The meter gives a reading of your peak flow rate.</li>
                <li>The process is repeated 2–3 times to ensure accuracy.</li>
                <li>Our specialist evaluates the best reading and compares it to your expected value based on age, sex, and height.</li>
              </ol>
              <p className="text-gray-600 mt-4">The test is completely safe, quick, and non-invasive—usually done in under 5 minutes.</p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Trained staff for accurate testing</li>
                <li>Personalized interpretation of results</li>
                <li>Integrated with asthma and COPD treatment plans</li>
                <li>Education on using a home peak flow meter</li>
                <li>Guidance on asthma zones and action thresholds</li>
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