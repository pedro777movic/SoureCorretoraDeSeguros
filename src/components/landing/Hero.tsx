import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden text-center">
      <div className="container relative z-10 mx-auto px-4 py-20">
        <h2 className="mb-4 text-4xl font-bold uppercase tracking-widest text-white/80">
          Soure Corretora de Seguros
        </h2>
        <h1 className="mb-6 font-light text-3xl md:text-5xl leading-tight">
          Proteção inteligente para o que <br className="hidden md:block" />
          realmente importa na sua vida.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          Soluções completas em seguros, com atendimento humano, rápido e transparente.
        </p>
        <WhatsAppButton size="large">
          Falar com um corretor no WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
