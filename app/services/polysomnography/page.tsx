"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function PolysomnographyPage() {
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
          src="/images/polysomnography-banner.jpg"
          alt="Polysomnography Services"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Polysomnography Services</h1>
              <p className="text-lg md:text-xl mb-8">
                Comprehensive sleep studies to diagnose and treat sleep disorders effectively.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8">
                <Link href="/appointment">Book a Sleep Study</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <AutoScrollingServices />
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-900/20 via-cyan-600/20 to-cyan-900/20">
      <div className="container mx-auto">
        <img src="/services/11.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
              <h2 className="text-2xl font-bold mb-4">Discover the Root of Your Sleep Issues</h2>
              <p className="text-gray-600">
                At our clinic, we offer Polysomnography (PSG)—a comprehensive overnight sleep study that helps diagnose sleep disorders such as Obstructive Sleep Apnea (OSA), insomnia, restless leg syndrome, and narcolepsy. If you're constantly tired, snore loudly, or wake up gasping, a sleep study could be the key to reclaiming restful nights.
              </p>
            </div>
            <img src="/services/sleep-study.png" alt="Sleep Study" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
            
            {/* What Is Polysomnography */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">What Is Polysomnography?</h2>
              <p className="text-gray-600">
                Polysomnography is a painless, non-invasive test conducted overnight in a sleep lab. It monitors your brain activity, breathing, heart rate, oxygen levels, muscle movement, and sleep stages to evaluate for sleep disorders.
              </p>
            </div>

            {/* Conditions Diagnosed */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Conditions Diagnosed with Polysomnography</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Obstructive Sleep Apnea (OSA)</li>
                <li>Central Sleep Apnea</li>
                <li>Insomnia</li>
                <li>Narcolepsy</li>
                <li>Restless Leg Syndrome (RLS)</li>
                <li>Periodic Limb Movement Disorder (PLMD)</li>
                <li>Unexplained nighttime awakenings or fatigue</li>
              </ul>
            </div>

            {/* Who Should Consider */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Who Should Consider a Sleep Study?</h2>
              <p className="text-gray-600 mb-4">You may benefit from polysomnography if you experience:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Loud, persistent snoring</li>
                <li>Pauses in breathing while asleep</li>
                <li>Daytime sleepiness or fatigue</li>
                <li>Difficulty concentrating or memory issues</li>
                <li>Morning headaches</li>
                <li>Mood changes or depression</li>
                <li>Nighttime gasping or choking</li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">What to Expect During the Test</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>Pre-Test Preparation: You arrive at the sleep center in the evening. Bring your nightwear and essentials.</li>
                <li>Sensor Placement: Small, painless sensors are placed on your scalp, face, chest, and legs to monitor sleep patterns.</li>
                <li>Overnight Monitoring: Our technicians observe your sleep throughout the night from a nearby room.</li>
                <li>Next-Day Results Review: The recorded data is analyzed and reviewed by a sleep specialist to determine your diagnosis and next steps.</li>
              </ol>
            </div>

            {/* Home vs In-Lab */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Home Sleep Study vs. In-Lab PSG</h2>
              <p className="text-gray-600 mb-4">We offer both options based on your condition:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Home Sleep Test: Convenient and suitable for suspected moderate-to-severe OSA</li>
                <li>In-Lab PSG: More comprehensive and ideal for complex sleep disorders or inconclusive home test results</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Accredited sleep center with modern facilities</li>
                <li>Experienced sleep medicine specialists</li>
                <li>Comfortable, hotel-like testing rooms</li>
                <li>Accurate diagnosis using advanced technology</li>
                <li>Full support from evaluation to treatment (CPAP, BiPAP, etc.)</li>
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