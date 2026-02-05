"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

const navLinks = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#nossos-seguros", label: "Nossos Seguros" },
  { href: "#por-que-escolher", label: "Por que nos escolher" },
  { href: "#como-funciona", label: "Como Funciona" },
];

const WHATSAPP_LINK = "https://wa.me/5598984250300?text=Ol%C3%A1%21+Gostaria+de+fazer+uma+cota%C3%A7%C3%A3o.";

const socialLinks = [
  { href: WHATSAPP_LINK, label: "WhatsApp", icon: WhatsAppIcon },
  { href: "#", label: "Instagram", icon: Instagram },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://i.postimg.cc/GtX2vZpT/file-00000000af2c71f5b0f4b1b8bcbd68a3.png"
            alt="Soure Corretora de Seguros Logo"
            width={160}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label={link.label}>
                <link.icon className="h-5 w-5 text-white/80 hover:text-white" />
              </Button>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
         {isClient && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 w-[80%]">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <Image
                    src="https://i.postimg.cc/GtX2vZpT/file-00000000af2c71f5b0f4b1b8bcbd68a3.png"
                    alt="Soure Corretora de Seguros Logo"
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="text-lg font-medium"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex justify-center gap-4 pb-4">
                   {socialLinks.map((link) => (
                    <Link href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" aria-label={link.label}>
                        <link.icon className="h-6 w-6" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
         )}
        </div>
      </div>
    </header>
  );
}
