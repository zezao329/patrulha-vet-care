import equipeImg from "@/assets/equipe.jpg";
import { Reveal } from "./Reveal";

const numeros = [
  { valor: "+8", rotulo: "anos de experiência clínica" },
  { valor: "+2.000", rotulo: "atendimentos realizados" },
  { valor: "24h", rotulo: "estrutura de internação" },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary-deep">
            Sobre a Patrulha Vet
          </p>
          <h2 className="text-3xl text-ink sm:text-4xl">
            Cuidar com amor é a nossa missão. Patrulha Vet, o lugar do seu pet.
          </h2>

          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Tudo começou com o atendimento domiciliar. A Dra. Kamila Salgado e o Dr. Mateus
              Salgado, ambos médicos veterinários, decidiram levar o cuidado até a casa dos tutores
              — porque no ambiente familiar o pet se sente mais seguro, tranquilo e confortável.
            </p>
            <p>
              Antes da Patrulha Vet, construímos trajetórias em clínicas, laboratórios, pet shops e
              cirurgia veterinária. Essa bagagem técnica se transformou em um padrão de atendimento
              rigoroso, ético e transparente com cada tutor.
            </p>
            <p>
              Ao retornarmos para Iranduba, percebemos a falta de um espaço que reunisse pet shop,
              banho e tosa e atendimento veterinário em um só lugar. Nasceu então a Patrulha Vet:
              cuidado completo, especializado e acolhedor para os pets e seus tutores.
            </p>
          </div>

          <p className="mt-6 rounded-2xl border-l-4 border-secondary bg-surface p-5 font-semibold text-ink">
            Nosso diferencial: atendimento personalizado, com profissionais especializados e foco em
            bons resultados. Nunca comprometemos a qualidade técnica ou a ética profissional por
            questões comerciais.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {numeros.map((n) => (
              <div key={n.rotulo} className="rounded-2xl bg-surface p-4 text-center">
                <dt className="text-2xl font-extrabold text-primary-deep sm:text-3xl">{n.valor}</dt>
                <dd className="mt-1 text-xs font-medium text-muted-foreground">{n.rotulo}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent"
              aria-hidden="true"
            />
            <img
              src={equipeImg}
              alt="Dra. Kamila Salgado e Dr. Mateus Salgado, fundadores da Patrulha Vet, com um cão e um gato"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="mt-4 rounded-2xl bg-card p-4 text-center shadow-[var(--shadow-soft)]">
              <p className="font-bold text-ink">Dra. Kamila Salgado & Dr. Mateus Salgado</p>
              <p className="text-sm text-muted-foreground">Médicos veterinários e fundadores</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
