"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function TuberculosisPage() {
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
          src="/images/tuberculosis-banner.jpg"
          alt="Tuberculosis Care"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tuberculosis (TB) Treatment in Navi Mumbai</h1>
              <p className="text-lg md:text-xl mb-8">
                Accurate Diagnosis & Complete TB Treatment for a Healthier Tomorrow
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
                className="w-full justify-start mb-2"
                onClick={() => window.location.href = '/services/copd'}
              >
                COPD
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
              <h2 className="text-2xl font-bold mb-4">What Is Tuberculosis?</h2>
              <p className="text-gray-600">
                At our clinic, we provide comprehensive diagnosis and treatment for Tuberculosis (TB)—a serious but curable infectious disease. With timely intervention and proper care, TB can be effectively treated, and complications can be avoided.
              </p>
              <p className="text-gray-600 mt-4">
                Tuberculosis (TB) is a contagious infection caused by the bacterium Mycobacterium tuberculosis. It primarily affects the lungs (pulmonary TB) but can also impact other parts of the body such as the spine, kidneys, and brain (extra pulmonary TB).
              </p>
              <p className="text-gray-600 mt-4">
                TB spreads through airborne droplets when an infected person coughs or sneezes.
              </p>
            </div>
            <img src="/services/tuberculosis.png" alt="Tuberculosis" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
            
            {/* Symptoms Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Common Symptoms of TB</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Persistent cough lasting more than 2–3 weeks</li>
                <li>Coughing up blood</li>
                <li>Chest pain</li>
                <li>Fever and night sweats</li>
                <li>Unexplained weight loss</li>
                <li>Fatigue and weakness</li>
              </ul>
              <p className="mt-4 text-gray-600">
                If you or someone close to you has these symptoms, it's essential to seek medical help immediately.
              </p>
            </div>

            {/* Treatment Approach Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our TB Treatment Approach</h2>
              <p className="text-gray-600 mb-4">
                At our clinic, we follow global and national TB guidelines (like RNTCP/NTEP) for accurate diagnosis, treatment, and monitoring:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">TB Diagnosis Services</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Chest X-ray</li>
                    <li>Sputum smear microscopy & culture</li>
                    <li>CBNAAT (GeneXpert) testing</li>
                    <li>Tuberculin (Mantoux) skin test</li>
                    <li>Blood tests and imaging for extrapulmonary TB</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Treatment Plans</h3>
                  <p className="text-gray-600 mb-2">
                    TB treatment typically involves a 6-month course of antibiotics:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Intensive Phase: 2 months of multiple antibiotics</li>
                    <li>Continuation Phase: 4 months of fewer medications</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Supervised DOTS therapy (Directly Observed Treatment)</li>
                    <li>Drug-Resistant TB Management</li>
                    <li>Treatment for Latent TB Infection (LTBI)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Patient Education & Support</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Guidance on medication adherence</li>
                    <li>Infection prevention at home and work</li>
                    <li>Nutrition and lifestyle advice</li>
                    <li>Psychological and social support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Specialized TB Physicians & Pulmonologists</li>
                <li>Advanced diagnostic tools</li>
                <li>Adherence to WHO and NTEP protocols</li>
                <li>Confidential and compassionate care</li>
                <li>Regular follow-ups and monitoring</li>
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