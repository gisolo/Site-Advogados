"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contato" className="py-20 bg-primary-gold/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para resolver seu problema jurídico com excelência?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um atendimento rápido, acolhedor e estratégico. Estamos aqui para defender
            seus direitos com seriedade.
          </p>
          <Button size="lg" className="bg-primary-gold hover:bg-primary-gold/90 text-white rounded-full">
            Fale com um Especialista
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
