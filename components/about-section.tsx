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
              Com sólida trajetória na prestação de serviços jurídicos em todo o Brasil, Raíssa Mello Costa atua com
              destaque nas áreas de Direito Imobiliário, Tributário e Sucessões.Seu trabalho é fundamentado em
              princípios éticos, transparência e compromisso com soluções eficazes. Preza por um atendimento próximo e
              personalizado, sempre com o objetivo de oferecer a melhor solução para as necessidades específicas de cada
              cliente. Considera que a prática jurídica deve ser clara e objetiva. Por isso, adota uma atuação
              estratégica, focada em eficiência, resultados concretos e análise individualizada de cada caso. Atua na
              regularização de imóveis, planejamento sucessório, inventários, defesas em execuções fiscais, além de
              consultorias e ações voltadas à redução da carga tributária, conduzindo cada demanda com precisão técnica
              e responsabilidade profissional.
            </p>
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
