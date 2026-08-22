import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Servicos } from "@/components/site/Servicos";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Depoimentos } from "@/components/site/Depoimentos";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const title = "Patrulha Vet | Clínica Veterinária e Pet Shop em Iranduba (AM)";
const description =
  "Clínica veterinária e pet shop em Iranduba: consultas, vacinas, exames, cirurgias, banho e tosa, internação 24h e táxi dog. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VeterinaryCare",
          name: "Patrulha Vet",
          description,
          telephone: "+55 92 99477-7327",
          email: "gunsmatheus18@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. 01, Q 35, N13 — Nova Manaus",
            addressLocality: "Iranduba",
            addressRegion: "AM",
            addressCountry: "BR",
          },
          openingHours: ["Mo-Fr 08:00-19:00", "Sa 08:00-17:00"],
          sameAs: ["https://instagram.com/patrulha_vet"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Depoimentos />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
