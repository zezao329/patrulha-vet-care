import { Reveal } from "./Reveal";
import { Play } from "lucide-react";

const videoId = "kXLIKZZ7LpU";

export function VideoPromocional() {
  return (
    <section id="video" className="bg-surface py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary-deep">
            Conheça a Patrulha Vet
          </p>
          <h2 className="text-3xl text-ink sm:text-4xl">
            Cuidado especializado para o seu pet
          </h2>
          <p className="mt-4 text-muted-foreground">
            Assista ao nosso vídeo e veja como cuidamos com amor, técnica e dedicação de cada animal que passa por aqui.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-4xl" delay={0.1}>
          <div className="card-soft overflow-hidden p-2 sm:p-3">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black sm:aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Vídeo promocional Patrulha Vet"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-primary-deep">
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              <span>Vídeo promocional no YouTube</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
