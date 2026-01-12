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
  import { Car, Home, Heart, Smile, Building2 } from "lucide-react";
  
  const insuranceOptions = [
    {
      icon: Home,
      title: "Seguro Residencial",
      description: "Sua casa protegida contra imprevistos. Cuidamos do seu lar como se fosse nosso.",
    },
    {
      icon: Heart,
      title: "Seguro de Vida",
      description: "Garanta a segurança e o futuro de quem você ama com planos flexíveis.",
    },
    {
      icon: Smile,
      title: "Seguro Odontológico",
      description: "Sorria com confiança. Acesso a uma ampla rede de dentistas e clínicas.",
    },
    {
      icon: Building2,
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
            <Accordion type="single" collapsible className="lg:col-span-1 md:col-span-2">
              <Card className="bg-card/80 flex flex-col h-full">
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="p-6 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <Car className="h-8 w-8 text-white flex-shrink-0" />
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
                    <Button variant="secondary" className="w-full bg-white text-background hover:bg-white/90">Solicitar cotação agora</Button>
                </div>
              </Card>
            </Accordion>
  
            {insuranceOptions.map((item) => (
              <Card key={item.title} className="bg-card/80 flex flex-col h-full hover:bg-card transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <item.icon className="h-8 w-8 text-white flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-muted-foreground">{item.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="secondary" className="w-full bg-white text-background hover:bg-white/90">Solicitar cotação agora</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
  