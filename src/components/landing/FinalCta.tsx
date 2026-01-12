import WhatsAppButton from "./WhatsAppButton";

export default function FinalCta() {
    return (
        <section id="final-cta" className="py-20 md:py-28 text-center">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 font-light text-3xl md:text-5xl leading-tight">
                    Pronto para encontrar a proteção ideal?
                </h2>
                <WhatsAppButton size="large">
                    Atendimento imediato no WhatsApp
                </WhatsAppButton>
            </div>
        </section>
    );
}
