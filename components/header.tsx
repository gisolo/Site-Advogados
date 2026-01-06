"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Logo from "./logo"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const whatsappLink =
    "https://wa.me/5584999358681?text=Ol%C3%A1!%20Seja%20bem-vindo(a)!%0ASou%20especialista%20em%20Direito%20Tribut%C3%A1rio%2C%20Direito%20Imobili%C3%A1rio%20e%20Direito%20da%20Fam%C3%ADlia%20e%20Sucess%C3%B5es%20e%20estou%20aqui%20para%20ajudar%20voc%C3%AA%20ou%20sua%20empresa%20com%20solu%C3%A7%C3%B5es%20jur%C3%ADdicas%20seguras%20e%20personalizadas.%0A%0A%F0%9F%94%8E%20Para%20que%20eu%20possa%20te%20atender%20melhor%2C%20me%20diga%20por%20gentileza%3A%0A1%EF%B8%8F%E2%83%A3%20Qual%20%C3%A9%20a%20sua%20d%C3%BAvida%20ou%20situa%C3%A7%C3%A3o%3F%0A2%EF%B8%8F%E2%83%A3%20Voc%C3%AA%20%C3%A9%20pessoa%20f%C3%ADsica%20ou%20jur%C3%ADdica%3F%0A3%EF%B8%8F%E2%83%A3%20Deseja%20atendimento%20por%20WhatsApp%2C%20e-mail%20ou%20liga%C3%A7%C3%A3o%3F%0A%0AAssim%20que%20poss%C3%ADvel%2C%20retornarei%20com%20aten%C3%A7%C3%A3o%20total%20ao%20seu%20caso.%0AFique%20%C3%A0%20vontade%20para%20enviar%20sua%20mensagem!%20%F0%9F%92%AC"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-8 flex items-center">
              <Logo variant={isScrolled ? "dark" : "light"} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
              }`}
            >
              Início
            </Link>
            <Link
              href="#quem-somos"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
              }`}
            >
              Quem Somos
            </Link>
            <Link
              href="#areas"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
              }`}
            >
              Áreas de Atuação
            </Link>
            <Link
              href="#servicos"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
              }`}
            >
              Serviços
            </Link>
            <Link
              href="#contato"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
              }`}
            >
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant={isScrolled ? "outline" : "secondary"} size="sm" className="rounded-full">
                <Phone className="h-4 w-4 mr-2" />
                (84) 99935-8681
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant={isScrolled ? "default" : "secondary"} size="sm" className="rounded-full">
                Agendar Consulta
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="#quem-somos"
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="#areas"
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Áreas de Atuação
              </Link>
              <Link
                href="#servicos"
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#contato"
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-primary-gold" : "text-white hover:text-gray-200"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant={isScrolled ? "outline" : "secondary"} size="sm" className="rounded-full w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  (84) 99935-8681
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant={isScrolled ? "default" : "secondary"} size="sm" className="rounded-full w-full">
                  Agendar Consulta
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
