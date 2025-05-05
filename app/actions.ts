"use server"

import fs from "fs/promises"
import path from "path"
import { z } from "zod"

// Define the appointment schema for validation
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  reason: z.string().optional(),
})

// Type for appointment data
export type AppointmentData = z.infer<typeof appointmentSchema>

// Type for the response
export type AppointmentResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

// Function to save appointment to a JSON file
// In a real application, this would save to a database
export async function bookAppointment(formData: FormData): Promise<AppointmentResponse> {
  try {
    // Extract data from form
    const appointmentData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      reason: formData.get("reason") as string,
      createdAt: new Date().toISOString(),
    }

    // Validate the data
    const validationResult = appointmentSchema.safeParse(appointmentData)

    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), "data")
    try {
      await fs.mkdir(dataDir, { recursive: true })
    } catch (error) {
      console.error("Error creating data directory:", error)
    }

    // Path to appointments file
    const appointmentsFile = path.join(dataDir, "appointments.json")

    // Read existing appointments or create empty array
    let appointments = []
    try {
      const fileContent = await fs.readFile(appointmentsFile, "utf-8")
      appointments = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist or is invalid, start with empty array
      appointments = []
    }

    // Add new appointment
    appointments.push(appointmentData)

    // Write back to file
    await fs.writeFile(appointmentsFile, JSON.stringify(appointments, null, 2), "utf-8")

    // Return success response
    return {
      success: true,
      message: "Appointment booked successfully!",
    }
  } catch (error) {
    console.error("Error booking appointment:", error)
    return {
      success: false,
      message: "An error occurred while booking your appointment. Please try again later.",
    }
  }
}
