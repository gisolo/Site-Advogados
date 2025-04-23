"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "O atendimento do escritório Mello Costa foi excepcional. Resolveram meu caso de divórcio com agilidade e empatia, sempre me mantendo informada sobre cada etapa do processo.",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "João Oliveira",
      location: "Rio de Janeiro, RJ",
      text: "Excelentes profissionais! Conseguiram resolver minha questão imobiliária que já se arrastava por anos. Recomendo a todos que precisam de advogados competentes e dedicados.",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Ana Pereira",
      location: "Belo Horizonte, MG",
      text: "Graças ao Mello Costa, consegui minha aposentadoria após ter sido negada duas vezes pelo INSS. Atendimento humanizado e profissionais que realmente se importam com seus clientes.",
      image: "/images/testimonial-3.jpg",
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            O que dizem nossos clientes
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-gold mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: inView ? 1 : 0, width: inView ? 80 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-lg p-8 testimonial-card">
                      <div className="flex items-center mb-6">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Próximo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full mx-1 ${index === activeIndex ? "bg-primary-gold" : "bg-gray-300"}`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
