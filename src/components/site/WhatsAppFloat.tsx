import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá! Vim pelo site da Patrulha Vet e gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Patrulha Vet no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary shadow-[var(--shadow-lift)] transition-transform hover:scale-110 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ring"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground" aria-hidden="true" />
    </a>
  );
}
