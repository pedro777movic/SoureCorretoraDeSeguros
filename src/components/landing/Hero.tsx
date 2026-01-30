import WhatsAppButton from "./WhatsAppButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden text-center">
       <Image
          src="https://i.postimg.cc/HkZPKfmm/Gemini-Generated-Image-i8mr1zi8mr1zi8mr.png"
          alt="Family feeling secure"
          fill
          className="object-cover object-bottom"
          priority
          data-ai-hint="secure family"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-brightness-75"></div>
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex justify-center mb-4">
          <Image
            src="https://i.postimg.cc/GtX2vZpT/file-00000000af2c71f5b0f4b1b8bcbd68a3.png"
            alt="Soure Corretora de Seguros Logo"
            width={160}
            height={40}
            priority
          />
        </div>
        <h2 className="mb-6 text-lg font-bold uppercase tracking-[0.2em] text-white/90 md:text-xl">
          Soure Corretora de Seguros
        </h2>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Proteção inteligente para o que realmente importa na sua vida.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
          Soluções completas em seguros, com atendimento humano, rápido e transparente.
        </p>
        <WhatsAppButton size="large" className="text-base md:text-lg">
          Falar com um corretor no WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
