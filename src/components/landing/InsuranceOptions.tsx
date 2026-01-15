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
      image: "https://picsum.photos/seed/house/400/250",
      imageHint: "modern house",
      title: "Seguro Residencial",
      description: "Sua casa protegida contra imprevistos. Cuidamos do seu lar como se fosse nosso.",
    },
    {
      image: "https://picsum.photos/seed/life/400/250",
      imageHint: "happy couple",
      title: "Seguro de Vida",
      description: "Garanta a segurança e o futuro de quem você ama com planos flexíveis.",
    },
    {
      image: "https://picsum.photos/seed/health/400/250",
      imageHint: "doctor patient",
      title: "Plano de Saúde",
      description: "Acesso aos melhores hospitais e laboratórios para cuidar da sua saúde e bem-estar.",
    },
    {
      image: "https://picsum.photos/seed/dental/400/250",
      imageHint: "person smiling",
      title: "Seguro Odontológico",
      description: "Sorria com confiança. Acesso a uma ampla rede de dentistas e clínicas.",
    },
    {
      image: "https://picsum.photos/seed/business/400/250",
      imageHint: "office building",
      title: "Seguro Empresarial",
      description: "Proteja seu negócio, seus funcionários e seu patrimônio contra riscos.",
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
            <Accordion type="single" collapsible className="w-full">
              <Card className="bg-card/80 flex flex-col h-full overflow-hidden">
                 <Image src="https://i.postimg.cc/d3FY1zLL/Gemini-Generated-Image-sti69csti69csti6.png" alt="Car on a road" width={400} height={250} className="w-full object-cover" data-ai-hint="car road"/>
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="p-6 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div>
                        <CardTitle className="text-xl">Seguro Auto</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                          Proteção completa para seu veículo, com a tranquilidade que você merece.
                        </CardDescription>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
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
                 <div className="mt-auto p-6 pt-0">
                    <Button variant="secondary" className="w-full bg-white text-background hover:bg-white/90">Solicitar cotação</Button>
                </div>
              </Card>
            </Accordion>
  
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
