"use server"

import fs from "fs/promises"
import path from "path"

// Type for appointment data
export type Appointment = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  reason: string
  createdAt: string
}

// Function to get all appointments
export async function getAppointments(): Promise<Appointment[]> {
  try {
    // Path to appointments file
    const appointmentsFile = path.join(process.cwd(), "data", "appointments.json")

    // Read appointments file
    try {
      const fileContent = await fs.readFile(appointmentsFile, "utf-8")
      return JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist or is invalid, return empty array
      return []
    }
  } catch (error) {
    console.error("Error getting appointments:", error)
    throw new Error("Failed to retrieve appointments")
  }
}
