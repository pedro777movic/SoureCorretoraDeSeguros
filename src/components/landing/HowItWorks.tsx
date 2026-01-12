import WhatsAppButton from "./WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  
const steps = [
    {
      step: "01",
      title: "Contato Inicial",
      description: "Você entra em contato conosco, preferencialmente via WhatsApp, e nos conta o que precisa.",
    },
    {
      step: "02",
      title: "Análise de Perfil",
      description: "Analisamos suas necessidades e perfil para buscar as melhores cotações e coberturas.",
    },
    {
      step: "03",
      title: "Melhor Indicação",
      description: "Apresentamos a você as melhores opções do mercado e auxiliamos na sua escolha e contratação.",
    },
];

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold uppercase md:text-4xl">Como Funciona</h2>
                    <p className="text-lg text-muted-foreground mt-2">Nosso processo é simples, rápido e transparente.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {steps.map((item) => (
                        <Card key={item.step} className="border-none bg-card/80 text-center">
                            <CardHeader>
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background text-2xl font-bold text-white">
                                    {item.step}
                                </div>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <WhatsAppButton>
                        Falar com um corretor no WhatsApp
                    </WhatsAppButton>
                </div>
            </div>
        </section>
    );
}
