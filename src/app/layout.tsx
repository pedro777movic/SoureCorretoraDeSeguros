import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Soure Corretora de Seguros | Proteção Inteligente para sua Vida",
  description: "Soluções completas em seguros com atendimento humano, rápido e transparente. Fale com um corretor e encontre o seguro ideal para você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet" />
        {/* Meta Pixel Code fallback for browsers with JS disabled */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }} 
            src="https://www.facebook.com/tr?id=946627774603918&ev=PageView&noscript=1" 
            alt=""
          />
        </noscript>
      </head>
      <body className="font-body antialiased">
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '946627774603918');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* UTMify Pixel Code */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "699331695ef94bcc23e115ca";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* UTMify UTMs Script */}
        <Script 
          src="https://cdn.utmify.com.br/scripts/utms/latest.js" 
          data-utmify-prevent-xcod-sck="true"
          data-utmify-prevent-subids="true"
          strategy="afterInteractive"
        />

        {children}
        <Toaster />
      </body>
    </html>
  );
}
