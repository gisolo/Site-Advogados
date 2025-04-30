import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, FileText, Shield, Scale, Users, BookOpen, Landmark, Heart } from "lucide-react"

export default function DireitoSucessorio() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/law-library.jpg"
            alt="Direito da Família e Sucessões"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Direito da Família e Sucessões
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Soluções jurídicas especializadas para proteger seu patrimônio familiar e garantir a tranquilidade na
              transmissão de seus bens.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Seja%20bem-vindo(a)!%0ASou%20especialista%20em%20Direito%20Tribut%C3%A1rio%2C%20Direito%20Imobili%C3%A1rio%20e%20Direito%20da%20Fam%C3%ADlia%20e%20Sucess%C3%B5es%20e%20estou%20aqui%20para%20ajudar%20voc%C3%AA%20ou%20sua%20empresa%20com%20solu%C3%A7%C3%B5es%20jur%C3%ADdicas%20seguras%20e%20personalizadas.%0A%0A%F0%9F%94%8E%20Para%20que%20eu%20possa%20te%20atender%20melhor%2C%20me%20diga%20por%20gentileza%3A%0A1%EF%B8%8F%E2%83%A3%20Qual%20%C3%A9%20a%20sua%20d%C3%BAvida%20ou%20situa%C3%A7%C3%A3o%3F%0A2%EF%B8%8F%E2%83%A3%20Voc%C3%AA%20%C3%A9%20pessoa%20f%C3%ADsica%20ou%20jur%C3%ADdica%3F%0A3%EF%B8%8F%E2%83%A3%20Deseja%20atendimento%20por%20WhatsApp%2C%20e-mail%20ou%20liga%C3%A7%C3%A3o%3F%0A%0AAssim%20que%20poss%C3%ADvel%2C%20retornarei%20com%20aten%C3%A7%C3%A3o%20total%20ao%20seu%20caso.%0AFique%20%C3%A0%20vontade%20para%20enviar%20sua%20mensagem!%20%F0%9F%92%AC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">Agendar Consulta</Button>
              </a>
              <a
                href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Seja%20bem-vindo(a)!%0ASou%20especialista%20em%20Direito%20Tribut%C3%A1rio%2C%20Direito%20Imobili%C3%A1rio%20e%20Direito%20da%20Fam%C3%ADlia%20e%20Sucess%C3%B5es%20e%20estou%20aqui%20para%20ajudar%20voc%C3%AA%20ou%20sua%20empresa%20com%20solu%C3%A7%C3%B5es%20jur%C3%ADdicas%20seguras%20e%20personalizadas.%0A%0A%F0%9F%94%8E%20Para%20que%20eu%20possa%20te%20atender%20melhor%2C%20me%20diga%20por%20gentileza%3A%0A1%EF%B8%8F%E2%83%A3%20Qual%20%C3%A9%20a%20sua%20d%C3%BAvida%20ou%20situa%C3%A7%C3%A3o%3F%0A2%EF%B8%8F%E2%83%A3%20Voc%C3%AA%20%C3%A9%20pessoa%20f%C3%ADsica%20ou%20jur%C3%ADdica%3F%0A3%EF%B8%8F%E2%83%A3%20Deseja%20atendimento%20por%20WhatsApp%2C%20e-mail%20ou%20liga%C3%A7%C3%A3o%3F%0A%0AAssim%20que%20poss%C3%ADvel%2C%20retornarei%20com%20aten%C3%A7%C3%A3o%20total%20ao%20seu%20caso.%0AFique%20%C3%A0%20vontade%20para%20enviar%20sua%20mensagem!%20%F0%9F%92%AC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
                  Fale com um Especialista
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expertise em Direito da Família e Sucessões</h2>
              <p className="text-lg text-gray-700 mb-6">
                O Mello Costa Advogados possui uma equipe especializada em Direito da Família e Sucessões, oferecendo
                soluções jurídicas personalizadas para proteger seu patrimônio familiar e garantir a tranquilidade na
                transmissão de seus bens.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nossa atuação abrange desde o planejamento sucessório até a condução de inventários e partilhas, sempre
                com foco na proteção dos interesses de nossos clientes e na busca por soluções eficientes e duradouras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-gold" />
                  <span className="font-medium">Atendimento personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-gold" />
                  <span className="font-medium">Equipe especializada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-gold" />
                  <span className="font-medium">Soluções eficientes</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/office.jpg"
                alt="Advogados especializados em Direito da Família e Sucessões"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços em Direito da Família e Sucessões</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços jurídicos para atender todas as necessidades relacionadas ao
              seu patrimônio familiar e sucessório.
            </p>
          </div>

          <Tabs defaultValue="planejamento" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="planejamento" className="text-sm md:text-base">
                <BookOpen className="h-4 w-4 mr-2 hidden md:inline" />
                Planejamento
              </TabsTrigger>
              <TabsTrigger value="testamentos" className="text-sm md:text-base">
                <FileText className="h-4 w-4 mr-2 hidden md:inline" />
                Testamentos
              </TabsTrigger>
              <TabsTrigger value="inventario" className="text-sm md:text-base">
                <Scale className="h-4 w-4 mr-2 hidden md:inline" />
                Inventário
              </TabsTrigger>
              <TabsTrigger value="partilha" className="text-sm md:text-base">
                <Landmark className="h-4 w-4 mr-2 hidden md:inline" />
                Partilha
              </TabsTrigger>
              <TabsTrigger value="contencioso" className="text-sm md:text-base">
                <Shield className="h-4 w-4 mr-2 hidden md:inline" />
                Contencioso
              </TabsTrigger>
              <TabsTrigger value="empresarial" className="text-sm md:text-base">
                <Users className="h-4 w-4 mr-2 hidden md:inline" />
                Empresarial
              </TabsTrigger>
            </TabsList>

            <TabsContent value="planejamento" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Consultoria e Planejamento Sucessório</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Organize a sucessão de seus bens com segurança</h4>
                      <p className="text-gray-700 mb-6">
                        Oferecemos orientação especializada sobre a melhor forma de organizar a sucessão de bens,
                        evitando litígios e garantindo que sua vontade seja respeitada.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Análise Patrimonial Completa</span>
                            <p className="text-gray-600 mt-1">
                              Avaliação detalhada de todos os seus bens e direitos, identificando a melhor estratégia
                              para sua transmissão.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Planejamento Sucessório Personalizado</span>
                            <p className="text-gray-600 mt-1">
                              Desenvolvimento de estratégias personalizadas para a transmissão de bens, considerando
                              aspectos fiscais e patrimoniais.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Orientação sobre Doações em Vida</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria jurídica para realização de doações em vida, com ou sem reserva de usufruto,
                              garantindo segurança jurídica.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Proteção Patrimonial</span>
                            <p className="text-gray-600 mt-1">
                              Estratégias jurídicas para proteção do patrimônio familiar contra riscos diversos,
                              garantindo sua preservação para as futuras gerações.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20planejamento%20sucess%C3%B3rio."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                            Solicitar Consultoria
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testamentos" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Elaboração e Revisão de Testamentos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Garanta que sua vontade seja respeitada</h4>
                      <p className="text-gray-700 mb-6">
                        Assessoria especializada na redação e revisão de testamentos, ajustando as disposições conforme
                        sua vontade e garantindo sua validade jurídica.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Testamento Público</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração de testamento lavrado em cartório, na presença de tabelião e testemunhas,
                              garantindo maior segurança jurídica.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Testamento Particular</span>
                            <p className="text-gray-600 mt-1">
                              Redação de testamento escrito e assinado pelo testador, com orientação para garantir o
                              cumprimento de todos os requisitos legais.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Testamento Cerrado</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração de testamento sigiloso, que mantém o conteúdo em segredo até a abertura da
                              sucessão, com todas as formalidades legais.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Testamento Vital</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração de diretivas antecipadas de vontade para que suas escolhas sejam respeitadas,
                              especialmente em casos de incapacidade.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20elaborar%20ou%20revisar%20um%20testamento."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                            Solicitar Consultoria
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventario" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Inventário Judicial ou Extrajudicial</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Condução eficiente do processo de inventário</h4>
                      <p className="text-gray-700 mb-6">
                        Assessoria completa na abertura e condução de inventário, seja judicial ou extrajudicial,
                        conforme a complexidade do caso e a vontade dos herdeiros.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Inventário Extrajudicial</span>
                            <p className="text-gray-600 mt-1">
                              Condução de inventário por escritura pública em cartório, quando há consenso entre os
                              herdeiros e ausência de testamento ou menores.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Inventário Judicial</span>
                            <p className="text-gray-600 mt-1">
                              Representação completa em processos judiciais de inventário, necessários quando há
                              conflitos entre os herdeiros ou herdeiros menores/incapazes.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Arrolamento Sumário</span>
                            <p className="text-gray-600 mt-1">
                              Condução de procedimento simplificado de inventário quando há acordo entre os herdeiros
                              maiores e capazes.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Regularização de Bens e Dívidas</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria na regularização de bens e dívidas do falecido, garantindo a correta
                              transferência do patrimônio aos herdeiros.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20um%20invent%C3%A1rio."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                            Solicitar Consultoria
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partilha" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Partilha de Bens</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Divisão justa e equilibrada do patrimônio</h4>
                      <p className="text-gray-700 mb-6">
                        Assistência especializada na divisão e partilha de bens do espólio, respeitando as disposições
                        legais e acordos entre os herdeiros.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Partilha Amigável</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração de acordos e termos de partilha amigável entre os herdeiros, buscando soluções
                              consensuais e equilibradas.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Partilha Judicial</span>
                            <p className="text-gray-600 mt-1">
                              Representação em processos de partilha judicial, quando não há consenso entre os herdeiros
                              ou existem questões complexas a serem resolvidas.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Sobrepartilha</span>
                            <p className="text-gray-600 mt-1">
                              Regularização de bens não incluídos no inventário original, garantindo a correta
                              distribuição do patrimônio entre os herdeiros.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Colação de Bens</span>
                            <p className="text-gray-600 mt-1">
                              Orientação e atuação em ações de colação de bens, quando houver doações feitas em vida
                              pelo falecido que devem ser incluídas no inventário.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20partilha%20de%20bens."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                            Solicitar Consultoria
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contencioso" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Contencioso Sucessório</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Defesa eficiente em litígios sucessórios</h4>
                      <p className="text-gray-700 mb-6">
                        Representação especializada em litígios relacionados à sucessão, com estratégias jurídicas
                        eficientes para cada situação.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Ação de Petição de Herança</span>
                            <p className="text-gray-600 mt-1">
                              Representação em ações para requerer a partilha da herança ou para garantir os direitos
                              dos herdeiros que não foram considerados no processo de inventário.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Impugnação de Testamento</span>
                            <p className="text-gray-600 mt-1">
                              Representação em ações para contestar a autenticidade de um testamento, alegando, por
                              exemplo, coação, incapacidade do testador ou falsificação.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Defesa em Ações de Nulidade</span>
                            <p className="text-gray-600 mt-1">
                              Defesa em casos de contestação de testamentos, tanto por invalidade quanto por
                              questionamentos sobre a capacidade do testador.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Ações de Reconhecimento de Paternidade</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria jurídica em casos em que a filiação do falecido seja questionada e precise ser
                              reconhecida para efeitos sucessórios.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20um%20lit%C3%ADgio%20sucess%C3%B3rio."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                            Solicitar Consultoria
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="empresarial" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">
                    Planejamento Sucessório para Empresas Familiares
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Garantindo a continuidade dos negócios familiares</h4>
                      <p className="text-gray-700 mb-6">
                        Consultoria especializada para a sucessão de empresas familiares, com a elaboração de
                        estratégias que permitam a continuidade dos negócios, evitando conflitos entre os herdeiros.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Estruturação Societária</span>
                            <p className="text-gray-600 mt-1">
                              Planejamento da estrutura societária ideal para facilitar a sucessão empresarial, com
                              definição clara de papéis e responsabilidades.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Acordo de Sócios</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração de acordos de sócios com cláusulas específicas para sucessão, garantindo a
                              governança e a continuidade dos negócios.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Holdings Familiares</span>
                            <p className="text-gray-600 mt-1">
                              Estruturação de holdings familiares para centralizar o controle patrimonial e facilitar a
                              sucessão, com vantagens fiscais e de gestão.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Protocolo Familiar</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração de protocolos familiares que estabelecem regras claras para a relação entre
                              família e empresa, prevenindo conflitos futuros.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20planejamento%20sucess%C3%B3rio%20empresarial."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                            Solicitar Consultoria
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça as vantagens de contar com o Mello Costa Advogados para cuidar das questões sucessórias da sua
              família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Scale className="h-8 w-8 text-primary-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise Jurídica</h3>
                <p className="text-gray-700">
                  Nossa equipe é formada por advogados com ampla experiência e especialização em Direito Sucessório,
                  garantindo a excelência técnica em todos os casos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-primary-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Atendimento Humanizado</h3>
                <p className="text-gray-700">
                  Compreendemos que questões sucessórias envolvem aspectos emocionais delicados. Por isso, oferecemos um
                  atendimento humanizado e acolhedor em todos os momentos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-primary-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Segurança Jurídica</h3>
                <p className="text-gray-700">
                  Priorizamos a segurança jurídica em todas as nossas ações, com análise minuciosa de riscos e
                  estratégias preventivas para proteger o patrimônio familiar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Proteja o futuro da sua família</h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato com nossa equipe especializada e descubra como podemos ajudar a garantir a tranquilidade
              na transmissão do seu patrimônio familiar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20sobre%20Direito%20Sucess%C3%B3rio."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                  Agendar Consulta
                </Button>
              </a>
              <a
                href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20em%20Direito%20Sucess%C3%B3rio."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-gold text-primary-gold hover:bg-primary-gold/10 bg-transparent"
                >
                  Fale com um Especialista
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
