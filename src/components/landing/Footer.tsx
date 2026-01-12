import Link from "next/link";
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/90 border-t border-border/50 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="mb-4">
          Fale conosco e descubra como podemos proteger o que é mais importante para você.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <Link href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="WhatsApp">
            <WhatsAppIcon className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Soure Corretora de Seguros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
