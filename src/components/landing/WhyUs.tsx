import { Check } from "lucide-react";

const benefits = [
    "Atendimento direto via WhatsApp",
    "Análise personalizada do seu perfil",
    "Sem burocracia e com agilidade",
    "Trabalhamos com as principais seguradoras",
    "Transparência e confiança em todo o processo",
];
  
export default function WhyUs() {
    return (
      <section id="por-que-escolher" className="bg-background/80 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12">
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Por que escolher a Soure?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto md:mx-0">
                Porque seguro não deve ser complicado, nem impessoal. Na Soure, o foco é oferecer uma consultoria de seguros que vai além do básico, unindo tecnologia e atendimento humano para garantir a melhor experiência e a proteção certa para você.
              </p>
               <ul className="space-y-4 inline-block text-left">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp">
                        <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg text-white">{benefit}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </div>
      </section>
    );
}
