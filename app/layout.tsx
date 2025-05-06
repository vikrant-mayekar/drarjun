import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dr. Arjun Ramaswamy - Pulmonologist | Intensivist | Sleep Physician",
  description: "Specialist in Pulmonary Care, Critical Care, and Sleep Medicine with over 10 years of experience. Expert in treating asthma, COPD, sleep apnea, and other respiratory conditions in Navi Mumbai.",
  keywords: "pulmonologist, intensivist, sleep physician, respiratory specialist, asthma treatment, COPD treatment, sleep apnea, Navi Mumbai, lung specialist, critical care, pulmonary care",
  authors: [{ name: "Dr. Arjun Ramaswamy" }],
  creator: "Dr. Arjun Ramaswamy",
  publisher: "Dr. Arjun Ramaswamy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drarjunramaswamy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Arjun Ramaswamy - Pulmonologist | Intensivist | Sleep Physician",
    description: "Specialist in Pulmonary Care, Critical Care, and Sleep Medicine with over 10 years of experience. Expert in treating asthma, COPD, sleep apnea, and other respiratory conditions in Navi Mumbai.",
    url: 'https://drarjunramaswamy.com',
    siteName: 'Dr. Arjun Ramaswamy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Arjun Ramaswamy - Pulmonologist | Intensivist | Sleep Physician",
    description: "Specialist in Pulmonary Care, Critical Care, and Sleep Medicine with over 10 years of experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pszFnGDdXV4lXOstZl1T09cl9FWAIs0A49Ye39-Zftc',
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="pszFnGDdXV4lXOstZl1T09cl9FWAIs0A49Ye39-Zftc" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZN99G4GWC2"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZN99G4GWC2');
          `,
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
