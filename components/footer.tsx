import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Logo from "./logo"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const whatsappLink =
    "https://wa.me/5584999358681?text=Ol%C3%A1!%20Seja%20bem-vindo(a)!%0ASou%20especialista%20em%20Direito%20Tribut%C3%A1rio%2C%20Direito%20Imobili%C3%A1rio%20e%20Direito%20da%20Fam%C3%ADlia%20e%20Sucess%C3%B5es%20e%20estou%20aqui%20para%20ajudar%20voc%C3%AA%20ou%20sua%20empresa%20com%20solu%C3%A7%C3%B5es%20jur%C3%ADdicas%20seguras%20e%20personalizadas.%0A%0A%F0%9F%94%8E%20Para%20que%20eu%20possa%20te%20atender%20melhor%2C%20me%20diga%20por%20gentileza%3A%0A1%EF%B8%8F%E2%83%A3%20Qual%20%C3%A9%20a%20sua%20d%C3%BAvida%20ou%20situa%C3%A7%C3%A3o%3F%0A2%EF%B8%8F%E2%83%A3%20Voc%C3%AA%20%C3%A9%20pessoa%20f%C3%ADsica%20ou%20jur%C3%ADdica%3F%0A3%EF%B8%8F%E2%83%A3%20Deseja%20atendimento%20por%20WhatsApp%2C%20e-mail%20ou%20liga%C3%A7%C3%A3o%3F%0A%0AAssim%20que%20poss%C3%ADvel%2C%20retornarei%20com%20aten%C3%A7%C3%A3o%20total%20ao%20seu%20caso.%0AFique%20%C3%A0%20vontade%20para%20enviar%20sua%20mensagem!%20%F0%9F%92%AC"

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <div className="h-8 flex items-center">
                <Logo variant="dark" />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Mais de 10 anos defendendo direitos com transparência, estratégia e humanidade. Atuação em todo o
              território nacional.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-gold transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-gold transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary-gold transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-gold transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-gold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#quem-somos" className="text-gray-400 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="#areas" className="text-gray-400 hover:text-white transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-gold">Áreas de Atuação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#familia" className="text-gray-400 hover:text-white transition-colors">
                  Direito da Família e Sucessões
                </Link>
              </li>
              <li>
                <Link href="#imobiliario" className="text-gray-400 hover:text-white transition-colors">
                  Direito Imobiliário
                </Link>
              </li>
              <li>
                <Link href="#tributario" className="text-gray-400 hover:text-white transition-colors">
                  Direito Tributário
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-gold">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-gold mr-2 mt-0.5" />
                <span className="text-gray-400">
                  //Endereço
                  <br />
                  Natal - RN,
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-gold mr-2" />
                <span className="text-gray-400">(84) 99935-8681</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-gold mr-2" />
                <span className="text-gray-400">contato@mellocosta.com.br</span>
              </li>
            </ul>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 bg-primary-gold hover:bg-primary-gold/90 text-white">Agendar Consulta</Button>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Mello Costa Advogados. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">OAB/RN 22176 | Responsável: Dra. Raíssa Mello Costa</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
