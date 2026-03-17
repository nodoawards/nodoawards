'use client'

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Twitter, Linkedin, Github, Mail, Trophy, Copyright, Wrench, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ServiciosPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/mjggggkn', {
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

  const servicios = [
    {
      title: "Diseño",
      description: (
        <>
          Diseñamos trofeos, premios, menciones, medallas y regalos corporativos a medida.
        </>
      ),
      image: "/servicio-01.png"
    },
    {
      title: "Fabricación",
      description: (
        <>
          Contamos con procesos de <span className="font-semibold">producción de alta calidad,</span> donde combinamos tecnología y artesanía para lograr piezas únicas.
        </>
      ),
      image: "/servicio-02.png"
    },
    {
      title: "Entrega",
      description: (
        <>
          Ofrecemos un servicio completo que incluye <span className="font-semibold">opciones de packaging premium.</span>
        </>
      ),
      image: "/servicio-03.png"
    },
    {
      title: "Fotografía en evento",
      description: (
        <>
          Acompañamos la experiencia de premiación con <span className="font-semibold">cobertura fotográfica profesional,</span> capturando la emoción y el momento de entrega.
        </>
      ),
      image: "/servicio-04.png"
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f1f1f1' }}>
      {/* Header */}
      <header
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg font-geist relative"
        style={{ border: '1px solid rgba(175, 137, 255, 0.13)' }}
      >
        <div className="container flex h-[52px] items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image 
                src="/Logo PNG - texto negro.png" 
                alt="NODO AWARDS" 
                width={130} 
                height={28} 
                className="h-7 w-auto transition-opacity duration-300" 
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/servicios" 
              className="text-sm font-medium transition-colors duration-300 font-geist" 
              style={{ color: '#04001B' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#AF89FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#04001B'}
            >
              Servicios
            </Link>
            <Link 
              href="/productos" 
              className="text-sm font-medium transition-colors duration-300 font-geist" 
              style={{ color: '#04001B' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#AF89FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#04001B'}
            >
              Productos
            </Link>
            <Link 
              href="/nosotros" 
              className="text-sm font-medium transition-colors duration-300 font-geist" 
              style={{ color: '#04001B' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#AF89FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#04001B'}
            >
              Nosotros
            </Link>
            <Link 
              href="/#contact" 
              className="text-sm font-medium transition-colors duration-300 font-geist" 
              style={{ color: '#04001B' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#AF89FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#04001B'}
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link href="https://wa.me/5491122704706" target="_blank" rel="noopener noreferrer">
              <Button
                className="font-geist h-9 px-4"
                style={{ backgroundColor: '#AF89FF', color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9B7BED'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#AF89FF'}
              >
                Contactanos
              </Button>
            </Link>
            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/40 bg-white/60 p-2 shadow-sm"
              onClick={() => setIsMobileNavOpen((open) => !open)}
              aria-label="Abrir menú de navegación"
            >
              {isMobileNavOpen ? (
                <X className="h-5 w-5" style={{ color: '#04001B' }} />
              ) : (
                <Menu className="h-5 w-5" style={{ color: '#04001B' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav menu */}
        {isMobileNavOpen && (
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-full px-3 pb-3">
            <nav className="rounded-2xl bg-white shadow-lg border border-gray-200/70 py-3 px-4 space-y-2">
              <Link
                href="/servicios"
                className="block text-sm font-medium font-geist"
                style={{ color: '#04001B' }}
                onClick={() => setIsMobileNavOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/productos"
                className="block text-sm font-medium font-geist"
                style={{ color: '#04001B' }}
                onClick={() => setIsMobileNavOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/nosotros"
                className="block text-sm font-medium font-geist"
                style={{ color: '#04001B' }}
                onClick={() => setIsMobileNavOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/#contact"
                className="block text-sm font-medium font-geist"
                style={{ color: '#04001B' }}
                onClick={() => setIsMobileNavOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 bg-white overflow-hidden -mt-16" style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', minHeight: '70vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/render-nodo-frente.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'center -70px' }}
          />
        </div>
        <div className="absolute inset-0 z-10" />
      </section>

      {/* Services Content */}
      <main className="py-20" style={{ backgroundColor: '#f1f1f1' }}>
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto relative">
            {/* Background Line SVG */}
            <div
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0"
              style={{
                top: 500,
                width: '1087px',
                height: '1725px',
                backgroundImage: "url('/linea-servicio.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'top center',
                opacity: 0.7,
                filter: 'brightness(0) saturate(100%) invert(45%) sepia(93%) saturate(1352%) hue-rotate(228deg) brightness(95%) contrast(95%)'
              }}
            />
            {/* Title */}
            <ScrollReveal>
              <div className="text-center space-y-3 mb-16 relative z-10">
                <p className="text-sm font-geist mb-4" style={{ fontSize: '15px', color: '#686868' }}>
                  Nuestro servicio
                </p>
                <h2 className="text-3xl md:text-4xl font-medium font-stack-sans-notch">
                  <span style={{ color: '#04001B' }}>Cubrimos </span>
                  <span style={{ color: '#AF89FF' }}>cada paso</span>
                  <span style={{ color: '#04001B' }}> del proceso</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Services Sections */}
            <ScrollReveal>
              <div className="grid gap-16 lg:grid-cols-2 items-start relative z-10">
              {/* Left Column */}
              <div className="flex flex-col space-y-8">
                {/* Diseño */}
                <div
                  className="flex flex-col items-center text-center space-y-6"
                  style={{ maxWidth: '420px', margin: '60px auto 0 auto' }}
                >
                  <h3 className="text-3xl md:text-4xl font-medium font-stack-sans-notch" style={{ color: '#04001B' }}>
                    {servicios[0].title}
                  </h3>
                  <p
                    className="text-sm md:text-base font-geist leading-relaxed mx-auto max-w-[330px] md:max-w-[370px]"
                    style={{
                      color: '#04001B',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical' as any,
                      overflow: 'hidden'
                    }}
                  >
                    {servicios[0].description}
                  </p>
                  <div className="relative w-full overflow-hidden h-[320px] md:h-[360px]">
                    <Image
                      src={servicios[0].image}
                      alt={servicios[0].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Spacer controlable para bajar "Entrega" */}
                <div className="h-[150px]" />

                {/* Entrega */}
                <div
                  className="flex flex-col items-center text-center space-y-6 lg:pt-[169px]"
                  style={{ maxWidth: '420px', margin: '60px auto 0 auto' }}
                >
                  <h3 className="text-3xl md:text-4xl font-medium font-stack-sans-notch" style={{ color: '#04001B' }}>
                    {servicios[2].title}
                  </h3>
                  <p
                    className="text-sm md:text-base font-geist leading-relaxed mx-auto max-w-[330px] md:max-w-[370px]"
                    style={{
                      color: '#04001B',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical' as any,
                      overflow: 'hidden'
                    }}
                  >
                    {servicios[2].description}
                  </p>
                  <div className="relative w-full overflow-hidden h-[320px] md:h-[360px]">
                    <Image
                      src={servicios[2].image}
                      alt={servicios[2].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-8">
                {/* Fabricación */}
                <div
                  className="flex flex-col items-center text-center space-y-6 lg:pt-[338px]"
                  style={{ maxWidth: '420px', margin: '0 auto', marginTop: '185px' }}
                >
                  <h3 className="text-3xl md:text-4xl font-medium font-stack-sans-notch" style={{ color: '#04001B' }}>
                    {servicios[1].title}
                  </h3>
                  <p
                    className="text-sm md:text-base font-geist leading-relaxed mx-auto max-w-[330px] md:max-w-[370px]"
                    style={{
                      color: '#04001B',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical' as any,
                      overflow: 'hidden'
                    }}
                  >
                    {servicios[1].description}
                  </p>
                  <div className="relative w-full overflow-hidden h-[320px] md:h-[360px]">
                    <Image
                      src={servicios[1].image}
                      alt={servicios[1].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Fotografía en evento */}
                <div
                  className="flex flex-col items-center text-center space-y-6 lg:pt-[169px] lg:pb-72"
                  style={{ maxWidth: '420px', margin: '0 auto', marginTop: '110px' }}
                >
                  <h3 className="text-3xl md:text-4xl font-medium font-stack-sans-notch" style={{ color: '#04001B' }}>
                    Fotografia
                    <br />
                    en evento
                  </h3>
                  <p
                    className="text-sm md:text-base font-geist leading-relaxed mx-auto max-w-[330px] md:max-w-[370px]"
                    style={{
                      color: '#04001B',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical' as any,
                      overflow: 'hidden'
                    }}
                  >
                    {servicios[3].description}
                  </p>
                  <div className="relative w-full overflow-hidden h-[320px] md:h-[360px]">
                    <Image
                      src={servicios[3].image}
                      alt={servicios[3].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section className="py-20 relative" style={{ backgroundColor: '#FAFAFA' }}>
        <ScrollReveal>
        {/* Logo positioned at right edge */}
        <div className="absolute right-0 top-0 h-full flex items-center" style={{ zIndex: 1, transform: 'scale(0.7)', transformOrigin: 'right center' }}>
          <Image
            src="/medio logo contacto.png"
            alt="Noddo"
            width={300}
            height={600}
            className="h-full w-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="container px-4 md:px-6 relative" style={{ zIndex: 2 }}>
          <div className="max-w-2xl">
            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <div className="max-w-2xl">
                <h2 className="font-medium font-stack-sans-notch mb-8" style={{ color: '#04001B', fontSize: '36px' }}>
                  Contanos sobre tu idea
                </h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium font-geist mb-2" style={{ color: '#04001B' }}>
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-geist focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Ej: Juan Perez"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium font-geist mb-2" style={{ color: '#04001B' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-geist focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="hola@tuempresa.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium font-geist mb-2" style={{ color: '#04001B' }}>
                        Tu empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-geist focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Ej: Mercado Libre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium font-geist mb-2" style={{ color: '#04001B' }}>
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-geist focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Contanos sobre tu idea..."
                      />
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="font-geist"
                        style={{ backgroundColor: '#04001B', color: '#FFFFFF' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#AF89FF'
                          e.currentTarget.style.color = '#04001B'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#04001B'
                          e.currentTarget.style.color = '#FFFFFF'
                        }}
                      >
                        Solicitar propuesta
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4" style={{ color: '#7652FA' }} />
                        <span className="text-sm font-geist font-medium" style={{ color: '#7652FA' }}>
                          Primera propuesta sin cargo
                        </span>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="text-center space-y-6 py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-medium font-stack-sans-notch" style={{ color: '#04001B' }}>¡Gracias por contactarnos!</h3>
                      <p className="font-geist" style={{ color: '#04001B' }}>
                        Hemos recibido tu solicitud. Nos pondremos en contacto contigo en las próximas 24 horas.
                      </p>
                    </div>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-4 font-geist"
                      style={{ borderColor: '#04001B', color: '#04001B' }}
                    >
                      Enviar otra solicitud
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: '#04001B' }}>
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <Image
                src="/Logo PNG.png"
                alt="Noddo"
                width={200}
                height={48}
                className="h-12 w-auto"
              />
              <h2 className="font-light tracking-tight font-stack-sans-notch" style={{ fontSize: '20px', color: '#AF89FF' }}>
                El valor del reconocimiento
              </h2>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/somosnoddo/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#E7E3FE' }}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/somosnoddo" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#E7E3FE' }}>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://wa.me/5491122704706" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#E7E3FE' }}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </Link>
              </div>
              <p className="mt-4" style={{ color: '#E7E3FE' }}>
                holanoddo@gmail.com
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold" style={{ color: '#E7E3FE' }}>Navegación</h3>
              <ul className="space-y-2" style={{ color: '#E7E3FE' }}>
                <li>
                  <Link href="/servicios" className="hover:text-slate-300 transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-slate-300 transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="hover:text-slate-300 transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-slate-300 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: '#232335', color: '#E7E3FE' }}>
            <p>&copy; {new Date().getFullYear()} NODDO. Derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
