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
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl border border-white/20 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg font-syne">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image src="/images/nodo-logo.png" alt="NODO AWARDS" width={140} height={32} className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/servicios" className="text-sm font-medium hover:text-slate-900 transition-colors font-syne">
              Servicios
            </Link>
            <Link href="/productos" className="text-sm font-medium hover:text-slate-900 transition-colors font-syne">
              Productos
            </Link>
            <Link href="/nosotros" className="text-sm font-medium hover:text-slate-900 transition-colors font-syne">
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
      <section className="relative py-20 md:py-32 bg-white overflow-hidden" style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', minHeight: '90vh' }}>
        {/* Background Image - Behind everything */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-golden-image-nodo.png"
            alt="Hero Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 10%' }}
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10 flex items-center justify-center min-h-full" style={{ transform: 'translateY(25%)' }}>
          <div className="max-w-4xl text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[84px] font-syne" style={{ color: '#4C3B31' }}>
                El futuro de la premiación
              </h1>
              <p className="text-xl max-w-[600px] mx-auto font-syne" style={{ color: '#5F4534' }}>
                Creamos trofeos, medallas y premios
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-syne"
                style={{ backgroundColor: '#413725', color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d2519'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#413725'}
              >
                Solicitar propuesta →
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-syne"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#413725', borderColor: '#413725' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
              >
                Agenda una reunión
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
      <section id="products" className="py-10">
        <div className="container px-4 md:px-6">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <p className="text-sm font-syne mb-4" style={{ fontSize: '15px', color: '#686868' }}>
              Nuestros proyectos
            </p>
            <h2 className="text-4xl font-bold tracking-tight font-syne" style={{ fontSize: '36px' }}>
              <span style={{ color: '#413725' }}>Cómo </span>
              <span className="hero-gradient">elevamos</span>
              <span style={{ color: '#413725' }}> el </span>
              <span className="hero-gradient">estándar</span>
              <span style={{ color: '#413725' }}> de la premiación</span>
            </h2>
          </div>

          {/* Product Cards */}
          <div className="space-y-8">
            {/* Card 1 - CRACK BETANO */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-2 items-stretch">
                {/* Left Section - Text Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-8">
                    {/* Título y subtítulo arriba */}
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold font-syne hero-gradient">"CRACK" BETANO</h3>
                      <p className="text-lg font-syne" style={{ color: '#686868' }}>TROFEO</p>
                    </div>
                    
                    {/* Texto explicativo y logo del cliente abajo */}
                    <div className="space-y-4 pt-32">
                      <p className="text-base text-slate-600 font-syne leading-relaxed">
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
                  <div className="space-y-8">
                    {/* Título y subtítulo arriba */}
                    <div className="space-y-2 -mt-4">
                      <h3 className="text-4xl font-bold font-syne hero-gradient">CUEVA</h3>
                      <p className="text-lg font-syne" style={{ color: '#686868' }}>MEDALLA</p>
                    </div>
                    
                    {/* Texto explicativo y logo del cliente abajo */}
                    <div className="space-y-4 pt-32">
                      <p className="text-base text-slate-600 font-syne leading-relaxed">
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

            {/* Card 3 - NODO */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-2 items-center">
                {/* Left Section - Text Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-8">
                    {/* Título y subtítulo arriba */}
                    <div className="space-y-2 -mt-4">
                      <h3 className="text-4xl font-bold font-syne hero-gradient">NODO</h3>
                      <p className="text-lg font-syne" style={{ color: '#686868' }}>TROFEO</p>
                    </div>
                    
                    {/* Texto explicativo y logo del cliente abajo */}
                    <div className="space-y-4 pt-32">
                      <p className="text-base text-slate-600 font-syne leading-relaxed">
                        Desarrollamos nuestro propio trofeo, reflejando nuestros valores de innovación, diseño y calidad. Una pieza conceptual que demuestra el nivel de detalle y excelencia que ofrecemos a nuestros clientes.
                      </p>
                      <div className="pt-4 mt-12">
                        <Image
                          src="/logo-nodo.png"
                          alt="NODO AWARDS Logo"
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
        </div>
      </section>

      {/* Why Choose NodoAwards Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight font-syne" style={{ fontSize: '36px' }}>
              <span style={{ color: '#413725' }}>Por qué </span>
              <span className="hero-gradient">elegir</span>
              <span style={{ color: '#413725' }}> NodoAwards</span>
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            {/* Card 1 - End-to-end */}
            <div className="relative">
              {/* Background blur shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full blur-xl opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-400 rounded-full blur-lg opacity-50"></div>
              </div>
              
              {/* Card */}
              <div className="border-2 rounded-2xl p-8 text-center relative backdrop-blur-[25px]" style={{ 
                backgroundColor: 'rgba(228, 228, 228, 0.33)',
                borderColor: '#856220',
                borderRadius: '16px'
              }}>
                <h3 className="text-2xl font-bold font-syne mb-4" style={{ color: '#413725' }}>
                  End-to-end
                </h3>
                <p className="text-base font-syne leading-relaxed" style={{ color: '#413725' }}>
                  Desarrollamos un trofeo propio que refleja nuestros valores de inno
                </p>
              </div>
            </div>

            {/* Card 2 - Versatilidad */}
            <div className="relative">
              {/* Background blur shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-6 right-6 w-18 h-18 bg-gradient-to-br from-amber-300 to-yellow-200 rounded-full blur-xl opacity-60"></div>
                <div className="absolute bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full blur-lg opacity-50"></div>
              </div>
              
              {/* Card */}
              <div className="border-2 rounded-2xl p-8 text-center relative backdrop-blur-[25px]" style={{ 
                backgroundColor: 'rgba(228, 228, 228, 0.33)',
                borderColor: '#856220',
                borderRadius: '16px'
              }}>
                <h3 className="text-2xl font-bold font-syne mb-4" style={{ color: '#413725' }}>
                  Versatilidad
                </h3>
                <p className="text-base font-syne leading-relaxed" style={{ color: '#413725' }}>
                  Desarrollamos un trofeo propio que refleja nuestros valores de inno
                </p>
              </div>
            </div>

            {/* Card 3 - Calidad */}
            <div className="relative">
              {/* Background blur shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-4 left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-200 rounded-full blur-xl opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-lg opacity-50"></div>
              </div>
              
              {/* Card */}
              <div className="border-2 rounded-2xl p-8 text-center relative backdrop-blur-[25px]" style={{ 
                backgroundColor: 'rgba(228, 228, 228, 0.33)',
                borderColor: '#856220',
                borderRadius: '16px'
              }}>
                <h3 className="text-2xl font-bold font-syne mb-4" style={{ color: '#413725' }}>
                  Calidad
                </h3>
                <p className="text-base font-syne leading-relaxed" style={{ color: '#413725' }}>
                  Desarrollamos un trofeo propio que refleja nuestros valores de inno
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ backgroundColor: '#f1f1f1' }}>
        <div className="container px-4 md:px-6">
          <div className="grid gap-0 lg:grid-cols-2 items-center min-h-[600px]">
            {/* Left Section - Contact Form */}
            <div className="p-8 lg:p-12">
              <div className="max-w-2xl">
                <h2 className="font-bold font-syne mb-8" style={{ color: '#413725', fontSize: '36px' }}>
                  Contanos sobre tu idea
                </h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium font-syne mb-2" style={{ color: '#413725' }}>
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-syne focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Ej: Juan Perez"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium font-syne mb-2" style={{ color: '#413725' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-syne focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="hola@tuempresa.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium font-syne mb-2" style={{ color: '#413725' }}>
                        Tu empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-syne focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Ej: Mercado Libre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium font-syne mb-2" style={{ color: '#413725' }}>
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-syne focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Contanos sobre tu idea..."
                      />
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="font-syne"
                        style={{ backgroundColor: '#413725', color: '#FFFFFF' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d2519'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#413725'}
                      >
                        Solicitar propuesta
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4" style={{ color: '#856220' }} />
                        <span className="text-sm font-syne" style={{ color: '#856220' }}>
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
                      <h3 className="text-2xl font-bold font-syne" style={{ color: '#413725' }}>¡Gracias por contactarnos!</h3>
                      <p className="font-syne" style={{ color: '#413725' }}>
                        Hemos recibido tu solicitud. Nos pondremos en contacto contigo en las próximas 24 horas.
                      </p>
                    </div>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-4 font-syne"
                      style={{ borderColor: '#413725', color: '#413725' }}
                    >
                      Enviar otra solicitud
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Section - Logo and Hero Text */}
            <div className="p-8 lg:p-12 text-right">
              <div className="max-w-md ml-auto">
                <div className="mb-8">
                  <Image
                    src="/images/nodo-logo.png"
                    alt="NODO AWARDS"
                    width={260}
                    height={62}
                    className="h-16 w-auto ml-auto"
                  />
                </div>
                
                <h1 className="font-bold tracking-tight font-syne" style={{ fontSize: '60px' }}>
                  <span style={{ color: '#413725' }}>El futuro de</span>
                  <br />
                  <span className="hero-gradient">la premiación</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16" style={{ backgroundColor: '#D9B87F' }}>
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <Image
                src="/images/nodo-logo.png"
                alt="NODO AWARDS"
                width={200}
                height={48}
                className="h-12 w-auto"
              />
              <h2 className="font-syne" style={{ fontSize: '20px', color: '#413725' }}>
                El futuro de la premiación
              </h2>
              <div className="flex space-x-4">
                <Link href="#" className="transition-colors" style={{ color: '#413725' }}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link href="#" className="transition-colors" style={{ color: '#413725' }}>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="transition-colors" style={{ color: '#413725' }}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold" style={{ color: '#413725' }}>Navegación</h3>
              <ul className="space-y-2" style={{ color: '#413725' }}>
                <li>
                  <Link href="/servicios" className="hover:text-slate-800 transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-slate-800 transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="hover:text-slate-800 transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-slate-800 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: '#F4D5A0', color: '#F4D5A0' }}>
            <p>&copy; {new Date().getFullYear()} NODO AWARDS. Derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
