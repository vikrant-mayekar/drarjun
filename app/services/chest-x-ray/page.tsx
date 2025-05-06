"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function ChestXRayPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Chest X-Ray Services</h1>
              <p className="text-lg md:text-xl mb-8">
                Advanced imaging services for accurate diagnosis of chest and lung conditions.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8">
                <Link href="/appointment">Book an X-Ray</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <AutoScrollingServices />
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-900/20 via-cyan-600/20 to-cyan-900/20">
      <div className="container mx-auto">
        <img src="/services/14.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
            {/* Chest X-Ray Section */}
            <div className="mb-8">
              {/* Introduction */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Chest X-Ray in Navi Mumbai | Fast & Accurate Lung Imaging</h2>
                <p className="text-gray-600">
                  Clear Insights into Your Lung & Heart Health. At our clinic, we provide high-quality Chest X-Rays to help diagnose a wide range of conditions affecting the lungs, heart, and chest. Whether you're experiencing chest pain, breathing difficulty, or a chronic cough—or your doctor has requested imaging—our advanced X-ray services ensure fast, clear results.
                </p>
              </div>
              <img
  src="/services/6.jpg"
  alt="6-Minute Walk Test"
  className="w-full h-[200px] rounded-lg shadow-lg object-cover object-center mb-4"
/>
              {/* What Is Chest X-Ray */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">What Is a Chest X-Ray?</h2>
                <p className="text-gray-600">
                  A Chest X-Ray is a quick, non-invasive imaging test that creates detailed pictures of your chest, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                  <li>Lungs</li>
                  <li>Heart</li>
                  <li>Airways</li>
                  <li>Ribs and diaphragm</li>
                  <li>Blood vessels</li>
                </ul>
                <p className="text-gray-600 mt-2">It's often the first imaging test done when evaluating respiratory or cardiac symptoms.</p>
              </div>

              {/* When Needed */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">When Do You Need a Chest X-Ray?</h2>
                <p className="text-gray-600 mb-4">Doctors commonly recommend chest X-rays to assess:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Cough or chest pain</li>
                  <li>Breathing problems</li>
                  <li>Fever with suspected lung infection</li>
                  <li>Pneumonia or bronchitis</li>
                  <li>Tuberculosis (TB)</li>
                  <li>COPD or asthma</li>
                  <li>Heart enlargement or fluid around lungs</li>
                  <li>Injury to ribs or chest wall</li>
                  <li>Follow-up after COVID-19 or lung surgery</li>
                </ul>
              </div>

              {/* Procedure */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">What to Expect During the Procedure</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>You'll be asked to stand against an X-ray machine or lie down, depending on your condition.</li>
                  <li>You may be asked to hold your breath briefly while the image is taken.</li>
                  <li>The test takes just 5–10 minutes and is painless.</li>
                  <li>Our trained radiographer ensures comfort, safety, and proper positioning.</li>
                </ul>
              </div>

              {/* Safety */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Safety First</h2>
                <p className="text-gray-600">
                  Chest X-rays involve minimal radiation exposure, and we follow all safety protocols. Lead aprons are used when necessary, and we avoid X-rays in pregnant women unless absolutely essential.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>High-resolution digital X-ray systems</li>
                  <li>Experienced radiology team</li>
                  <li>Fast report turnaround</li>
                  <li>On-site pulmonologist and physician consultation</li>
                  <li>Affordable pricing and insurance assistance</li>
                </ul>
              </div>
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