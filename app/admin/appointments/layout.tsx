import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin - Appointments | Dr. Arjun Ramaswamy",
  description: "Manage appointment requests",
}

export default function AppointmentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="mb-8">
          <nav className="flex space-x-4">
            <a href="/admin/appointments" className="px-4 py-2 bg-teal-600 text-white rounded-md">
              Appointments
            </a>
            <a href="/admin" className="px-4 py-2 bg-white text-gray-700 rounded-md border">
              Dashboard
            </a>
          </nav>
        </div>
        {children}
      </div>
    </div>
  )
}
