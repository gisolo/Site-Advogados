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
              <p className="text-2xl font-bold">Experiência</p>
              <p className="text-sm">e dedicação</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quem Somos</h3>
            <p className="text-lg text-gray-600 mb-6">
              O Mello Costa é um escritório especializado em Direito Imobiliário, Tributário e Sucessões, com atuação em todo o território nacional.Oferecemos um atendimento humano, próximo e alinhado às necessidades de cada cliente.Trabalhamos com ética, transparência e dedicação para transformar desafios jurídicos em soluções seguras e eficazes, sempre com foco na confiança e na excelência..
            </p>
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
