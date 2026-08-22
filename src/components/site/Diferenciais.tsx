import { HeartHandshake, ShieldCheck, Clock, Wallet, Building2, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const itens: { icone: LucideIcon; titulo: string; texto: string }[] = [
  {
    icone: HeartHandshake,
    titulo: "Atendimento personalizado",
    texto:
      "Profissionais especializados, foco em bons resultados e acompanhamento próximo de cada caso.",
  },
  {
    icone: Wallet,
    titulo: "Orçamento transparente",
    texto: "Valores informados antes do procedimento. Sem surpresas e sem custos escondidos.",
  },
  {
    icone: Clock,
    titulo: "Agilidade real",
    texto: "Agendamento pelo WhatsApp, horários organizados e prazos combinados que cumprimos.",
  },
  {
    icone: ShieldCheck,
    titulo: "Qualidade técnica inegociável",
    texto: "Nunca comprometemos a técnica ou a ética profissional por questões comerciais.",
  },
  {
    icone: Building2,
    titulo: "Infraestrutura completa",
    texto: "Clínica, banho e tosa, internação 24h e táxi dog integrados no mesmo endereço.",
  },
  {
    icone: GraduationCap,
    titulo: "Equipe capacitada",
    texto: "Veterinários com experiência em clínica, laboratório e cirurgia, sempre atualizados.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-background py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary-deep">
            Diferenciais competitivos
          </p>
          <h2 className="text-3xl text-ink sm:text-4xl">
            Por que os tutores de Iranduba confiam na Patrulha Vet
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((it, i) => (
            <Reveal key={it.titulo} delay={i * 60}>
              <article className="card-soft flex h-full items-start gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary/25">
                  <it.icone className="h-6 w-6 text-primary-deep" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-ink">{it.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.texto}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
