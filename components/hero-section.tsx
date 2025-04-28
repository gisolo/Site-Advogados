"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const whatsappLink =
    "https://wa.me/5584999358681?text=Ol%C3%A1!%20Seja%20bem-vindo(a)!%0ASou%20especialista%20em%20Direito%20Tribut%C3%A1rio%2C%20Direito%20Imobili%C3%A1rio%20e%20Direito%20da%20Fam%C3%ADlia%20e%20Sucess%C3%B5es%20e%20estou%20aqui%20para%20ajudar%20voc%C3%AA%20ou%20sua%20empresa%20com%20solu%C3%A7%C3%B5es%20jur%C3%ADdicas%20seguras%20e%20personalizadas.%0A%0A%F0%9F%94%8E%20Para%20que%20eu%20possa%20te%20atender%20melhor%2C%20me%20diga%20por%20gentileza%3A%0A1%EF%B8%8F%E2%83%A3%20Qual%20%C3%A9%20a%20sua%20d%C3%BAvida%20ou%20situa%C3%A7%C3%A3o%3F%0A2%EF%B8%8F%E2%83%A3%20Voc%C3%AA%20%C3%A9%20pessoa%20f%C3%ADsica%20ou%20jur%C3%ADdica%3F%0A3%EF%B8%8F%E2%83%A3%20Deseja%20atendimento%20por%20WhatsApp%2C%20e-mail%20ou%20liga%C3%A7%C3%A3o%3F%0A%0AAssim%20que%20poss%C3%ADvel%2C%20retornarei%20com%20aten%C3%A7%C3%A3o%20total%20ao%20seu%20caso.%0AFique%20%C3%A0%20vontade%20para%20enviar%20sua%20mensagem!%20%F0%9F%92%AC"

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.jpg" alt="Mello Costa Advogados" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Excelência Jurídica com Propósito
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Excelência Jurídica com Propósito - Com ampla experiência e uma abordagem personalizada, estamos
              preparados para defender seus interesses com competência, dedicação e resultados, em todo o território
              nacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary-gold hover:bg-primary-gold/90 text-white rounded-full">
                  Solicitar Atendimento
                </Button>
              </a>
              <Link href="#areas">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 rounded-full bg-primary-gold/30"
                >
                  Conheça Nossas Áreas
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/andrermlm%40gmail.com_edit_your_own_4125701480_6ae53f15849546be9ee27c0f536f0bd0-waUp8oWrB4foiJiPTBxS8fyM6cFKBU.png"
                alt="Equipe Mello Costa Advogados"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-16 bg-primary-gold mx-auto"></div>
      </div>
    </section>
  )
}

export default HeroSection
