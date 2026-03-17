'use client'

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Twitter, Linkedin, Github, Mail, Trophy, Copyright, Wrench, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useState, useEffect } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function LandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        // Navbar está en top-4 (16px desde arriba), así que su posición es scrollY + 16
        const navbarPosition = window.scrollY + 16
        // Cambia cuando la navbar atraviesa el borde inferior de la hero section
        setIsScrolledPastHero(navbarPosition >= heroBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg font-geist relative" style={{ border: '1px solid rgba(175, 137, 255, 0.13)' }}>
        <div className="container flex h-[52px] items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image 
              src="/Logo PNG - texto negro.png" 
              alt="NODO AWARDS" 
              width={130} 
              height={28} 
              className="h-7 w-auto transition-opacity duration-300" 
            />
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
              href="#contact" 
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
                href="#contact"
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
      <section
        id="hero-section"
        className="relative bg-white overflow-hidden flex items-center -mt-16"
        style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', minHeight: '90vh' }}
      >
        {/* Background Image - Behind everything */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Noddo - Hero image.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 10%' }}
          />
        </div>

        <div className="relative z-10 w-full flex items-center justify-start">
          <div className="w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full pt-8">
            <div className="flex-1 min-w-0 text-left space-y-6">
            {/* Overlay Badge */}
            <div className="flex justify-start mb-6">
              <div 
                className="hidden inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-geist border backdrop-blur-md shadow-lg"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <Image
                  src="/vector-badge.svg"
                  alt="Badge"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(1200%) hue-rotate(220deg) brightness(102%) contrast(95%)' }}
                />
                <span className="text-sm font-light" style={{ color: '#E7E3FE' }}>
                  Trofeos, medallas y premios
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-normal tracking-tight sm:text-5xl md:text-6xl lg:text-[72px] font-stack-sans-notch">
                <span style={{ color: '#04001B', fontWeight: 400 }}>El </span>
                <span style={{ color: '#AF89FF', fontWeight: 500 }}>valor </span>
                <span style={{ color: '#04001B', fontWeight: 400 }}>del</span>
                <br />
                <span style={{ color: '#04001B', fontWeight: 400 }}>reconocimiento</span>
              </h1>
              <p className="text-base md:text-lg max-w-[560px] font-geist" style={{ color: '#04001B' }}>
                Tu organización necesita un sistema de reconocimientos, físicos y/o digitales, que ponga en valor el trabajo de sus miembros y refuerce el posicionamiento de tu marca.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <div className="flex flex-col items-start gap-3">
<Button
                  size="lg"
                  className="font-geist w-full sm:w-auto"
                  style={{ backgroundColor: '#AF89FF', color: '#FFFFFF', minWidth: '200px' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9B7BED'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#AF89FF'}
                >
                  <span className="flex items-center gap-2 justify-center">
                    Solicitar propuesta gratuita
                    <Image
                      src="/vector-flecha.svg"
                      alt="Flecha"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                      style={{ filter: 'brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(1200%) hue-rotate(220deg) brightness(102%) contrast(95%)' }}
                    />
                  </span>
                </Button>
                <div className="hidden flex items-center gap-2">
                  <Image
                    src="/vector-gratis.svg"
                    alt="Gratis"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                    style={{ filter: 'brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(1200%) hue-rotate(220deg) brightness(102%) contrast(95%)' }}
                  />
                  <p className="text-sm font-geist" style={{ color: '#E7E3FE' }}>
                    Es totalmente gratis, sin cargo.
                  </p>
                </div>
              </div>
              <Link href="https://calendar.app.google/oQm6gqMmpRb3dyf57" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="font-geist w-full sm:w-auto"
                  style={{ backgroundColor: '#E7E3FE', color: '#04001B', border: 'none', minWidth: '200px' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4cfe8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E7E3FE'}
                >
                  <span className="flex items-center gap-2 justify-center">
                    <Image
                      src="/vector-user.svg"
                      alt="Usuario"
                      width={25}
                      height={25}
                      className="h-6 w-6"
                      style={{ opacity: 1 }}
                    />
                    Agendar una reunión
                  </span>
                </Button>
              </Link>
            </div>
            </div>

            {/* Placeholder imagen hero - rectángulo, 30px redondeo, altura = contenido izquierda, borde derecho alineado al navbar */}
            <div className="hidden lg:flex flex-1 justify-end self-stretch min-w-0">
              <div
                className="relative h-full aspect-[4/3] rounded-[30px] bg-neutral-300/80 overflow-hidden"
                aria-hidden
              >
                <Image
                  src="/render-hero.jpg"
                  alt="Hero Noddo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Logo Section */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <ScrollReveal>
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
            {/* Optional Title */}
            <div className="text-center mb-12">
              <p className="text-sm font-geist uppercase tracking-wider" style={{ color: '#686868' }}>
                Confían en nosotros
              </p>
            </div>
            
            {/* Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {/* Client Logos */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/Logos clientes web-01.jpg"
                  alt="Betano"
                  width={240}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/Logos clientes web-02.jpg"
                  alt="PICADOTV"
                  width={240}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/Logos clientes web-03.jpg"
                  alt="AFA"
                  width={240}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/Logos clientes web-04.jpg"
                  alt="Cueva"
                  width={240}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/Logos clientes web-05.jpg"
                  alt="MITO ESTUDIO"
                  width={240}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Mission Statement */}
      <section className="pt-32 pb-16" style={{ backgroundColor: '#FAFAFA' }}>
        <ScrollReveal>
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-geist leading-relaxed" style={{ color: '#04001B' }}>
              Ayudamos a empresas a <span style={{ color: '#AF89FF' }}>transformar</span> la manera en que <span style={{ color: '#AF89FF' }}>reconocen el valor</span> de su gente, sus aliados y quienes impulsan su crecimiento.
            </p>
            
            {/* Tags Section */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="px-4 py-1 border border-gray-300 rounded-full">
                <span className="text-xs font-geist text-gray-600 uppercase">Clientes</span>
              </div>
              <div className="px-4 py-1 border border-gray-300 rounded-full">
                <span className="text-xs font-geist text-gray-600 uppercase">Equipo</span>
              </div>
              <div className="px-4 py-1 border border-gray-300 rounded-full">
                <span className="text-xs font-geist text-gray-600 uppercase">Partners</span>
              </div>
              <div className="px-4 py-1 border border-gray-300 rounded-full">
                <span className="text-xs font-geist text-gray-600 uppercase">Stakeholders</span>
              </div>
              <div className="px-4 py-1 border border-gray-300 rounded-full">
                <span className="text-xs font-geist text-gray-600 uppercase">Inversores</span>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>


      {/* Betano Trophy Section */}
      <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
        <ScrollReveal>
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-start">
               {/* Left Column - Full Trophy Image */}
               <div className="lg:col-span-1 space-y-8">
                 <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-[64px]">
                   <Image
                     src="/trofeo.betano.portada.jpg"
                     alt="Trofeo Crack Betano - Vista completa"
                     fill
                     className="object-cover"
                     priority
                   />
                 </div>
                 {/* Text below image */}
                 <div
                   className="relative h-40 lg:h-[360px] rounded-[64px] flex items-center justify-center text-center px-10"
                   style={{ border: '1.2px solid rgba(4, 0, 27, 0.2)' }}
                 >
                   <p className="text-lg font-geist leading-relaxed max-w-xs mx-auto" style={{ color: '#04001B' }}>
                     Cada proyecto es pensado de forma integral: concepto, presupuesto, calidad percibida y tiempos de entrega. Trabajamos día a día para superar las expectativas en cada entrega y mejorar constantemente nuestros procesos.
                   </p>
                 </div>
               </div>

              {/* Right Column - Text and Close-up Image */}
              <div className="lg:col-span-1 space-y-8">
                {/* Text Content */}
                <div className="flex justify-center h-80 lg:h-[420px]">
                  <div
                    className="w-full h-full rounded-[64px] flex items-center justify-center text-center px-10"
                    style={{ border: '1.2px solid rgba(4, 0, 27, 0.2)' }}
                  >
                    <p className="text-lg font-geist leading-relaxed max-w-xs mx-auto" style={{ color: '#04001B' }}>
                      Creamos un trofeo exclusivo para Betano, una de las empresas líderes en entretenimiento deportivo. El Trofeo "<span className="font-semibold">Crack Betano</span>", destinado a distinguir al mejor jugador de cada fecha del Torneo Clausura Betano 2025, fue diseñado, ajustado y fabricado íntegramente por nuestro equipo.
                    </p>
                  </div>
                </div>

                {/* Close-up Image */}
                <div className="relative h-80 lg:h-[720px] overflow-hidden rounded-[64px] -mt-10">
                  <Image
                    src="/render-detalle-betano.jpg"
                    alt="Trofeo Crack Betano - Detalle"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Workflow Section */}
      <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
        <ScrollReveal>
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Image
                src="/Card Overlay Workflow.png"
                alt="Workflow"
                width={80}
                height={40}
                className="mb-12"
              />
              <h2 className="font-medium font-stack-sans-notch mb-8" style={{ color: '#04001B', fontSize: '38.4px' }}>
                Workflow
              </h2>
              
              {/* Workflow Cards */}
              <div className="flex justify-center gap-4" style={{ flexWrap: 'nowrap' }}>
                <Image
                  src="/Tarjeta discovery.png"
                  alt="Discovery"
                  width={300}
                  height={200}
                  className="h-auto"
                  style={{ transform: 'scale(1.10)', transformOrigin: 'center' }}
                />
                <Image
                  src="/Tarjeta Fabricación.png"
                  alt="Fabricación"
                  width={300}
                  height={200}
                  className="h-auto"
                  style={{ transform: 'scale(1.10)', transformOrigin: 'center' }}
                />
                <Image
                  src="/Tarjeta entrega.png"
                  alt="Entrega"
                  width={300}
                  height={200}
                  className="h-auto"
                  style={{ transform: 'scale(1.10)', transformOrigin: 'center' }}
                />
              </div>

              <div className="mt-8 text-center">
                <p className="font-geist text-base" style={{ color: '#848691' }}>
                  Duración aproximada por proyecto | 30-35 días
                </p>
                <p className="font-geist text-[11px] mt-1" style={{ color: '#AF89FF' }}>
                  *La duración del proyecto queda sujeta a la complejidad del mismo
                </p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Testimonial Section */}
      <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
        <ScrollReveal>
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto flex justify-center">
            <div className="relative flex items-start">
              {/* Vertical Bar */}
              <div className="rounded-full mr-12" style={{ backgroundColor: '#F4EEFF', height: '280px', width: '15px', marginLeft: '-10px' }}></div>
              
              {/* Testimonial Content */}
              <div className="flex-1 relative">
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <div className="rounded-full overflow-hidden mr-4" style={{ width: '45px', height: '45px' }}>
                    <Image
                      src="/wizi-img.png"
                      alt="Martin Wizenberg"
                      width={45}
                      height={45}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium font-stack-sans-notch" style={{ color: '#374151' }}>
                      Martin Wizenberg
                    </h3>
                    <p className="text-xs font-geist" style={{ color: '#6B7280' }}>
                      Content Manager en Betano
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative" style={{ marginLeft: '30px' }}>
                  <Image
                    src="/comilla-vector.svg"
                    alt="Comilla"
                    width={24}
                    height={22}
                    className="absolute -left-6"
                    style={{ top: '10px' }}
                  />
                  <blockquote className="text-lg font-geist font-medium leading-relaxed pl-6" style={{ color: '#04001B' }}>
                    La colaboración con Noddo nos permitió crear un<br />
                    trofeo exclusivo que representa nuestra esencia.<br />
                    Supieron captar nuestra visión y transformarla en<br />
                    una pieza que transmite la energía y el espíritu<br />
                    competitivo de nuestra marca, haciendo de cada<br />
                    premiación un momento especial.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Why Choose NodoAwards Section */}
      <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
        <ScrollReveal>
          <div className="container px-4 md:px-6">
            {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium tracking-tight font-stack-sans-notch" style={{ color: '#04001B', fontSize: '36px' }}>
              Por qué elegir Noddo
            </h2>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 - End-to-end */}
                <div className="text-center">
                  <h3 className="text-2xl font-medium font-stack-sans-notch mb-4" style={{ color: '#AF89FF' }}>
                    End-to-end
                  </h3>
                  <p className="text-base font-normal font-geist leading-relaxed" style={{ color: '#04001B' }}>
                    Cada etapa, pensada y<br />
                    ejecutada por nuestro<br />
                    equipo.
                  </p>
                </div>

                {/* Column 2 - Versatilidad */}
                <div className="text-center">
                  <h3 className="text-2xl font-medium font-stack-sans-notch mb-4" style={{ color: '#AF89FF' }}>
                    Versatilidad
                  </h3>
                  <p className="text-base font-normal font-geist leading-relaxed" style={{ color: '#04001B' }}>
                    Damos forma al<br />
                    reconocimiento, sea cual<br />
                    sea su expresión.
                  </p>
                </div>

                {/* Column 3 - Calidad */}
                <div className="text-center">
                  <h3 className="text-2xl font-medium font-stack-sans-notch mb-4" style={{ color: '#AF89FF' }}>
                    Calidad
                  </h3>
                  <p className="text-base font-normal font-geist leading-relaxed" style={{ color: '#04001B' }}>
                    En la idea, en la forma<br />
                    y en el resultado final,<br />
                    se refleja quiénes somos.
                  </p>
                </div>
              </div>

              {/* Vertical Dividers */}
              <div className="hidden md:block absolute left-1/3 top-6 bottom-6 w-0.5" style={{ backgroundColor: '#AF89FF', opacity: 0.25 }}></div>
              <div className="hidden md:block absolute left-2/3 top-6 bottom-6 w-0.5" style={{ backgroundColor: '#AF89FF', opacity: 0.25 }}></div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative" style={{ backgroundColor: '#FAFAFA' }}>
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
                
{!isClient ? (
                  <div className="space-y-6">
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
                        style={{ backgroundColor: '#04001B', color: '#E7E3FE' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#AF89FF'
                          e.currentTarget.style.color = '#04001B'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#04001B'
                          e.currentTarget.style.color = '#E7E3FE'
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
                  </div>
                ) : !isSubmitted ? (
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
                        style={{ backgroundColor: '#04001B', color: '#E7E3FE' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#AF89FF'
                          e.currentTarget.style.color = '#04001B'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#04001B'
                          e.currentTarget.style.color = '#E7E3FE'
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
            <div className="space-y-4 pl-8 lg:pl-12">
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
                  <Link href="#contact" className="hover:text-slate-300 transition-colors">
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
