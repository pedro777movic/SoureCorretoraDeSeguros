import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import { Button } from "@/components/ui/button";
  import Image from "next/image";
  
  const insuranceOptions = [
    {
      image: "https://i.postimg.cc/cJGTVZj4/Gemini-Generated-Image-btharjbtharjbtha.png",
      imageHint: "modern house",
      title: "Seguro Residencial",
      description: "Sua casa protegida contra imprevistos. Cuidamos do seu lar como se fosse nosso.",
    },
    {
      image: "https://i.postimg.cc/hPJknDCm/Gemini-Generated-Image-gzx2iwgzx2iwgzx2.png",
      imageHint: "happy couple",
      title: "Seguro de Vida",
      description: "Garanta a segurança e o futuro de quem você ama com planos flexíveis.",
    },
    {
      image: "https://i.postimg.cc/sXt3R1Kn/Chat-GPT-Image-30-de-jan-de-2026-10-47-05.png",
      imageHint: "doctor patient",
      title: "Plano de Saúde",
      description: "Acesso aos melhores hospitais e laboratórios para cuidar da sua saúde e bem-estar.",
    },
    {
      image: "https://i.postimg.cc/6qGgKz9j/Gemini-Generated-Image-n7dbfln7dbfln7db.png",
      imageHint: "person smiling",
      title: "Seguro Odontológico",
      description: "Sorria com confiança. Acesso a uma ampla rede de dentistas e clínicas.",
    },
  ];
  
  export default function InsuranceOptions() {
    return (
      <section id="nossos-seguros" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase md:text-4xl">Nossos Seguros</h2>
            <p className="text-lg text-muted-foreground mt-2">Encontre a proteção ideal para cada momento da sua vida.</p>
          </div>
  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card/80 flex flex-col h-full overflow-hidden">
               <Image src="https://i.postimg.cc/Y0ts5HYB/Chat-GPT-Image-30-de-jan-de-2026-10-23-45.png" alt="Car on a road" width={400} height={250} className="w-full object-cover" data-ai-hint="car road"/>
              <div className="flex flex-col flex-grow p-6">
                <CardTitle className="text-xl">Seguro Auto</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-1 flex-grow">
                  Proteção completa para seu veículo, com a tranquilidade que você merece.
                </CardDescription>
                <Accordion type="single" collapsible className="w-full pt-4">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="p-0 hover:no-underline justify-start gap-2 text-sm text-secondary">
                      Ver detalhes
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <Tabs defaultValue="individual" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-background/50">
                          <TabsTrigger value="individual">Individual</TabsTrigger>
                          <TabsTrigger value="frota">Frota</TabsTrigger>
                          <TabsTrigger value="moto">Moto</TabsTrigger>
                        </TabsList>
                        <TabsContent value="individual" className="mt-4 text-sm text-muted-foreground">
                          Cobertura completa para seu carro particular, incluindo roubo, colisão e assistência 24h.
                        </TabsContent>
                        <TabsContent value="frota" className="mt-4 text-sm text-muted-foreground">
                          Soluções para empresas que precisam proteger sua frota de veículos com um único contrato.
                        </TabsContent>
                        <TabsContent value="moto" className="mt-4 text-sm text-muted-foreground">
                          Segurança e proteção para sua motocicleta, com coberturas essenciais para o dia a dia.
                        </TabsContent>
                      </Tabs>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
               </div>
               <div className="mt-auto p-6 pt-0">
                  <Button variant="secondary" className="w-full bg-white text-background hover:bg-white/90">Solicitar cotação</Button>
              </div>
            </Card>

            <Card className="bg-card/80 flex flex-col h-full overflow-hidden">
                <Image src="https://i.postimg.cc/HksGcwzR/Gemini-Generated-Image-y5qwr9y5qwr9y5qw.png" alt="Seguro Empresarial" width={400} height={250} className="w-full object-cover" data-ai-hint="office building"/>
                <div className="flex flex-col flex-grow p-6">
                    <CardTitle className="text-xl">Seguro Empresarial</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-1 flex-grow">
                        Proteja seu negócio, seus funcionários e seu patrimônio contra riscos.
                    </CardDescription>
                    <Accordion type="single" collapsible className="w-full pt-4">
                        <AccordionItem value="item-1" className="border-b-0">
                            <AccordionTrigger className="p-0 hover:no-underline justify-start gap-2 text-sm text-secondary">
                                Ver detalhes
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                                <Tabs defaultValue="equipamentos" className="w-full">
                                    <TabsList className="flex h-auto w-full flex-wrap justify-center bg-background/50">
                                        <TabsTrigger value="equipamentos">Equipamentos</TabsTrigger>
                                        <TabsTrigger value="agro">Agro</TabsTrigger>
                                        <TabsTrigger value="patrimonial">Patrimonial</TabsTrigger>
                                        <TabsTrigger value="funcionarios">Funcionários</TabsTrigger>
                                        <TabsTrigger value="outros">Outros</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="equipamentos" className="mt-4 text-sm text-muted-foreground">
                                        Proteção para máquinas e equipamentos essenciais para a sua operação.
                                    </TabsContent>
                                    <TabsContent value="agro" className="mt-4 text-sm text-muted-foreground">
                                        Seguro para o agronegócio, cobrindo lavouras, rebanhos e equipamentos agrícolas.
                                    </TabsContent>
                                    <TabsContent value="patrimonial" className="mt-4 text-sm text-muted-foreground">
                                        Cobertura para o patrimônio da sua empresa, como prédios, estoques e instalações.
                                    </TabsContent>
                                    <TabsContent value="funcionarios" className="mt-4 text-sm text-muted-foreground">
                                        Planos de vida e saúde para seus colaboradores, valorizando seu time.
                                    </TabsContent>
                                    <TabsContent value="outros" className="mt-4 text-sm text-muted-foreground">
                                        Soluções personalizadas para outros riscos específicos do seu negócio.
                                    </TabsContent>
                                </Tabs>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="mt-auto p-6 pt-0">
                    <Button variant="secondary" className="w-full bg-white text-background hover:bg-white/90">Solicitar cotação</Button>
                </div>
            </Card>
  
            {insuranceOptions.map((item) => (
              <Card key={item.title} className="bg-card/80 flex flex-col h-full hover:bg-card transition-colors overflow-hidden">
                <Image src={item.image} alt={item.title} width={400} height={250} className="w-full object-cover" data-ai-hint={item.imageHint}/>
                <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-muted-foreground">{item.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="secondary" className="w-full bg-white text-background hover:bg-white/90">Solicitar cotação</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }