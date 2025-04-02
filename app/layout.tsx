import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Fox Clinic - Ekskluzywna Klinika Medycyny Estetycznej w Warszawie",
  description:
    "Fox Clinic to renomowana klinika medycyny estetycznej zlokalizowana w Warszawie, prowadzona przez duet matka-córka. Oferuje szeroką gamę zabiegów upiększających, odmładzających i modelujących sylwetkę.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}

