import { MessageCircle, Phone, Star } from "lucide-react";
import heroImg from "@/assets/hero-vet.jpg";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[92vh] items-center">
      <img
        src={heroImg}
        alt="Médica veterinária examinando com carinho um cão golden retriever em clínica moderna"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.18_0.03_165/0.82),oklch(0.18_0.03_165/0.62))]"
        aria-hidden="true"
      />

      <div className="container-page py-24 text-center">
        <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
          <Star className="h-4 w-4 text-secondary" aria-hidden="true" />
          Clínica veterinária e pet shop em Iranduba (AM)
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Resultados excepcionais no cuidado do seu pet, com{" "}
          <span className="text-primary">segurança e carinho</span> em cada atendimento
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
          Para quem considera o pet parte da família: atendimento veterinário completo, higiene,
          vacinação e acompanhamento profissional em um só lugar — sem correr riscos e sem precisar
          de vários estabelecimentos.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink("Olá! Vim pelo site e quero entrar em contato com a Patrulha Vet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary w-full text-base sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Entrar em contato
          </a>
          <a
            href="#servicos"
            className="btn-base w-full border-2 border-white/70 text-base text-white sm:w-auto"
          >
            Conhecer os serviços
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-white/80">
          <Phone className="h-4 w-4" aria-hidden="true" />
          WhatsApp {WHATSAPP_DISPLAY} · Resposta rápida no horário comercial
        </p>
      </div>
    </section>
  );
}
