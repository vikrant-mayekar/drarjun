"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TreesIcon as Lungs, Menu, X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      subItems: [
        { name: "Asthma", href: "/services/asthma" },
        { name: "COPD", href: "/services/copd" },
        { name: "Tuberculosis TB", href: "/services/tuberculosis" },
        { name: "Interstitial Lung Disease", href: "/services/interstitial-lung-disease" },
        { name: "Pleural Effusion", href: "/services/pleural-effusion" },
        { name: "Obstructive Sleep Apnea In Adult", href: "/services/obstructive-sleep-apnea-in-adult" },
        { name: "Swine Flue", href: "/services/swine-flue" },
        { name: "Pulmonary Function Test", href: "/services/pulmonary-function-test" },
        { name: "Pulse Oximeter", href: "/services/pulse-oximeter" },
        { name: "Bipap/CPAP/Oxygen Therapy", href: "/services/bipap-cpap-oxygen-therapy" },
        { name: "Polysomnography", href: "/services/polysomnography" },
        { name: "6MWT", href: "/services/6mwt" },
        { name: "Sputum Test", href: "/services/sputum-test" },
        { name: "Chest X Ray", href: "/services/chest-x-ray" },
        { name: "Vaccination", href: "/services/vaccination" },
        { name: "Peakflow Metry", href: "/services/peakflow-metry" },
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white py-2"
  } border-b border-gray-200`}
>
  <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
    <Link href="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="Dr. Arjun Ramaswamy" className="h-20 w-auto" />
    </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            item.subItems ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  pathname.startsWith(item.href)
                    ? "text-yellow-800 bg-yellow-50"
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                }`}>
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link
                        href={subItem.href}
                        className={`w-full ${
                          pathname === subItem.href ? "text-yellow-800 bg-yellow-50" : ""
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? "text-yellow-800 bg-yellow-50"
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
          <Button asChild className="ml-2 bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="bg-yellow-100 rounded-full flex items-center justify-center">
                        <img src="/logo.png" alt="Dr. Arjun Ramaswamy" className="h-20 w-100%" />
                      </div>
                    </Link>
                  </div>
                </div>
                <nav className="flex-1 overflow-auto py-6 px-6">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        {item.subItems ? (
                          <div className="space-y-2">
                            <button
                              onClick={() => setExpandedMenu(expandedMenu === item.name ? null : item.name)}
                              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                                pathname.startsWith(item.href)
                                  ? "text-yellow-800 bg-yellow-50"
                                  : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                              }`}
                            >
                              {item.name}
                              <ChevronDown className={`h-5 w-5 transition-transform ${expandedMenu === item.name ? 'rotate-180' : ''}`} />
                            </button>
                            {expandedMenu === item.name && (
                              <ul className="pl-4 space-y-2">
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                        pathname === subItem.href
                                          ? "text-yellow-800 bg-yellow-50"
                                          : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                                      }`}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        setExpandedMenu(null)
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                              pathname === item.href
                                ? "text-yellow-800 bg-yellow-50"
                                : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t">
                  <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded-full">
                    <Link href="/appointment" onClick={() => setIsMobileMenuOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
