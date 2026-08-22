import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const depoimentos = [
  {
    nome: "Ana Beatriz Lima",
    perfil: "Tutora da Mel · Iranduba",
    iniciais: "AL",
    texto:
      "A Mel chegou muito debilitada e a equipe explicou cada etapa do tratamento com muita clareza. Em uma semana ela estava outra cachorra. Saí de lá com a certeza de que meu pet estava em boas mãos.",
  },
  {
    nome: "Rafael Monteiro",
    perfil: "Tutor do Thor · Nova Manaus",
    iniciais: "RM",
    texto:
      "Resolvi tudo no mesmo lugar: consulta, vacina e banho. O orçamento foi passado antes, sem surpresa nenhuma, e o atendimento foi pontual. É exatamente a praticidade que eu procurava.",
  },
  {
    nome: "Juliana Farias",
    perfil: "Tutora da gata Nina",
    iniciais: "JF",
    texto:
      "Minha gata é muito estressada e o manejo foi impecável, com muita paciência. A cirurgia correu perfeitamente e recebi acompanhamento por WhatsApp no pós-operatório.",
  },
  {
    nome: "Carlos Eduardo Souza",
    perfil: "Tutor do Bidu",
    iniciais: "CS",
    texto:
      "Usei o táxi dog e foi tudo muito seguro e organizado. Profissionais preparados, ambiente limpo e um cuidado com o animal que faz toda a diferença. Confiança total.",
  },
];

export function Depoimentos() {
  const [i, setI] = useState(0);
  const total = depoimentos.length;
  const atual = depoimentos[i];

  return (
    <section id="depoimentos" className="bg-surface py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary-deep">
            Depoimentos e prova social
          </p>
          <h2 className="text-3xl text-ink sm:text-4xl">
            Tutores que encontraram segurança e tranquilidade
          </h2>
          <p className="mt-4 text-muted-foreground">
            Atendimento especializado, cuidado personalizado, profissionais capacitados e
            infraestrutura completa — resultados reais para cada pet.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div
            className="card-soft p-8 sm:p-12"
            role="group"
            aria-roledescription="carrossel"
            aria-label={`Depoimento ${i + 1} de ${total}`}
          >
            <Quote className="h-9 w-9 text-primary" aria-hidden="true" />
            <blockquote className="mt-5 text-lg text-ink sm:text-xl">"{atual.texto}"</blockquote>

            <div className="mt-8 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="grid h-14 w-14 place-items-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground"
              >
                {atual.iniciais}
              </span>
              <div>
                <p className="font-extrabold text-ink">{atual.nome}</p>
                <p className="text-sm text-muted-foreground">{atual.perfil}</p>
                <div className="mt-1 flex gap-0.5" aria-label="Avaliação 5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => setI((v) => (v - 1 + total) % total)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-primary text-primary-deep transition-colors hover:bg-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {depoimentos.map((d, idx) => (
                <button
                  key={d.nome}
                  type="button"
                  aria-label={`Ir para o depoimento ${idx + 1}`}
                  aria-current={idx === i}
                  onClick={() => setI(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-secondary"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => setI((v) => (v + 1) % total)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-primary text-primary-deep transition-colors hover:bg-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
