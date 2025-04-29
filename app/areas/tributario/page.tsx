import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Building, FileText, Shield, Scale, Calculator, Landmark, Users } from "lucide-react"

export default function DireitoTributario() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/law-library.jpg" alt="Direito Tributário" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Direito Tributário</h1>
            <p className="text-xl text-white/90 mb-8">
              Soluções jurídicas especializadas para proteger seu patrimônio e otimizar a carga tributária da sua
              empresa com segurança e conformidade legal.
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
              <h2 className="text-3xl font-bold mb-6">Expertise em Direito Tributário</h2>
              <p className="text-lg text-gray-700 mb-6">
                O Mello Costa Advogados possui uma equipe especializada em Direito Tributário, oferecendo soluções
                jurídicas personalizadas para proteger seu patrimônio e otimizar a carga tributária da sua empresa com
                segurança e conformidade legal.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nossa atuação abrange desde o planejamento tributário até a defesa em processos administrativos e
                judiciais, sempre com foco na proteção dos interesses de nossos clientes e na busca por soluções
                eficientes e duradouras.
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
                alt="Advogados especializados em Direito Tributário"
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
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços em Direito Tributário</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços jurídicos para atender todas as necessidades tributárias de
              pessoas físicas e jurídicas.
            </p>
          </div>

          <Tabs defaultValue="planejamento" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="planejamento" className="text-sm md:text-base">
                <Calculator className="h-4 w-4 mr-2 hidden md:inline" />
                Planejamento
              </TabsTrigger>
              <TabsTrigger value="contencioso" className="text-sm md:text-base">
                <Scale className="h-4 w-4 mr-2 hidden md:inline" />
                Contencioso
              </TabsTrigger>
              <TabsTrigger value="consultoria" className="text-sm md:text-base">
                <FileText className="h-4 w-4 mr-2 hidden md:inline" />
                Consultoria
              </TabsTrigger>
              <TabsTrigger value="recuperacao" className="text-sm md:text-base">
                <Landmark className="h-4 w-4 mr-2 hidden md:inline" />
                Recuperação
              </TabsTrigger>
              <TabsTrigger value="compliance" className="text-sm md:text-base">
                <Shield className="h-4 w-4 mr-2 hidden md:inline" />
                Compliance
              </TabsTrigger>
              <TabsTrigger value="empresarial" className="text-sm md:text-base">
                <Building className="h-4 w-4 mr-2 hidden md:inline" />
                Empresarial
              </TabsTrigger>
            </TabsList>

            <TabsContent value="planejamento" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Planejamento Tributário</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Economia tributária com segurança jurídica</h4>
                      <p className="text-gray-700 mb-6">
                        Desenvolvemos estratégias personalizadas para reduzir legalmente a carga tributária da sua
                        empresa, garantindo conformidade com a legislação e evitando riscos fiscais.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Análise da Estrutura Tributária</span>
                            <p className="text-gray-600 mt-1">
                              Avaliação completa do regime tributário atual e identificação de oportunidades de economia
                              fiscal dentro da legalidade.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Reorganização Societária</span>
                            <p className="text-gray-600 mt-1">
                              Estruturação de operações societárias visando a otimização tributária, como fusões,
                              cisões, incorporações e transformações.
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
                            <span className="font-semibold">Escolha do Regime Tributário</span>
                            <p className="text-gray-600 mt-1">
                              Orientação sobre o regime tributário mais vantajoso para sua empresa (Simples Nacional,
                              Lucro Presumido ou Lucro Real).
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Planejamento Tributário Internacional</span>
                            <p className="text-gray-600 mt-1">
                              Estruturação de operações internacionais com foco na otimização tributária, considerando
                              acordos para evitar a dupla tributação.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Aproveitamento de Incentivos Fiscais</span>
                            <p className="text-gray-600 mt-1">
                              Identificação e implementação de estratégias para aproveitar benefícios e incentivos
                              fiscais disponíveis para o seu setor de atuação.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20planejamento%20tribut%C3%A1rio."
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
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Contencioso Tributário</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Defesa eficiente em processos tributários</h4>
                      <p className="text-gray-700 mb-6">
                        Representação jurídica especializada em processos administrativos e judiciais tributários, com
                        estratégias personalizadas para cada caso.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Defesa em Autuações Fiscais</span>
                            <p className="text-gray-600 mt-1">
                              Representação em processos administrativos fiscais, com elaboração de defesas e recursos
                              contra autos de infração.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Ações Judiciais Tributárias</span>
                            <p className="text-gray-600 mt-1">
                              Ajuizamento de ações para questionar a legalidade de tributos, obter restituição de
                              valores pagos indevidamente e garantir direitos do contribuinte.
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
                            <span className="font-semibold">Defesa em Execuções Fiscais</span>
                            <p className="text-gray-600 mt-1">
                              Representação em processos de execução fiscal, com apresentação de embargos, exceções de
                              pré-executividade e outras medidas de defesa.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Recursos aos Tribunais Superiores</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração e acompanhamento de recursos especiais e extraordinários em matéria tributária
                              junto ao STJ e STF.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20um%20processo%20tribut%C3%A1rio."
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

            <TabsContent value="consultoria" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Consultoria Tributária</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Orientação especializada para decisões seguras</h4>
                      <p className="text-gray-700 mb-6">
                        Consultoria tributária preventiva e estratégica para auxiliar na tomada de decisões empresariais
                        com segurança jurídica.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Pareceres Tributários</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração de pareceres jurídicos sobre questões tributárias específicas, com análise
                              aprofundada da legislação e jurisprudência.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Due Diligence Tributária</span>
                            <p className="text-gray-600 mt-1">
                              Análise de riscos e contingências tributárias em operações de fusões e aquisições, com
                              identificação de passivos fiscais.
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
                            <span className="font-semibold">Consultoria em Operações Específicas</span>
                            <p className="text-gray-600 mt-1">
                              Orientação tributária para operações específicas, como importação, exportação,
                              transferência de bens e direitos, entre outras.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Análise de Impactos Tributários</span>
                            <p className="text-gray-600 mt-1">
                              Avaliação dos impactos tributários de novas legislações e decisões judiciais no seu
                              negócio, com recomendações de ajustes.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20uma%20consultoria%20tribut%C3%A1ria."
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

            <TabsContent value="recuperacao" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Recuperação de Créditos Tributários</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Recupere valores pagos indevidamente</h4>
                      <p className="text-gray-700 mb-6">
                        Identificação e recuperação de créditos tributários pagos indevidamente ou a maior, com
                        estratégias personalizadas para cada caso.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Restituição de Tributos Federais</span>
                            <p className="text-gray-600 mt-1">
                              Recuperação de valores pagos indevidamente a título de PIS, COFINS, IRPJ, CSLL e outros
                              tributos federais.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Exclusão de Tributos da Base de Cálculo</span>
                            <p className="text-gray-600 mt-1">
                              Ações para exclusão de tributos da base de cálculo de outros tributos, como ICMS da base
                              do PIS/COFINS.
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
                            <span className="font-semibold">Compensação de Tributos</span>
                            <p className="text-gray-600 mt-1">
                              Orientação e acompanhamento de procedimentos de compensação tributária, com elaboração de
                              PER/DCOMP e defesa em processos de não homologação.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Aproveitamento de Créditos Acumulados</span>
                            <p className="text-gray-600 mt-1">
                              Estratégias para aproveitamento de créditos acumulados de ICMS, IPI e outros tributos não
                              cumulativos.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20recuperar%20cr%C3%A9ditos%20tribut%C3%A1rios."
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

            <TabsContent value="compliance" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Compliance Tributário</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Conformidade fiscal com segurança</h4>
                      <p className="text-gray-700 mb-6">
                        Implementação de práticas e procedimentos para garantir a conformidade com a legislação
                        tributária, reduzindo riscos fiscais.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Diagnóstico de Riscos Fiscais</span>
                            <p className="text-gray-600 mt-1">
                              Identificação e avaliação de riscos fiscais na operação da empresa, com recomendações para
                              mitigação.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Implementação de Políticas Fiscais</span>
                            <p className="text-gray-600 mt-1">
                              Desenvolvimento e implementação de políticas e procedimentos fiscais alinhados à
                              legislação e às melhores práticas.
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
                            <span className="font-semibold">Treinamento em Compliance Fiscal</span>
                            <p className="text-gray-600 mt-1">
                              Capacitação de equipes sobre obrigações fiscais, procedimentos de compliance e melhores
                              práticas tributárias.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Auditoria Tributária Preventiva</span>
                            <p className="text-gray-600 mt-1">
                              Revisão periódica de procedimentos fiscais, apurações de tributos e obrigações acessórias
                              para identificar e corrigir inconsistências.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20implementar%20compliance%20tribut%C3%A1rio."
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
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Tributário Empresarial</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Soluções tributárias para empresas</h4>
                      <p className="text-gray-700 mb-6">
                        Assessoria tributária completa para empresas, com foco na redução de custos fiscais e na
                        segurança jurídica das operações.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Estruturação Tributária de Negócios</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria na estruturação tributária de novos negócios e operações, com foco na
                              eficiência fiscal.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Tributação de Operações Societárias</span>
                            <p className="text-gray-600 mt-1">
                              Orientação sobre aspectos tributários em operações societárias, como fusões, aquisições,
                              cisões e incorporações.
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
                            <span className="font-semibold">Tributação Internacional</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria em operações internacionais, com análise de tratados para evitar a dupla
                              tributação e planejamento de investimentos estrangeiros.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Tributação de Investimentos</span>
                            <p className="text-gray-600 mt-1">
                              Orientação sobre a tributação de investimentos financeiros, imobiliários e em
                              participações societárias.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Preciso%20de%20assessoria%20tribut%C3%A1ria%20empresarial."
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
              Conheça as vantagens de contar com o Mello Costa Advogados para cuidar das questões tributárias da sua
              empresa.
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
                  Nossa equipe é formada por advogados com ampla experiência e especialização em Direito Tributário,
                  garantindo a excelência técnica em todos os casos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Atendimento Personalizado</h3>
                <p className="text-gray-700">
                  Cada cliente recebe um atendimento exclusivo, com soluções jurídicas personalizadas para suas
                  necessidades específicas e acompanhamento próximo em todas as etapas.
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
                  estratégias preventivas para proteger o patrimônio de nossos clientes.
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
            <h2 className="text-3xl font-bold mb-6">Otimize a tributação da sua empresa</h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato com nossa equipe especializada e descubra como podemos ajudar a reduzir legalmente sua
              carga tributária e garantir a segurança jurídica do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20sobre%20Direito%20Tribut%C3%A1rio."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                  Agendar Consulta
                </Button>
              </a>
              <a
                href="https://wa.me/5584999358681?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20em%20Direito%20Tribut%C3%A1rio."
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
