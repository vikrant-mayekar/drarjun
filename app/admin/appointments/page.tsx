"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { getAppointments } from "./actions"
import { Loader2 } from "lucide-react"

type Appointment = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  reason: string
  createdAt: string
  status?: "pending" | "confirmed" | "cancelled"
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadAppointments() {
      try {
        setLoading(true)
        const data = await getAppointments()

        // Add status field (in a real app, this would come from the database)
        const appointmentsWithStatus = data.map((appointment) => ({
          ...appointment,
          status: "pending" as const,
        }))

        setAppointments(appointmentsWithStatus)
      } catch (err) {
        console.error("Failed to load appointments:", err)
        setError("Failed to load appointments. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    loadAppointments()
  }, [])

  // Function to get service name from service code
  const getServiceName = (serviceCode: string) => {
    const services: Record<string, string> = {
      respiratory: "Respiratory Disease Management",
      interventional: "Interventional Pulmonology",
      sleep: "Sleep Medicine",
      critical: "Critical Care Consultation",
      general: "General Consultation",
    }

    return services[serviceCode] || serviceCode
  }

  // Function to get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500">Confirmed</Badge>
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
            Pending
          </Badge>
        )
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Appointment Requests</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">{error}</div>
          ) : appointments.length === 0 ? (
            <div className="text-center py-10 text-gray-500">No appointment requests found.</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{appointment.name}</TableCell>
                      <TableCell>
                        <div>{appointment.email}</div>
                        <div className="text-sm text-gray-500">{appointment.phone}</div>
                      </TableCell>
                      <TableCell>{getServiceName(appointment.service)}</TableCell>
                      <TableCell>
                        <div>
                          {appointment.date ? format(new Date(appointment.date), "MMM dd, yyyy") : "Not specified"}
                        </div>
                        <div className="text-sm text-gray-500">{appointment.time}</div>
                      </TableCell>
                      <TableCell>{getStatusBadge(appointment.status || "pending")}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            Confirm
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                            Cancel
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
