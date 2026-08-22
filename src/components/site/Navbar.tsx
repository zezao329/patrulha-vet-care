import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { waLink } from "@/lib/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="container-page flex h-18 items-center justify-between py-3"
      >
        <a href="#hero" className="flex items-center gap-2 font-extrabold text-lg text-ink">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary">
            <PawPrint className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
          </span>
          Patrulha&nbsp;<span className="text-primary-deep">Vet</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary-deep"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLink("Olá! Quero tirar dúvidas sobre os serviços da Patrulha Vet.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-primary hidden text-sm lg:inline-flex"
        >
          Quero Tirar Dúvidas
        </a>

        <button
          type="button"
          className="rounded-full p-2 text-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 font-semibold text-ink hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={waLink("Olá! Quero tirar dúvidas sobre os serviços da Patrulha Vet.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary w-full"
              >
                Quero Tirar Dúvidas
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
