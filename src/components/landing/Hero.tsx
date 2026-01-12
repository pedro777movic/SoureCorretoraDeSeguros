import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden text-center">
      <div className="container relative z-10 mx-auto px-4 py-20">
        <h2 className="mb-4 text-2xl font-bold uppercase tracking-widest text-white/80 md:text-3xl">
          SOURE CORRETORA DE SEGUROS
        </h2>
        <h1 className="mb-6 font-light text-4xl md:text-5xl leading-tight">
          Encontramos o seguro ideal para proteger seus sonhos.
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
