import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import c1 from "@/assets/carousel-1.jpg";
import c2 from "@/assets/carousel-2.jpg";
import c3 from "@/assets/carousel-3.jpg";
import hero from "@/assets/hero-mate.jpg";

const slides = [
  { src: c1, alt: "Mate tradicional con yerba" },
  { src: c3, alt: "Cebando mate con pava" },
  { src: c2, alt: "Selección de yerbas de La Ruta del Mate" },
  { src: hero, alt: "Mate listo para compartir" },
];

export function PhotoCarousel() {
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  // Preload all images on mount so transitions are instant
  useEffect(() => {
    slides.forEach((s, idx) => {
      const img = new Image();
      img.src = s.src;
      img.onload = () => setLoaded((l) => ({ ...l, [idx]: true }));
    });
  }, []);

  // Auto-advance every 4.5s, pause if the current slide hasn't loaded yet
  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => {
        const next = (v + 1) % slides.length;
        return loaded[next] ? next : v;
      });
    }, 4500);
    return () => clearInterval(id);
  }, [loaded]);

  const go = (dir: number) =>
    setI((v) => (v + dir + slides.length) % slides.length);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-soft">
            Galería
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Momentos de mate
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition hover:bg-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition hover:bg-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-3xl ring-1 ring-border shadow-warm">
        <div className="relative aspect-[16/9] w-full bg-secondary">
          {slides.map((s, idx) => (
            <img
              key={idx}
              src={s.src}
              alt={s.alt}
              loading="eager"
              decoding="async"
              onLoad={() => setLoaded((l) => ({ ...l, [idx]: true }))}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {!loaded[i] && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-secondary via-muted to-secondary" />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <p className="text-sm font-medium drop-shadow">{slides[i].alt}</p>
            <div className="flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Ir a foto ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-6 bg-[color:var(--gold)]" : "w-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

