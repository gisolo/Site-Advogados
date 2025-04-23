"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Scale, Home, FileText } from "lucide-react"
import Link from "next/link"

const SpecialtiesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const specialties = [
    {
      icon: <Scale className="h-10 w-10 text-primary-gold" />,
      title: "Direito da Família e Sucessões",
      description: "Divórcio, guarda, pensão, inventário, partilhas e proteção patrimonial.",
      link: "#familia",
    },
    {
      icon: <Home className="h-10 w-10 text-primary-gold" />,
      title: "Direito Imobiliário",
      description: "Regularização de imóveis, usucapião, ações possessórias e assessoria para condomínios.",
      link: "/areas/imobiliario",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary-gold" />,
      title: "Direito Tributário",
      description: "Defesa contra cobranças indevidas, planejamento fiscal e recuperação de créditos.",
      link: "#tributario",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
      },
    }),
  }

  return (
    <section id="areas" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            Áreas de Atuação Estratégica
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-gold mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: inView ? 1 : 0, width: inView ? 80 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oferecemos soluções jurídicas especializadas nas seguintes áreas do direito:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow service-card"
            >
              <div className="mb-6">{specialty.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{specialty.title}</h3>
              <p className="text-gray-600 mb-6">{specialty.description}</p>
              <Link href={specialty.link} className="text-primary-gold font-medium hover:underline">
                Saiba mais →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary-gold hover:bg-primary-gold/90 text-white rounded-full">
            Ver todos os serviços
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialtiesSection
