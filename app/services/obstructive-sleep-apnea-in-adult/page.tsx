"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function ObstructiveSleepApneaPage() {
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
          src="/images/sleep-apnea-banner.jpg"
          alt="Obstructive Sleep Apnea Care"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Obstructive Sleep Apnea (OSA) Treatment for Adults in Navi Mumbai</h1>
              <p className="text-lg md:text-xl mb-8">
                Restore Restful Sleep. Protect Your Health.
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
        <img src="/services/6.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
              <h2 className="text-2xl font-bold mb-4">What Is Obstructive Sleep Apnea?</h2>
              <p className="text-gray-600">
                At our clinic, we provide expert diagnosis and comprehensive treatment for Obstructive Sleep Apnea (OSA) in adults. If you're struggling with snoring, fatigue, or poor sleep, untreated OSA could be the cause—and we're here to help you reclaim your nights and improve your health.
              </p>
              <p className="text-gray-600 mt-4">
                Obstructive Sleep Apnea is a sleep disorder where the airway becomes partially or completely blocked repeatedly during sleep, causing you to stop breathing for several seconds at a time. This leads to poor-quality sleep, low oxygen levels, and serious health risks if left untreated.
              </p>
            </div>
            <img src="/services/sleep-apnea.png" alt="Sleep Apnea" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
            
            {/* Symptoms Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Common Symptoms of OSA in Adults</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Loud, chronic snoring</li>
                <li>Gasping or choking during sleep</li>
                <li>Excessive daytime sleepiness</li>
                <li>Morning headaches</li>
                <li>Difficulty concentrating</li>
                <li>Irritability or mood changes</li>
                <li>Poor memory</li>
                <li>Restless sleep</li>
              </ul>
              <p className="mt-4 text-gray-600">
                If you or a loved one experiences these symptoms, it's time to get evaluated.
              </p>
            </div>

            {/* Why Treat Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Treat Sleep Apnea?</h2>
              <p className="text-gray-600 mb-4">
                Untreated OSA increases your risk of:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>High blood pressure</li>
                <li>Heart disease</li>
                <li>Stroke</li>
                <li>Type 2 diabetes</li>
                <li>Depression and anxiety</li>
                <li>Daytime accidents due to drowsiness</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Effective treatment improves sleep, energy levels, mental clarity, and overall quality of life.
              </p>
            </div>

            {/* Treatment Services Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Sleep Apnea Services</h2>
              <p className="text-gray-600 mb-4">
                At our clinic, we take a personalized, step-by-step approach to adult sleep apnea care:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Evaluation</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Detailed sleep history and symptom review</li>
                    <li>Polysomnography (Sleep Study) – in-lab or home-based testing to diagnose and classify OSA</li>
                    <li>Oxygen saturation and airflow monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Treatment Options Tailored to You</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>CPAP Therapy – Gold standard treatment using Continuous Positive Airway Pressure to keep your airway open.</li>
                    <li>Lifestyle Modifications – Weight loss, alcohol avoidance, positional therapy, and sleep hygiene counseling.</li>
                    <li>Oral Appliances – Custom dental devices for mild to moderate OSA or CPAP-intolerant patients.</li>
                    <li>Surgical Options – For selected patients with anatomical obstruction (e.g., UPPP, nasal surgery, or Inspire implant).</li>
                    <li>Follow-up & Compliance Support – We monitor progress and help you adapt to treatment for long-term success.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Sleep Medicine Specialists & Pulmonologists</li>
                <li>Accredited sleep study facilities</li>
                <li>Customized, evidence-based treatment plans</li>
                <li>Comfortable home sleep testing options</li>
                <li>Dedicated patient support and counseling</li>
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