import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Twitter, Linkedin, Github, Mail, Trophy, Copyright, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image src="/images/nodo-logo.png" alt="NODO AWARDS" width={140} height={32} className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium hover:text-slate-900 transition-colors">
              Servicios
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-slate-900 transition-colors">
              Productos
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-slate-900 transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-slate-900 hover:bg-slate-800">Solicitá tu diseño</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="StreamLine Dashboard Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto bg-white/10 text-white border-white/20">
                ⭐ Excelencia y calidad
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                El futuro de los
                <span className="text-slate-300"> Trofeos</span>
              </h1>
              <p className="text-xl text-slate-200 max-w-[600px] mx-auto">
                Creamos trofeos que combinan diseño, calidad y propósito.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Solicitá tu diseño SIN CARGO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Servicios
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Todo lo que necesita tu evento
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Estamos presentes desde el concepto hasta la producción de tu idea
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Trofeos y premios</CardTitle>
                <CardDescription>
                  Diseñamos y creamos reconocimientos únicos que fusionan excelencia, innovación y estética.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                  <Copyright className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Branding</CardTitle>
                <CardDescription>
                  Cada trofeo refleja tu identidad: adaptamos el diseño a los valores y la esencia de tu marca.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Producción</CardTitle>
                <CardDescription>
                  Combinamos tecnología y artesanía para lograr acabados impecables y detalles que marcan la diferencia.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Productos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Proyectos destacados</h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">Descubrí nuestro portfolio de proyectos.</p>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {/* Product 1 - Image Left, Text Right on Desktop */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Mobile: Title, Subtitle, Image (Vertical) */}
              <div className="lg:hidden space-y-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Trofeo *Marca*</h3>
                  <p className="text-base sm:text-lg text-slate-600">
                    Diseñamos y creamos reconocimientos únicos que fusionan excelencia, innovación y estética.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Trofeo Marca"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>

              {/* Desktop: Image Left, Text Right */}
              <div className="relative hidden lg:block">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Trofeo Marca"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6 hidden lg:block">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight">Trofeo *Marca*</h3>
                  <p className="text-lg text-slate-600">
                    Diseñamos y creamos reconocimientos únicos que fusionan excelencia, innovación y estética.
                  </p>
                </div>
              </div>
            </div>

            {/* Product 2 - Text Left, Image Right on Desktop */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Mobile: Title, Subtitle, Image (Vertical) */}
              <div className="lg:hidden space-y-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Medalla *marca*</h3>
                  <p className="text-base sm:text-lg text-slate-600">
                    Cada trofeo refleja tu identidad: adaptamos el diseño a los valores y la esencia de tu marca.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Medalla Marca"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>

              {/* Desktop: Text Left, Image Right */}
              <div className="space-y-6 lg:order-1 hidden lg:block">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight">Medalla *marca*</h3>
                  <p className="text-lg text-slate-600">
                    Cada trofeo refleja tu identidad: adaptamos el diseño a los valores y la esencia de tu marca.
                  </p>
                </div>
              </div>
              <div className="relative lg:order-2 hidden lg:block">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Medalla Marca"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Product 3 - Image Left, Text Right on Desktop */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Mobile: Title, Subtitle, Image (Vertical) */}
              <div className="lg:hidden space-y-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Trofeo Nodo</h3>
                  <p className="text-base sm:text-lg text-slate-600">
                    Combinamos tecnología y artesanía para lograr acabados impecables y detalles que marcan la
                    diferencia.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Trofeo Nodo"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>

              {/* Desktop: Image Left, Text Right */}
              <div className="relative hidden lg:block">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Trofeo Nodo"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6 hidden lg:block">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight">Trofeo Nodo</h3>
                  <p className="text-lg text-slate-600">
                    Combinamos tecnología y artesanía para lograr acabados impecables y detalles que marcan la
                    diferencia.
                  </p>
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
              <form className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1"></label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-slate-700 mb-1"></label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="solicitud" className="block text-sm font-medium text-slate-700 mb-1"></label>
                  <textarea
                    id="solicitud"
                    name="solicitud"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>
              </form>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                Solicitá tu diseño
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
