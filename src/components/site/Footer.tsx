import { Clock, Instagram, Mail, MapPin, PawPrint, Phone } from "lucide-react";
import { CONTATO, waLink, WHATSAPP_DISPLAY } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-background">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-xl font-extrabold">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary">
              <PawPrint className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
            </span>
            Patrulha Vet
          </p>
          <p className="mt-4 max-w-xs text-sm text-background/70">
            Cuidar com amor é a nossa missão. Patrulha Vet, o lugar do seu pet.
          </p>
          <a
            href={waLink("Olá! Quero tirar dúvidas com a Patrulha Vet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary mt-6 text-sm"
          >
            Quero Tirar Dúvidas
          </a>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-secondary">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-background/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a className="hover:text-primary" href={waLink("Olá, Patrulha Vet!")}>
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a className="hover:text-primary" href={`mailto:${CONTATO.email}`}>
                {CONTATO.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {CONTATO.endereco}
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                className="hover:text-primary"
                href={CONTATO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{CONTATO.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-secondary">
            Horário de funcionamento
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-background/80">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {CONTATO.horario}
          </p>
          <nav aria-label="Links do rodapé" className="mt-6">
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#sobre" className="hover:text-primary">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary">
                  Depoimentos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <p className="container-page mt-12 border-t border-background/15 pt-6 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Patrulha Vet · Iranduba (AM). Todos os direitos reservados.
      </p>
    </footer>
  );
}
