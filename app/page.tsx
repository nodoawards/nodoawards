'use client'

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Twitter, Linkedin, Github, Mail, Trophy, Copyright, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useState } from "react"

export default function LandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/mrblrqqb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error('Error submitting form')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f1f1f1' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 font-syne">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image src="/images/nodo-logo.png" alt="NODO AWARDS" width={140} height={32} className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium hover:text-slate-900 transition-colors font-syne">
              Servicios
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-slate-900 transition-colors font-syne">
              Productos
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-slate-900 transition-colors font-syne">
              Nosotros
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-slate-900 transition-colors font-syne">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="font-syne" 
              style={{ backgroundColor: '#413725', color: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d2519'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#413725'}
            >
              Contactanos
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden" style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' }}>
        {/* Background Image - Behind everything */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroimage-prueba.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[84px] font-syne">
                <span style={{ color: '#413725' }}>El futuro de</span>
                <br />
                <span style={{ color: '#413725' }}>la </span>
                <span className="hero-gradient">premiación</span>
              </h1>
              <p className="text-xl max-w-[600px] font-syne" style={{ color: '#8B8D98' }}>
                Diseño y fabricación de objetos comunicacionales
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-syne"
                style={{ backgroundColor: '#413725', color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d2519'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#413725'}
              >
                Solicitar propuesta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#FAFAFA] rounded-2xl overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-2 items-center">
                {/* Left Section - Text Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-syne" style={{ color: '#413725' }}>
                      Nosotros
                    </h2>
                    <p className="text-lg text-slate-600 font-syne leading-relaxed">
                      En NodoAwards© comprendemos el desafío de crear ceremonias de premiación que sean memorables, auténticas y de calidad. Por eso nos especializamos en el diseño y la fabricación de trofeos, premios, medallas y regalos corporativos que transforman cada reconocimiento en una experiencia única.
                    </p>
                  </div>
                </div>

                {/* Right Section - Image */}
                <div className="relative h-64 lg:h-[350px] overflow-hidden" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
                  <Image
                    src="/img-tarjeta-nos.jpg"
                    alt="NodoAwards Team"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container px-4 md:px-6">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight font-syne text-left" style={{ fontSize: '36px' }}>
              <span style={{ color: '#413725' }}>Cómo </span>
              <span className="hero-gradient">elevamos el</span>
              <br />
              <span className="hero-gradient">estándar</span>
              <span style={{ color: '#413725' }}> de la premiación</span>
            </h2>
          </div>

          {/* Product Cards */}
          <div className="space-y-8">
            {/* Card 1 - CRACK BETANO */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-2 items-center">
                {/* Left Section - Text Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold font-syne hero-gradient">"CRACK" BETANO</h3>
                      <p className="text-lg font-syne" style={{ color: '#413725' }}>TROFEO</p>
                    </div>
                    <p className="text-base text-slate-600 font-syne leading-relaxed">
                      Creamos un trofeo exclusivo para Betano, una de las empresas líderes en entretenimiento deportivo. El Trofeo "Crack Betano" fue destinado a distinguir al mejor jugador de cada fecha del Torneo Clausura Betano 2025 de la Primera División de Argentina. Este fue diseñado, ajustado y fabricado íntegramente por nuestro equipo.
                    </p>
                    <div className="pt-4">
                      <p className="text-lg font-bold font-syne" style={{ color: '#413725' }}>Betano</p>
                    </div>
                  </div>
                </div>

                {/* Right Section - Image */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
                  <Image
                    src="/Dimaria-betano-nodo-recorte.jpg"
                    alt="Trofeo Crack Betano"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - CUEVA */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-2 items-center">
                {/* Left Section - Image */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden" style={{ borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }}>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Medalla Cueva"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Section - Text Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold font-syne hero-gradient">CUEVA</h3>
                      <p className="text-lg font-syne" style={{ color: '#413725' }}>MEDALLA</p>
                    </div>
                    <p className="text-base text-slate-600 font-syne leading-relaxed">
                      Colaboramos con Cueva para diseñar una medalla especial que exprese su espíritu y estilo. Una pieza única con acabados premium, destinada a reconocer el excelente trabajo en equipo.
                    </p>
                    <div className="pt-4">
                      <p className="text-lg font-bold font-syne" style={{ color: '#413725' }}>Cueva</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - NODO */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-2 items-center">
                {/* Left Section - Text Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold font-syne hero-gradient">NODO</h3>
                      <p className="text-lg font-syne" style={{ color: '#413725' }}>TROFEO</p>
                    </div>
                    <p className="text-base text-slate-600 font-syne leading-relaxed">
                      Desarrollamos nuestro propio trofeo, reflejando nuestros valores de innovación, diseño y calidad. Una pieza conceptual que demuestra el nivel de detalle y excelencia que ofrecemos a nuestros clientes.
                    </p>
                    <div className="pt-4">
                      <p className="text-lg font-bold font-syne" style={{ color: '#413725' }}>NODO AWARDS</p>
                    </div>
                  </div>
                </div>

                {/* Right Section - Image */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Trofeo Nodo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Obtené la calidad que te mereces
            </h2>
            <p className="text-xl text-slate-600">Envianos tu idea y conversamos las posibilidades de tu marca</p>
            <div className="max-w-md mx-auto">
              {!isSubmitted ? (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                      placeholder="Contanos sobre tu proyecto..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-slate-900 hover:bg-slate-800"
                  >
                    Solicitá tu diseño
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-6 py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">¡Gracias por contactarnos!</h3>
                    <p className="text-slate-600">
                      Hemos recibido tu solicitud. Nos pondremos en contacto contigo en las próximas 24 horas.
                    </p>
                  </div>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Enviar otra solicitud
                  </Button>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Propuestas sin cargo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Sin compromiso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <Image
                src="/images/nodo-logo.png"
                alt="NODO AWARDS"
                width={200}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-slate-400">Creamos trofeos que combinan diseño, calidad y propósito.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Navegación</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-white transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} NODO AWARDS. Derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
