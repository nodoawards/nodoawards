import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Noddo - El valor de ser visto | Reconocimientos físicos y digitales",
  description: "Diseñamos y creamos reconocimientos físicos y digitales que celebran a las personas, fortalezcan la cultura de las organizaciones y devuelvan sentido al acto de reconocer.",
  keywords: "reconocimientos, premios, trofeos, medallas, reconocimiento empresarial, cultura organizacional, reconocimientos digitales, reconocimientos físicos, modelado 3D, trofeos futbol, equipo, medalla de futbol, medalla de deporte, trofeo particular, diseño, personalizado",
  authors: [{ name: "Noddo" }],
  creator: "Noddo",
  publisher: "Noddo",
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
    title: "Noddo - El valor de ser visto",
    description: "Diseñamos y creamos reconocimientos físicos y digitales que celebran a las personas, fortalezcan la cultura de las organizaciones y devuelvan sentido al acto de reconocer.",
    url: 'https://nodoawards.com',
    siteName: 'Noddo',
    images: [
      {
        url: '/favicon - noddo.svg',
        width: 1200,
        height: 630,
        alt: 'Noddo - El valor de ser visto',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Noddo - El valor de ser visto",
    description: "Diseñamos y creamos reconocimientos físicos y digitales que celebran a las personas, fortalezcan la cultura de las organizaciones y devuelvan sentido al acto de reconocer.",
    images: ['/favicon - noddo.svg'],
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
        <link rel="icon" href="/favicon - noddo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon - noddo.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon - noddo.svg" />
        <link rel="shortcut icon" href="/favicon - noddo.svg" />
      </head>
      <body className="font-geist antialiased">{children}</body>
    </html>
  )
}
