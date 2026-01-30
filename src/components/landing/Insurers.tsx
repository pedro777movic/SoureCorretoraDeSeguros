import Image from "next/image";

const insurers = [
    { name: "Mapfre", logo: "https://i.postimg.cc/9M4sxs3j/mapfre-logo.png" },
    { name: "Porto Seguro", logo: "https://i.postimg.cc/W3h7F0VL/porto-seguro-logo.png" },
    { name: "Allianz", logo: "https://i.postimg.cc/0j0jY7Jv/allianz-logo.png" },
    { name: "Tokio Marine", logo: "https://i.postimg.cc/1X9w5S1C/tokio-marine-logo.png" },
    { name: "Bradesco Seguros", logo: "https://i.postimg.cc/L8yPScHq/bradesco-seguros-logo.png" },
    { name: "Itaú Seguros", logo: "https://i.postimg.cc/NMy08jYg/itau-seguros-logo.png" },
    { name: "Azul Seguros", logo: "https://i.postimg.cc/VL0Qy7dK/azul-seguros-logo.png" },
    { name: "Aliro", logo: "https://i.postimg.cc/D0mbyX1T/aliro-logo.png" },
    { name: "Yelum", logo: "https://i.postimg.cc/8cBRFjcz/yelum-logo.png" },
    { name: "HDI", logo: "https://i.postimg.cc/6p6g7pMW/hdi-logo.png" },
    { name: "Suhai", logo: "https://i.postimg.cc/J4YjG8n8/suhai-logo.png" },
    { name: "Zurich", logo: "https://i.postimg.cc/pr0T35sV/zurich-logo.png" },
    { name: "Ituran", logo: "https://i.postimg.cc/tTWs1kS4/ituran-logo.png" },
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
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {insurers.map((insurer) => (
                    <li key={insurer.name}>
                        <Image src={insurer.logo} alt={insurer.name} width={128} height={40} className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                 {insurers.map((insurer) => (
                    <li key={insurer.name}>
                        <Image src={insurer.logo} alt={insurer.name} width={128} height={40} className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
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
