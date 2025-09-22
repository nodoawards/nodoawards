import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NODO AWARDS - El futuro de la premiación | Trofeos y Premios Personalizados",
  description: "Diseñamos y fabricamos trofeos, premios, medallas y regalos corporativos personalizados. Servicio integral desde el diseño hasta la entrega. El futuro de la premiación.",
  keywords: "trofeos, premios, medallas, reconocimiento, corporativo, personalizado, diseño, fabricación, entrega, fotografía, eventos",
  authors: [{ name: "NODO AWARDS" }],
  creator: "NODO AWARDS",
  publisher: "NODO AWARDS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nodoawards.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NODO AWARDS - El futuro de la premiación",
    description: "Diseñamos y fabricamos trofeos, premios, medallas y regalos corporativos personalizados. Servicio integral desde el diseño hasta la entrega.",
    url: 'https://nodoawards.com',
    siteName: 'NODO AWARDS',
    images: [
      {
        url: '/favicon.nodo.jpg',
        width: 1200,
        height: 630,
        alt: 'NODO AWARDS - El futuro de la premiación',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NODO AWARDS - El futuro de la premiación",
    description: "Diseñamos y fabricamos trofeos, premios, medallas y regalos corporativos personalizados.",
    images: ['/favicon.nodo.jpg'],
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.nodo.jpg" type="image/jpeg" />
        <link rel="icon" href="/favicon.nodo.jpg" sizes="32x32" type="image/jpeg" />
        <link rel="icon" href="/favicon.nodo.jpg" sizes="16x16" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.nodo.jpg" />
        <link rel="shortcut icon" href="/favicon.nodo.jpg" />
      </head>
      <body className="font-syne antialiased">{children}</body>
    </html>
  )
}
