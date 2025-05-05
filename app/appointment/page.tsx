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
import { bookAppointment } from "../actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

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

    try {
      if (!formRef.current) return

      const formData = new FormData(formRef.current)

      // Add the date to the form data
      if (date) {
        formData.set("date", format(date, "yyyy-MM-dd"))
      } else {
        formData.set("date", "")
      }

      const response = await bookAppointment(formData)

      if (response.success) {
        setIsSubmitted(true)
        setErrors({})
        toast({
          title: "Appointment Requested",
          description: "Your appointment request has been submitted successfully.",
        })
      } else {
        setErrors(response.errors || {})
        setSubmissionError(response.message)
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: response.message,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmissionError("An unexpected error occurred. Please try again.")
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
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
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Book an Appointment</h1>
            <p className="text-lg text-gray-600">
              Schedule your consultation with Dr. Arjun Ramaswamy. We'll get back to you promptly to confirm your
              appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          {isSubmitted ? (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Thank you for scheduling an appointment with Dr. Arjun Ramaswamy. We'll review your request and contact
                you shortly to confirm your appointment details.
              </p>
              <Button onClick={resetForm} className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8">
                Book Another Appointment
              </Button>
            </motion.div>
          ) : (
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Appointment Request Form</h2>

                {submissionError && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{submissionError}</AlertDescription>
                  </Alert>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className={`w-full ${errors.name ? "border-red-500" : ""}`}
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
                        className={`w-full ${errors.phone ? "border-red-500" : ""}`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone[0]}</p>}
                    </div>
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
                      className={`w-full ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type *
                    </label>
                    <Select name="service" onValueChange={(value) => handleSelectChange("service", value)}>
                      <SelectTrigger className={`w-full ${errors.service ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="respiratory">Respiratory Disease Management</SelectItem>
                        <SelectItem value="interventional">Interventional Pulmonology</SelectItem>
                        <SelectItem value="sleep">Sleep Medicine</SelectItem>
                        <SelectItem value="critical">Critical Care Consultation</SelectItem>
                        <SelectItem value="general">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service[0]}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full justify-start text-left font-normal ${errors.date ? "border-red-500" : ""}`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
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
                        <SelectTrigger className={`w-full ${errors.time ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                        <SelectContent>
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
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <div className="text-sm text-gray-500">
                    <p>* Required fields</p>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Book Appointment"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Clinic Hours:</strong>
                  <br />
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
                <p>
                  <strong>Location:</strong>
                  <br />
                  NRI Complex, Seawoods
                  <br />
                  Navi Mumbai, Maharashtra
                </p>
                <p>
                  <strong>Contact:</strong>
                  <br />
                  Phone: +91 XXXXX XXXXX
                  <br />
                  Email: arjun567.ar@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Bring</h2>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Photo ID and insurance information (if applicable)</li>
                <li>List of current medications</li>
                <li>Previous medical records related to your condition</li>
                <li>Previous test results, X-rays, or scans</li>
                <li>List of questions or concerns you'd like to discuss</li>
                <li>A family member or friend (if you'd like someone to accompany you)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
