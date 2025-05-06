"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useRef } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import AutoScrollingServices from "@/components/auto-scrolling-services"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
    reason: "",
  })
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field when user makes a selection
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate)

    // Clear error for date field when user selects a date
    if (errors.date) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.date
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionError(null)

    // Simple client-side validation
    const newErrors: Record<string, string[]> = {}
    if (!formState.name) newErrors.name = ["Name is required"]
    if (!formState.email) newErrors.email = ["Email is required"]
    if (!formState.phone) newErrors.phone = ["Phone is required"]
    if (!formState.service) newErrors.service = ["Service is required"]
    if (!date) newErrors.date = ["Date is required"]
    if (!formState.time) newErrors.time = ["Time is required"]

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false)
      setSubmissionError("Please fill all required fields.")
      return
    }

    setIsSubmitted(true)
    setErrors({})
    toast({
      title: "Appointment Requested",
      description: "Your appointment request has been submitted (demo only, not actually sent).",
    })
    setIsSubmitting(false)
  }

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  ]

  const resetForm = () => {
    setIsSubmitted(false)
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "",
      time: "",
      reason: "",
    })
    setDate(undefined)
    setErrors({})
    setSubmissionError(null)

    if (formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/slider/s2.jpeg"
          alt="Asthma Care"
          fill
          className="object-cover"
          priority
        />
          
      </section>
      <AutoScrollingServices />

      {/* Appointment Form Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto max-w-5xl">
          {isSubmitted ? (
            <motion.div
              className="text-center bg-white p-12 rounded-2xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-cyan-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Thank you for scheduling an appointment with Dr. Arjun Ramaswamy. We'll review your request and contact
                you shortly to confirm your appointment details.
              </p>
              <Button onClick={resetForm} className="bg-cyan-700 hover:bg-cyan-800 text-white rounded-full px-8">
                Book Another Appointment
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-cyan-900 mb-2">Book Your Appointment</h2>
                <p className="text-gray-600 mb-8">Schedule your consultation with Dr. Arjun Ramaswamy</p>

                {submissionError && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{submissionError}</AlertDescription>
                  </Alert>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full ${errors.name ? "border-red-500" : "border-cyan-200 focus:border-cyan-500"}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className={`w-full ${errors.phone ? "border-red-500" : "border-cyan-200 focus:border-cyan-500"}`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone[0]}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        className={`w-full ${errors.email ? "border-red-500" : "border-cyan-200 focus:border-cyan-500"}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Type *
                      </label>
                      <Select name="service" onValueChange={(value) => handleSelectChange("service", value)}>
                        <SelectTrigger className={`w-full ${errors.service ? "border-red-500" : "border-cyan-200 focus:border-cyan-500"}`}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asthma">Asthma Treatment</SelectItem>
                          <SelectItem value="copd">COPD Management</SelectItem>
                          <SelectItem value="tuberculosis">Tuberculosis Treatment</SelectItem>
                          <SelectItem value="lung-disease">Interstitial Lung Disease</SelectItem>
                          <SelectItem value="sleep-apnea">Sleep Apnea Treatment</SelectItem>
                          <SelectItem value="pulmonary">Pulmonary Function Test</SelectItem>
                          <SelectItem value="general">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service[0]}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={`w-full justify-start text-left font-normal ${
                                errors.date ? "border-red-500" : "border-cyan-200 hover:border-cyan-500"
                              }`}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-cyan-600" />
                              {date ? format(date, "PPP") : <span>Select a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={handleDateChange}
                              initialFocus
                              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                              className="rounded-md border border-cyan-200"
                            />
                          </PopoverContent>
                        </Popover>
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date[0]}</p>}
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time *
                        </label>
                        <Select name="time" onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger className={`w-full ${errors.time ? "border-red-500" : "border-cyan-200 focus:border-cyan-500"}`}>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent side="bottom">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time[0]}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for Appointment
                      </label>
                      <Textarea
                        id="reason"
                        name="reason"
                        value={formState.reason}
                        onChange={handleChange}
                        placeholder="Please briefly describe your symptoms or reason for the appointment"
                        className="w-full min-h-[120px] border-cyan-200 focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    <p>* Required fields</p>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-cyan-700 hover:bg-cyan-800 text-white rounded-full py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Book Appointment"}
                    </Button>
                  </motion.div>
                </form>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-cyan-900 mb-6">Appointment Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-100 p-3 rounded-lg">
                      <CalendarIcon className="h-6 w-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                      <p className="text-gray-600">
                        Apollo Hospital:<br/>
                        Monday - Saturday: 9:00 AM - 4:00 PM<br />
                        Clinic:<br/>
                        Monday - Saturday: 5:00 PM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">
                        101-105, Hiranandani Crystal Plaza, 1st Floor,<br />
                        Sector 7, Kharghar, Navi Mumbai - 410210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact</h4>
                      <p className="text-gray-600">
                        Phone: +91 9833857855<br />
                        Email: arjun567.ar@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="bg-cyan-50 p-6 rounded-xl mt-8">
                    <h4 className="font-semibold text-cyan-900 mb-4">What to Bring</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">•</span>
                        Photo ID and insurance information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">•</span>
                        List of current medications
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">•</span>
                        Previous medical records
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">•</span>
                        Previous test results
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      
    </main>
  )
}
