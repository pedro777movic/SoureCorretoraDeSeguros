"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'large';
}

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+fazer+uma+cota%C3%A7%C3%A3o.";

export default function WhatsAppButton({ children, className, size = 'default' }: WhatsAppButtonProps) {
  const sizeClasses = size === 'large'
    ? 'px-8 py-4 text-lg'
    : 'px-6 py-3 text-base font-bold';

  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp font-bold uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-whatsapp-dark",
        sizeClasses,
        className
      )}
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span>{children}</span>
    </Link>
  );
}
