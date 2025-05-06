"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function COPDPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">COPD Treatment in Navi Mumbai</h1>
              <p className="text-lg md:text-xl mb-8">
                Breathe Better. Live Better.
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
        <img src="/services/3.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
              <h2 className="text-2xl font-bold mb-4">What Is COPD?</h2>
              <p className="text-gray-600">
                At our clinic, we specialize in helping patients manage Chronic Obstructive Pulmonary Disease (COPD)—a progressive lung condition that affects millions worldwide. With the right care, COPD symptoms can be managed effectively, allowing you to maintain an active, healthier life.
              </p>
              <p className="text-gray-600 mt-4">
                COPD is a group of chronic lung diseases, primarily including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                <li>Chronic bronchitis – inflammation of the airways with daily cough and mucus.</li>
                <li>Emphysema – damage to the air sacs in the lungs causing shortness of breath.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                COPD is often caused by long-term exposure to irritants such as tobacco smoke, pollution, or occupational dust and chemicals.
              </p>
            </div>
            <img
  src="/services/6.jpg"
  alt="6-Minute Walk Test"
  className="w-full h-[200px] rounded-lg shadow-lg object-cover object-center mb-4"
/>
            {/* Symptoms Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Common Symptoms of COPD</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Persistent cough with mucus</li>
                <li>Shortness of breath, especially during physical activity</li>
                <li>Wheezing</li>
                <li>Fatigue</li>
                <li>Frequent respiratory infections</li>
              </ul>
              <p className="mt-4 text-gray-600">
                If these symptoms are affecting your daily life, you may benefit from a professional evaluation.
              </p>
            </div>

            {/* Treatment Services Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our COPD Treatment Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Diagnostic Testing</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Pulmonary function tests (PFT)</li>
                    <li>Chest X-rays / CT scans</li>
                    <li>Oxygen level assessments</li>
                    <li>Lifestyle and risk factor review</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customized Treatment Plans</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Bronchodilators to relax airway muscles</li>
                    <li>Inhaled corticosteroids to reduce inflammation</li>
                    <li>Mucolytics to clear airway mucus</li>
                    <li>Antibiotics for flare-up management</li>
                    <li>Oxygen therapy for advanced stages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pulmonary Rehabilitation</h3>
                  <p className="text-gray-600 mb-2">A medically supervised program including:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Breathing exercises</li>
                    <li>Physical conditioning</li>
                    <li>Nutritional counseling</li>
                    <li>Education on disease management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smoking Cessation Support</h3>
                  <p className="text-gray-600">
                    If you're a smoker, quitting is the most important step you can take. We provide counseling and medication support to help you quit for good.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Long-Term Monitoring & Support</h3>
                  <p className="text-gray-600">
                    We offer regular follow-ups, adjustment of treatment, and ongoing guidance to ensure the best quality of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us for COPD Care?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Experienced Pulmonologists & Respiratory Therapists</li>
                <li>State-of-the-art diagnostic and treatment facilities</li>
                <li>Holistic patient-centered approach</li>
                <li>Convenient care in Navi Mumbai</li>
                <li>Focus on education and lifestyle change</li>
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