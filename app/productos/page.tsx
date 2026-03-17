'use client'

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Twitter, Linkedin, Github, Mail, Trophy, Copyright, Wrench, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ProductosPage() {
  const betanoSliderImages = [
    {
      src: "/Dimaria-betano-nodo-recorte.jpg",
      alt: "Trofeo Crack Betano - Distinción al jugador del partido"
    },
    {
      src: "/BETANO - FECHA 7 - CERUTTI.jpg",
      alt: "Crack Betano - Fecha 7 Cerutti"
    },
    {
      src: "/BETANO-FECHA-5-DILAN-GODOY.png",
      alt: "Crack Betano - Fecha 5 Dilan Godoy"
    },
    {
      src: "/FECHA 13 - EST VS GIM.jpg",
      alt: "Crack Betano - Fecha 13 Estudiantes vs Gimnasia"
    },
    {
      src: "/FOTO CRACK BETANO FECHA 4.png",
      alt: "Crack Betano - Fecha 4",
      objectPosition: "center calc(50% + 100px)"
    }
  ]

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [betanoSlideIndex, setBetanoSlideIndex] = useState(0)

  // Preload todas las imágenes del carousel al montar el componente
  useEffect(() => {
    betanoSliderImages.forEach((image) => {
      const img = new window.Image()
      img.src = image.src
    })
  }, [])

  // Preload imágenes adyacentes cuando cambia el índice
  useEffect(() => {
    const preloadImage = (index: number) => {
      const img = new window.Image()
      img.src = betanoSliderImages[index].src
    }

    // Preload siguiente
    const nextIndex = (betanoSlideIndex + 1) % betanoSliderImages.length
    preloadImage(nextIndex)

    // Preload anterior
    const prevIndex = (betanoSlideIndex - 1 + betanoSliderImages.length) % betanoSliderImages.length
    preloadImage(prevIndex)
  }, [betanoSlideIndex])

  const handleBetanoNext = () => {
    setBetanoSlideIndex((prev) => (prev + 1) % betanoSliderImages.length)
  }

  const handleBetanoPrev = () => {
    setBetanoSlideIndex((prev) => (prev - 1 + betanoSliderImages.length) % betanoSliderImages.length)
  }

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
                width={120} 
                height={24} 
                className="h-6 w-auto transition-opacity duration-300" 
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
            src="/render-detalle-betano.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10" />
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <ScrollReveal>
              <div className="mb-16 text-center">
              <p className="text-sm font-geist mb-4" style={{ fontSize: '15px', color: '#686868' }}>
                Nuestros proyectos
              </p>
              <h2 className="text-4xl font-medium tracking-tight font-stack-sans-notch" style={{ fontSize: '36px' }}>
                <span style={{ color: '#04001B' }}>Cómo </span>
                <span style={{ color: '#AF89FF' }}>elevamos</span>
                <span style={{ color: '#04001B' }}> el </span>
                <span style={{ color: '#AF89FF' }}>estándar</span>
                <span style={{ color: '#04001B' }}> de la premiación</span>
              </h2>
            </div>

            </ScrollReveal>

            {/* Product Cards */}
            <ScrollReveal>
              <div className="space-y-8">
              {/* Card 1 - CRACK BETANO */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-2 items-stretch">
                  {/* Left Section - Text Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Título y subtítulo arriba */}
                      <div className="space-y-2">
                        <h3 className="text-4xl font-medium font-stack-sans-notch" style={{ color: '#AF89FF' }}>"CRACK" BETANO</h3>
                        <p className="text-lg font-geist" style={{ color: '#686868' }}>TROFEO</p>
                      </div>
                      
                      {/* Texto explicativo y logo del cliente abajo */}
                      <div className="space-y-4 pt-32">
                        <p className="text-base text-slate-600 font-geist leading-relaxed">
                          Creamos un trofeo exclusivo para Betano, una de las empresas líderes en entretenimiento deportivo. El Trofeo "Crack Betano" fue destinado a distinguir al mejor jugador de cada fecha del Torneo Clausura Betano 2025 de la Primera División de Argentina. Este fue diseñado, ajustado y fabricado íntegramente por nuestro equipo.
                        </p>
                        <div className="pt-4">
                          <Image
                            src="/logo-betano.png"
                            alt="Betano Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Image */}
                  <div className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
                    <Image
                      key={betanoSliderImages[betanoSlideIndex].src}
                      src={betanoSliderImages[betanoSlideIndex].src}
                      alt={betanoSliderImages[betanoSlideIndex].alt}
                      fill
                      className="object-cover transition-opacity duration-500"
                      style={{ objectPosition: betanoSliderImages[betanoSlideIndex].objectPosition ?? 'center' }}
                      priority
                    />

                    <button
                      type="button"
                      onClick={handleBetanoPrev}
                      aria-label="Imagen anterior"
                      className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"
                      style={{ background: 'transparent', border: 'none' }}
                    />
                    <button
                      type="button"
                      onClick={handleBetanoNext}
                      aria-label="Imagen siguiente"
                      className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"
                      style={{ background: 'transparent', border: 'none' }}
                    />

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        {betanoSliderImages.map((_, index) => (
                          <span
                            key={index}
                            className={`h-2 w-6 rounded-full transition ${
                              index === betanoSlideIndex ? 'bg-white' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - CUEVA */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-2 items-center">
                  {/* Left Section - Image */}
                  <div className="relative h-96 lg:h-[500px] overflow-hidden" style={{ borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }}>
                    <Image
                      src="/render-medalla-cueva.jpg"
                      alt="Medalla Cueva"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Section - Text Content */}
                  <div className="p-8 lg:p-12">
                    <div className="space-y-8">
                      {/* Título y subtítulo arriba */}
                      <div className="space-y-2 -mt-4">
                        <h3 className="text-4xl font-medium font-stack-sans-notch" style={{ color: '#AF89FF' }}>CUEVA</h3>
                        <p className="text-lg font-geist" style={{ color: '#686868' }}>MEDALLA</p>
                      </div>
                      
                      {/* Texto explicativo y logo del cliente abajo */}
                      <div className="space-y-4 pt-32">
                        <p className="text-base text-slate-600 font-geist leading-relaxed">
                          Colaboramos con Cueva para diseñar una medalla especial que exprese su espíritu y estilo. Una pieza única con acabados premium, destinada a reconocer el excelente trabajo en equipo.
                        </p>
                        <div className="pt-4 mt-12">
                          <Image
                            src="/logo-cueva.png"
                            alt="Cueva Logo"
                            width={145}
                            height={48}
                            className="h-10 w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - NODDO */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-2 items-center">
                  {/* Left Section - Text Content */}
                  <div className="p-8 lg:p-12">
                    <div className="space-y-8">
                      {/* Título y subtítulo arriba */}
                      <div className="space-y-2 -mt-4">
                        <h3 className="text-4xl font-medium font-stack-sans-notch" style={{ color: '#AF89FF' }}>NODDO</h3>
                        <p className="text-lg font-geist" style={{ color: '#686868' }}>TROFEO</p>
                      </div>
                      
                      {/* Texto explicativo y logo del cliente abajo */}
                      <div className="space-y-4 pt-32">
                        <p className="text-base text-slate-600 font-geist leading-relaxed">
                          Desarrollamos nuestro propio trofeo, reflejando nuestros valores de innovación, diseño y calidad. Una pieza conceptual que demuestra el nivel de detalle y excelencia que ofrecemos a nuestros clientes.
                        </p>
                        <div className="pt-4 mt-12">
                          <Image
                            src="/Logo PNG - texto negro.png"
                            alt="Noddo Logo"
                            width={145}
                            height={48}
                            className="h-10 w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Image */}
                  <div className="relative h-96 lg:h-[500px] overflow-hidden" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
                    <Image
                      src="/Nodo-trofeo.jpg"
                      alt="Trofeo Nodo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              </div>
            </ScrollReveal>

            {/* Additional Cards */}
            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] mt-8 lg:mt-12">
              <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 flex flex-col">
                <div className="space-y-6">
                  <h3 className="text-4xl font-medium font-stack-sans-notch" style={{ color: '#04001B' }}>
                    Productos Estándar
                  </h3>
                  <p className="text-lg font-geist uppercase" style={{ color: '#686868' }}>
                    Premios y reconocimientos
                  </p>
                  <p className="text-base text-slate-600 font-geist leading-relaxed">
                    Estamos en proceso de lanzamiento de nuevos productos personalizables a las necesidades de tu evento.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-4xl font-medium font-stack-sans-notch" style={{ color: '#04001B' }}>
                    Y más...
                  </h3>
                  <p className="text-lg font-geist uppercase" style={{ color: '#686868' }}>
                    Nos adaptamos
                  </p>
                  <p className="text-base text-slate-600 font-geist leading-relaxed">
                    Si tenés una idea que querés concretar, ¡no dudes en consultarnos!
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/#contact">
                    <Button
                      style={{ backgroundColor: '#04001B', color: '#FFFFFF' }}
                      className="font-geist px-6"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#AF89FF'
                        e.currentTarget.style.color = '#04001B'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#04001B'
                        e.currentTarget.style.color = '#FFFFFF'
                      }}
                    >
                      Contactanos
                    </Button>
                  </Link>
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
                        <Check className="h-4 w-4" style={{ color: '#AF89FF' }} />
                        <span className="text-sm font-geist font-medium" style={{ color: '#AF89FF' }}>
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
