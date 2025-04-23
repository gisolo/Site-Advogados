"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { motion } from "framer-motion"

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="quem-somos" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            Tradição, Confiança e Resultado
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-gold mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: inView ? 1 : 0, width: inView ? 80 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/office.jpg" alt="Escritório Mello Costa Advogados" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-gold text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-2xl font-bold">+10</p>
              <p className="text-sm">Anos de experiência</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quem Somos</h3>
            <p className="text-lg text-gray-600 mb-6">
              O Mello Costa é um escritório de advocacia com mais de uma década de atuação destacada em todo o Brasil.
              Com foco em Direito da Família, Sucessões, Direito Imobiliário e Tributário, oferecemos um atendimento
              jurídico ágil, humano e personalizado.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nosso compromisso é entregar resultados concretos por meio de uma atuação ética, transparente e
              estratégica. Acreditamos que o direito deve ser acessível e compreensível para todos os nossos clientes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-primary-gold text-3xl font-bold mb-2">500+</div>
                <p className="text-gray-600">Casos de sucesso</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-primary-gold text-3xl font-bold mb-2">15+</div>
                <p className="text-gray-600">Advogados especialistas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-primary-gold text-3xl font-bold mb-2">98%</div>
                <p className="text-gray-600">Clientes satisfeitos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
