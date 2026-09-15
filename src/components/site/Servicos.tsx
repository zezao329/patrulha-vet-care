import {
  Stethoscope,
  Syringe,
  FlaskConical,
  Plane,
  Scissors,
  Bath,
  Car,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink } from "@/lib/site";

type Servico = { icone: LucideIcon; titulo: string; texto: string; emBreve?: boolean };

const servicos: Servico[] = [
  {
    icone: Stethoscope,
    titulo: "Consultas e clínica geral",
    texto:
      "Avaliação completa e acompanhamento contínuo, com diagnóstico claro e plano de cuidado explicado sem termos confusos.",
  },
  {
    icone: Syringe,
    titulo: "Vacinação",
    texto:
      "Protocolo vacinal atualizado, vacinas conservadas corretamente e carteirinha em dia para proteger a saúde do seu pet.",
  },
  {
    icone: FlaskConical,
    titulo: "Exames laboratoriais",
    texto:
      "Coleta na clínica e resultados interpretados pela nossa equipe, para decisões rápidas e seguras sobre o tratamento.",
  },
  {
    icone: Plane,
    titulo: "Atestado de viagem",
    texto:
      "Emissão dentro das exigências legais, com orientação sobre prazos e documentos para viajar com tranquilidade.",
  },
  {
    icone: Scissors,
    titulo: "Cirurgias",
    texto:
      "Realizadas na clínica com equipe qualificada. Procedimentos especializados, como ortopédicos, com veterinários parceiros.",
  },
  {
    icone: Bath,
    titulo: "Banho, tosa e higiene",
    texto:
      "Produtos adequados a cada pelagem, manejo respeitoso e ambiente seguro — seu pet volta limpo, calmo e cheiroso.",
  },
  {
    icone: Car,
    titulo: "Táxi dog e internação 24h",
    texto:
      "Buscamos e levamos o seu pet e oferecemos internação monitorada, resolvendo tudo em um só lugar de confiança.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-surface py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary-deep">
            Serviços e soluções
          </p>
          <h2 className="text-3xl text-ink sm:text-4xl">
            Cuidado completo para cães, gatos e outros pets — em um só lugar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Saúde, higiene, conforto e bem-estar com estrutura completa em Iranduba. Sem precisar
            recorrer a vários estabelecimentos diferentes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 60}>
              <article className="card-soft flex h-full flex-col items-center p-7 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent">
                  <s.icone className="h-8 w-8 text-primary-deep" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-ink">{s.titulo}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.texto}</p>
                {s.emBreve ? (
                  <span className="btn-base mt-6 w-full cursor-default bg-muted text-sm text-muted-foreground">
                    Em breve
                  </span>
                ) : (
                  <a
                    href={waLink(`Olá! Quero agendar uma consulta para: ${s.titulo}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-primary mt-6 w-full text-sm"
                    aria-label={`Agendar consulta para ${s.titulo}`}
                  >
                    Agendar Consulta
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
