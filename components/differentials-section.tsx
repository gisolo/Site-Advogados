"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Users, Globe, Award, Laptop } from "lucide-react"

const DifferentialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const differentials = [
    {
      icon: <Users className="h-12 w-12 text-primary-gold" />,
      title: "Atendimento Humanizado",
      description: "Relacionamento próximo, empatia e linguagem acessível.",
    },
    {
      icon: <Globe className="h-12 w-12 text-primary-gold" />,
      title: "Atuação Nacional",
      description: "Representamos clientes em todas as regiões do Brasil.",
    },
    {
      icon: <Award className="h-12 w-12 text-primary-gold" />,
      title: "Experiência e Resultado",
      description: "Décadas de atuação com histórico comprovado de êxito.",
    },
    {
      icon: <Laptop className="h-12 w-12 text-primary-gold" />,
      title: "Tecnologia e Transparência",
      description: "Acompanhamento do seu caso em tempo real.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            Por que o Mello Costa?
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-gold mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: inView ? 1 : 0, width: inView ? 80 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">{differential.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{differential.title}</h3>
              <p className="text-gray-600">{differential.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DifferentialsSection
