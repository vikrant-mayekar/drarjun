"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  { name: "Asthma Treatment", icon: "🌬️" },
  { name: "COPD Management", icon: "🫁" },
  { name: "Tuberculosis Treatment", icon: "💊" },
  { name: "Interstitial Lung Disease", icon: "🔬" },
  { name: "Sleep Apnea Treatment", icon: "😴" },
  { name: "Pulmonary Function Test", icon: "📊" },
  { name: "General Consultation", icon: "👨‍⚕️" }
]

export default function AutoScrollingServices() {
  return (
    <div className="w-full overflow-hidden bg-cyan-50 py-8">
      <motion.div
        className="flex space-x-4"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...services, ...services].map((service, index) => (
          <Card key={index} className="min-w-[200px] bg-white">
            <CardContent className="p-4 flex items-center space-x-2">
              <span className="text-2xl">{service.icon}</span>
              <span className="font-medium text-cyan-900">{service.name}</span>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  )
} 