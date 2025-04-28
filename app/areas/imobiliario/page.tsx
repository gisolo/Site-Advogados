import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Building, FileText, Shield, Scale, Home, Landmark, Users } from "lucide-react"

export default function DireitoImobiliario() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.imgur.com/Lknv6x9.png"
            alt="Direito Imobiliário"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Direito Imobiliário</h1>
            <p className="text-xl text-white/90 mb-8">
              Soluções jurídicas completas para proteger seu patrimônio imobiliário e garantir segurança em todas as
              suas transações.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">Agendar Consulta</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
                Fale com um Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expertise em Direito Imobiliário</h2>
              <p className="text-lg text-gray-700 mb-6">
                O Mello Costa Advogados possui uma equipe especializada em Direito Imobiliário, oferecendo soluções
                jurídicas personalizadas para proteger seu patrimônio e garantir a segurança jurídica em todas as suas
                transações imobiliárias.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nossa atuação abrange desde a regularização de imóveis até a resolução de conflitos possessórios, sempre
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20Colorful%20UI%20Health%20and%20Wellness%20Bio-Link%20Website%20%281%29-sOk0jbWCsUL77Owwtp1JesLm6hOkOc.png"
                alt="Advogados especializados em Direito Imobiliário"
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
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços em Direito Imobiliário</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços jurídicos para atender todas as necessidades relacionadas ao
              seu patrimônio imobiliário.
            </p>
          </div>

          <Tabs defaultValue="regularizacao" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="regularizacao" className="text-sm md:text-base">
                <Building className="h-4 w-4 mr-2 hidden md:inline" />
                Regularização
              </TabsTrigger>
              <TabsTrigger value="inventario" className="text-sm md:text-base">
                <FileText className="h-4 w-4 mr-2 hidden md:inline" />
                Inventário
              </TabsTrigger>
              <TabsTrigger value="documental" className="text-sm md:text-base">
                <Shield className="h-4 w-4 mr-2 hidden md:inline" />
                Documental
              </TabsTrigger>
              <TabsTrigger value="possessorias" className="text-sm md:text-base">
                <Home className="h-4 w-4 mr-2 hidden md:inline" />
                Possessórias
              </TabsTrigger>
              <TabsTrigger value="tributaria" className="text-sm md:text-base">
                <Landmark className="h-4 w-4 mr-2 hidden md:inline" />
                Tributária
              </TabsTrigger>
              <TabsTrigger value="condominios" className="text-sm md:text-base">
                <Users className="h-4 w-4 mr-2 hidden md:inline" />
                Condomínios
              </TabsTrigger>
            </TabsList>

            <TabsContent value="regularizacao" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Regularização Fundiária e Imobiliária</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Transformamos posse em propriedade</h4>
                      <p className="text-gray-700 mb-6">
                        Nossa equipe especializada atua na regularização completa de imóveis, garantindo a segurança
                        jurídica do seu patrimônio e evitando problemas futuros.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Usucapião (judicial e extrajudicial)</span>
                            <p className="text-gray-600 mt-1">
                              Obtenção da propriedade de imóveis por meio da posse prolongada, com assessoria completa
                              em todas as etapas do processo.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Retificação de Área</span>
                            <p className="text-gray-600 mt-1">
                              Correção de erros na matrícula do imóvel quanto às dimensões, confrontações e localização,
                              garantindo a precisão dos registros.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Desmembramento e Unificação de Lotes</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria completa para separação ou unificação de terrenos junto à Prefeitura e ao
                              Cartório de Registro de Imóveis.
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
                            <span className="font-semibold">Registro e Averbação de Imóveis</span>
                            <p className="text-gray-600 mt-1">
                              Inclusão de construções, reformas, desmembramentos e outras alterações na matrícula do
                              imóvel, garantindo a atualização dos registros.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Regularização de Imóveis Rurais</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria completa para CAR, ITR, CCIR, georreferenciamento e outras exigências do INCRA,
                              garantindo a conformidade com a legislação.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Regularização de Construções</span>
                            <p className="text-gray-600 mt-1">
                              Legalização de edificações junto às prefeituras e cartórios, incluindo obtenção de
                              habite-se e averbação na matrícula.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                          Solicitar Consultoria
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventario" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Inventário e Partilha de Bens</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Soluções ágeis para sucessão patrimonial</h4>
                      <p className="text-gray-700 mb-6">
                        Nossa equipe oferece assessoria completa em processos de inventário e partilha, buscando sempre
                        as soluções mais ágeis e eficientes para nossos clientes.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Inventário Extrajudicial</span>
                            <p className="text-gray-600 mt-1">
                              Procedimento rápido e simplificado para regularizar a propriedade de bens deixados por
                              falecidos, quando há consenso entre os herdeiros.
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
                            <span className="font-semibold">Adjudicação de Bens</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria jurídica para casos em que apenas um herdeiro deseja ficar com o imóvel,
                              facilitando a transferência da propriedade.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                          Solicitar Consultoria
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documental" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Regularização Documental</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Segurança jurídica para seu patrimônio</h4>
                      <p className="text-gray-700 mb-6">
                        Garantimos a regularidade documental dos seus imóveis, prevenindo problemas futuros e
                        assegurando a validade jurídica de todas as transações.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Formal de Partilha e Averbação</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria completa para o registro da partilha de bens no Cartório de Imóveis, garantindo
                              a transferência efetiva da propriedade.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Divórcio e Partilha de Bens</span>
                            <p className="text-gray-600 mt-1">
                              Orientação jurídica para a transferência de imóveis entre ex-cônjuges, assegurando o
                              cumprimento das determinações judiciais.
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
                            <span className="font-semibold">Adjudicação Compulsória</span>
                            <p className="text-gray-600 mt-1">
                              Representação jurídica para compradores que não receberam a escritura do imóvel e precisam
                              forçar a transferência por via judicial.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Contratos de Compra e Venda</span>
                            <p className="text-gray-600 mt-1">
                              Elaboração e revisão de contratos imobiliários com cláusulas de proteção para evitar
                              problemas futuros e garantir a segurança da transação.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Regularização de Condomínios e Loteamentos</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria jurídica para a instituição de condomínio, registro de loteamentos e
                              incorporação imobiliária, garantindo a conformidade legal.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                          Solicitar Consultoria
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="possessorias" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Ações Possessórias</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Proteção efetiva da posse e propriedade</h4>
                      <p className="text-gray-700 mb-6">
                        Nossa equipe atua na defesa dos direitos possessórios de nossos clientes, com estratégias
                        jurídicas eficientes para cada situação.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Reintegração de Posse</span>
                            <p className="text-gray-600 mt-1">
                              Representação jurídica para clientes que foram despejados ou expulsos injustamente do
                              imóvel, buscando a recuperação rápida da posse.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Manutenção de Posse</span>
                            <p className="text-gray-600 mt-1">
                              Atuação jurídica para quem está sendo ameaçado de perder a posse do imóvel, com medidas
                              preventivas e ações judiciais eficientes.
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
                            <span className="font-semibold">Interdito Proibitório</span>
                            <p className="text-gray-600 mt-1">
                              Medidas judiciais preventivas para evitar uma invasão iminente ou turbação da posse,
                              protegendo o patrimônio antes da ocorrência do dano.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Imissão na Posse</span>
                            <p className="text-gray-600 mt-1">
                              Representação jurídica para quem comprou um imóvel e o antigo morador não quer sair,
                              garantindo a efetiva entrega do bem adquirido.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                          Solicitar Consultoria
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tributaria" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Regularização Fiscal e Tributária</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Economia tributária e conformidade legal</h4>
                      <p className="text-gray-700 mb-6">
                        Oferecemos soluções jurídicas para questões fiscais e tributárias relacionadas a imóveis,
                        garantindo economia e conformidade com a legislação.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Revisão de ITBI e ITCMD</span>
                            <p className="text-gray-600 mt-1">
                              Contestação de valores cobrados indevidamente em transmissões de imóveis, com estratégias
                              jurídicas para redução da carga tributária.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Baixa de Hipoteca e Alienação Fiduciária</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria jurídica para regularização de imóveis financiados já quitados, garantindo a
                              liberação dos gravames e a plena propriedade.
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
                            <span className="font-semibold">Defesa Administrativa e Judicial</span>
                            <p className="text-gray-600 mt-1">
                              Representação em impugnações contra cobranças indevidas de IPTU, ITR e taxas municipais,
                              com estratégias eficientes para cada caso.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Planejamento Tributário Imobiliário</span>
                            <p className="text-gray-600 mt-1">
                              Consultoria para estruturação de operações imobiliárias com foco na economia tributária
                              legal, maximizando resultados financeiros.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                          Solicitar Consultoria
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="condominios" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary-gold">Assessoria Jurídica para Condomínios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Gestão jurídica eficiente para condomínios</h4>
                      <p className="text-gray-700 mb-6">
                        Oferecemos suporte jurídico completo para síndicos, administradoras e conselhos condominiais,
                        garantindo a conformidade legal e a resolução eficiente de conflitos.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Elaboração e Revisão de Convenções e Regimentos</span>
                            <p className="text-gray-600 mt-1">
                              Assessoria jurídica para criação e atualização de documentos condominiais, adequando-os à
                              legislação vigente e às necessidades específicas do condomínio.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Cobrança de Taxas Condominiais</span>
                            <p className="text-gray-600 mt-1">
                              Representação jurídica em ações de cobrança de inadimplentes, com estratégias eficientes
                              para recuperação de valores e redução da inadimplência.
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
                            <span className="font-semibold">Assessoria em Assembleias</span>
                            <p className="text-gray-600 mt-1">
                              Orientação jurídica para realização de assembleias, elaboração de atas e implementação de
                              decisões, garantindo a validade jurídica dos procedimentos.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Mediação de Conflitos</span>
                            <p className="text-gray-600 mt-1">
                              Atuação na resolução de conflitos entre condôminos e administração, com foco em soluções
                              consensuais e eficientes para todas as partes.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mr-3" />
                          <div>
                            <span className="font-semibold">Consultoria Preventiva</span>
                            <p className="text-gray-600 mt-1">
                              Orientação jurídica contínua para prevenir problemas e garantir a conformidade legal da
                              administração condominial em todas as suas ações.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                          Solicitar Consultoria
                        </Button>
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
              Conheça as vantagens de contar com o Mello Costa Advogados para cuidar do seu patrimônio imobiliário.
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
                  Nossa equipe é formada por advogados com ampla experiência e especialização em Direito Imobiliário,
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
            <h2 className="text-3xl font-bold mb-6">Proteja seu patrimônio imobiliário</h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato com nossa equipe especializada e descubra como podemos ajudar a garantir a segurança
              jurídica do seu patrimônio imobiliário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-gold hover:bg-primary-gold/90 text-white">
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-gold text-primary-gold hover:bg-primary-gold/10 bg-transparent"
              >
                Fale com um Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
