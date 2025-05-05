import Link from "next/link"
import { TreesIcon as Lungs, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"
import AutoScrollingServices from "./AutoScrollingServices"

export default function Footer() {
  return (
    
    <footer className="bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 text-white">
      <AutoScrollingServices />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-white.png" alt="Logo" width={300} height={200} />
            </div>
            <p className="text-white mb-4">
              Specialist in Pulmonary Care, Critical Care, and Sleep Medicine with over 10 years of experience.
            </p>
            
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-yellow-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white hover:text-yellow-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-white hover:text-yellow-500 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/asthma" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> Asthma
                </Link>
              </li>
              <li>
                <Link href="/services/copd" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> COPD
                </Link>
              </li>
              <li>
                <Link href="/services/tuberculosis" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> Tuberculosis TB
                </Link>
              </li>
              <li>
                <Link href="/services/interstitial-lung-disease" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> Interstitial Lung Disease
                </Link>
              </li>
              <li>
                <Link href="/services/pleural-effusion" className="text-white hover:text-yellow-500 transition-colors">
                 <span className="text-red-500">*</span> Pleural Effusion
                </Link>
              </li>
              <li>
                <Link href="/services/obstructive-sleep-apnea-in-adult" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> Obstructive Sleep Apnea In Adult
                </Link>
              </li>
              <li>
                <Link href="/services/swine-flue" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> Swine Flue
                </Link>
              </li>
              <li>
                <Link href="/services/pulmonary-function-test" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> Pulmonary Function Test
                </Link>
              </li>
              <li>
                <Link href="/services/pulse-oximeter" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> Pulse Oximeter
                </Link>
              </li>
              <li>
                <Link href="/services/bipap-cpap-oxygen-therapy" className="text-white hover:text-yellow-500 transition-colors">
                <span className="text-red-500">*</span> Bipap | CPAP | Oxygen Therapy
                </Link>
              </li> 
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-white hover:text-yellow-500 transition-colors">101-105, Hiranandani Crystal Plaza, 1st Floor, Sector 7, Kharghar, Navi Mumbai - 410210.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-white hover:text-yellow-500 transition-colors">Apollo Hospital,Plot -13, Parsik Hill Rd, off Uran Road, opp. Nerul Wonders Park, Sector 23, CBD Belapur, Navi Mumbai, Maharashtra 400614</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+919833857855" className="text-white hover:text-yellow-500 transition-colors flex items-center gap-2">
                  +91 9833857855
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="https://wa.me/919833857855" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors flex items-center gap-2">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:arjun567.ar@gmail.com" className="text-white hover:text-yellow-500 transition-colors">
                  arjun567.ar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Arjun Ramaswamy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
