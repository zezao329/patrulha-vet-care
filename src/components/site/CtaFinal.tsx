import { MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/site";

const garantias = [
  "Orçamento transparente antes de qualquer procedimento",
  "Prazos e horários combinados e cumpridos",
  "Equipe especializada e ética profissional inegociável",
];

export function CtaFinal() {
  return (
    <section id="contato" className="bg-primary py-24">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl text-primary-foreground sm:text-4xl">
            Resultados excepcionais para quem trata o pet como família
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/85">
            Fale agora com a Patrulha Vet pelo WhatsApp: tire dúvidas, receba orientação e agende o
            atendimento do seu pet em poucos minutos.
          </p>

          <ul className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {garantias.map((g) => (
              <li
                key={g}
                className="inline-flex items-center gap-2 rounded-full bg-background/85 px-4 py-2 text-sm font-semibold text-ink"
              >
                <ShieldCheck className="h-4 w-4 text-primary-deep" aria-hidden="true" />
                {g}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink("Olá! Vim pelo site e quero entrar em contato com a Patrulha Vet.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base bg-ink text-base text-background"
            >
              Entrar em contato
            </a>
            <a
              href={waLink(`Olá! Quero falar pelo WhatsApp ${WHATSAPP_DISPLAY}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-secondary text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
