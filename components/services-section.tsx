"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    "Planejamento tributário completo",
    "Regularização e retificação de imóveis",
    "Defesa contra execução fiscal e autos de infração",
    "Planejamento tributário para empresas",
    "Consultoria para condomínios",
    "Inventário judicial e extrajudicial",
    "Testamento",
    "Planejamento sucessório",
    "Partilha de herança",
    "Regularização de imóveis",
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            Soluções Jurídicas Personalizadas
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
            Atuamos com excelência em consultoria, prevenção de litígios, contencioso estratégico e assessoria completa
            em processos judiciais e extrajudiciais.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-primary-gold" />
              </div>
              <p className="ml-3 text-gray-700">{service}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Consultoria Jurídica Preventiva</h3>
              <p className="text-gray-600">
                Antecipe-se aos problemas com nossa consultoria jurídica preventiva. Identificamos riscos, elaboramos
                contratos seguros e orientamos sobre as melhores práticas legais para proteger seu patrimônio e seus
                direitos.
              </p>
            </div>
            <div className="md:w-1/3 bg-primary-gold/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-primary-gold mb-3">Benefícios</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-gold mr-2 mt-0.5" />
                  <span>Redução de riscos legais</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-gold mr-2 mt-0.5" />
                  <span>Economia de recursos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-gold mr-2 mt-0.5" />
                  <span>Segurança jurídica</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
