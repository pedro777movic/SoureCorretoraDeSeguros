
const insurers = [
    { name: "Mapfre" },
    { name: "Porto Seguro" },
    { name: "Allianz" },
    { name: "Tokio Marine" },
    { name: "Bradesco Seguros" },
    { name: "Itaú Seguros" },
    { name: "Azul Seguros" },
    { name: "Aliro" },
    { name: "Yelum" },
    { name: "HDI" },
    { name: "Suhai" },
    { name: "Zurich" },
    { name: "Ituran" },
];

export default function Insurers() {
  return (
    <section id="insurers" className="py-16 md:py-24 bg-background/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl">
          As melhores seguradoras do mercado
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-12">
            Trabalhamos com parceiros sólidos e reconhecidos para garantir a sua tranquilidade e as melhores coberturas.
        </p>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 md:[&_li]:mx-10 animate-infinite-scroll">
                {insurers.map((insurer) => (
                    <li key={insurer.name}>
                        <span className="text-xl font-medium text-muted-foreground whitespace-nowrap">{insurer.name}</span>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 md:[&_li]:mx-10 animate-infinite-scroll" aria-hidden="true">
                 {insurers.map((insurer) => (
                    <li key={insurer.name}>
                        <span className="text-xl font-medium text-muted-foreground whitespace-nowrap">{insurer.name}</span>
                    </li>
                ))}
                 <li>
                    <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">e muitas outras...</span>
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
}
