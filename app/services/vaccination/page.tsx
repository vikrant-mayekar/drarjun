"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, HeartPulse, Stethoscope, ArrowRight } from "lucide-react"
import AutoScrollingServices from "@/components/AutoScrollingServices"
export default function VaccinationPage() {
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
          src="/images/vaccination-banner.jpg"
          alt="Vaccination Services"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Vaccination Services</h1>
              <p className="text-lg md:text-xl mb-8">
                Comprehensive immunization services to protect you and your family from preventable diseases.
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
        <img src="/services/15.svg" alt="Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />
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
                className="w-full justify-start mb-2 bg-yellow-500 text-black"
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
            {/* Vaccination Section */}
            <div className="mt-8">
              {/* Introduction */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Vaccination Services in Navi Mumbai | Protect Your Health</h2>
                <p className="text-gray-600">
                  Prevent Illness. Build Immunity. Stay Protected. At Our Clinic, we offer a full range of vaccination services for children, adults, seniors, and travelers. Vaccines are one of the most effective ways to prevent serious illnesses and promote long-term health. Whether you need routine immunizations or travel-specific vaccines, our team ensures safe, timely, and evidence-based vaccination.
                </p>
              </div>
              <img src="/services/vaccination.png" alt="Vaccination Services" className="w-full h-auto rounded-lg shadow-lg position-center top-0 left-0 mb-4" />

              {/* Why Important */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Why Are Vaccines Important?</h2>
                <p className="text-gray-600">
                  Vaccines help your body build immunity against harmful diseases without causing the illness itself. They protect not just you, but also your family and community by preventing outbreaks of contagious diseases.
                </p>
              </div>

              {/* Vaccinations Offered */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Vaccinations We Offer</h2>
                
                <h3 className="text-xl font-semibold mb-2 mt-4">Childhood Immunizations</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>BCG (Tuberculosis)</li>
                  <li>DPT (Diphtheria, Pertussis, Tetanus)</li>
                  <li>Polio (Oral and Injectable)</li>
                  <li>MMR (Measles, Mumps, Rubella)</li>
                  <li>Hepatitis B</li>
                  <li>Rotavirus</li>
                  <li>Pneumococcal (PCV)</li>
                  <li>Hib (Haemophilus influenzae type B)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 mt-4">Adult & Booster Vaccines</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Tdap/Tetanus</li>
                  <li>Hepatitis A & B</li>
                  <li>HPV (Human Papillomavirus)</li>
                  <li>Influenza (Flu shot)</li>
                  <li>Shingles (Zoster)</li>
                  <li>Pneumococcal (for seniors and at-risk adults)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 mt-4">Travel Vaccines</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Yellow Fever</li>
                  <li>Typhoid</li>
                  <li>Cholera</li>
                  <li>Hepatitis A/B</li>
                  <li>Rabies</li>
                  <li>Meningococcal vaccine (for Hajj, Umrah, etc.)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 mt-4">COVID-19 Vaccines & Boosters</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Latest approved vaccines for all age groups</li>
                  <li>Booster doses as per government and WHO guidelines</li>
                </ul>
              </div>

              {/* Who Should Get Vaccinated */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Who Should Get Vaccinated?</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Children and newborns (as per immunization schedule)</li>
                  <li>Elderly adults (above 60 years)</li>
                  <li>Pregnant women (for Tdap, influenza, etc.)</li>
                  <li>Healthcare and frontline workers</li>
                  <li>People with chronic illnesses (diabetes, asthma, heart/lung disease)</li>
                  <li>International travelers</li>
                  <li>Individuals who missed childhood vaccinations</li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Certified vaccine center with cold chain compliance</li>
                  <li>Administered by trained doctors and nurses</li>
                  <li>Quick appointments and minimal wait time</li>
                  <li>Vaccination record provided for documentation and school/travel</li>
                  <li>Counseling on side effects, precautions, and future doses</li>
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