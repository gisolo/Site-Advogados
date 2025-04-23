import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SpecialtiesSection from "@/components/specialties-section"
import ServicesSection from "@/components/services-section"
import DifferentialsSection from "@/components/differentials-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import ContactForm from "@/components/contact-form"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <ServicesSection />

      {/* Parallax Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/law-library.jpg" alt="Biblioteca jurídica" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tradição e Inovação a Serviço da Justiça</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Combinamos décadas de experiência jurídica com abordagens inovadoras para oferecer as melhores soluções aos
            nossos clientes.
          </p>
        </div>
      </section>

      <DifferentialsSection />
      <TestimonialsSection />
      <CTASection />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-lg text-gray-600 mb-8">
                Estamos prontos para atender suas necessidades jurídicas com excelência e dedicação. Preencha o
                formulário ao lado ou utilize um de nossos canais de atendimento.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-gold/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Endereço</h3>
                    <p className="text-gray-600">
                      
                      <br />
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-gold/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefone</h3>
                    <p className="text-gray-600">(84) 99935-8681</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-gold/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-gray-600">contato@mellocosta.com.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 9h às 18h
                  <br />
                  Sábados: 9h às 12h (com agendamento prévio)
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
