import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, MapPin, Truck, Sparkles, ArrowRight } from "lucide-react";
import heroMate from "@/assets/hero-mate.jpg";
import yerbaTexture from "@/assets/yerba-texture.jpg";
import { SITE, PRODUCTS, formatPrice, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Ruta del Mate — Yerbas seleccionadas en Suipacha" },
      { name: "description", content: "Emprendimiento familiar de Suipacha. Yerbas uruguayas y brasileñas seleccionadas: Baldo, Canarias, Rei Verde, Sara y más." },
      { property: "og:title", content: "La Ruta del Mate — Yerbas seleccionadas" },
      { property: "og:description", content: "Yerbas uruguayas y brasileñas seleccionadas en Suipacha." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = PRODUCTS.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <img src={yerbaTexture} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8 lg:py-28">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
              <Leaf className="h-3.5 w-3.5" /> Suipacha, Buenos Aires
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              La ruta del mate empieza <span className="text-[color:var(--gold)]">acá</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Yerbas uruguayas y brasileñas seleccionadas una por una. Perfiles clásicos,
              intensos y aromáticos para cada mate — con la calidez de un emprendimiento
              de pueblo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-warm transition hover:brightness-105"
              >
                Ver catálogo <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waLink("Hola Santiago! Quisiera hacer un pedido.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <WhatsAppIcon className="h-4 w-4" /> Pedir por WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-primary-foreground/70">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--gold)]" /> Retiro en Suipacha</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-[color:var(--gold)]" /> Envíos coordinados</span>
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[color:var(--gold)]" /> Selección artesanal</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[color:var(--gold)]/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/15 shadow-warm">
              <img
                src={heroMate}
                alt="Mate tradicional con yerba y bombilla"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-background/95 p-4 text-foreground shadow-warm ring-1 ring-border sm:block">
              <p className="font-display text-2xl font-semibold">7 yerbas</p>
              <p className="text-xs text-muted-foreground">seleccionadas para vos</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div>
            <img src={SITE.logo} alt="Logo La Ruta del Mate" className="mx-auto h-56 w-56 rounded-full ring-4 ring-[color:var(--gold)]/40 shadow-warm md:mx-0" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-soft">Nuestra historia</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
              Un emprendimiento nacido en Suipacha, pensado para cada matero.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              La Ruta del Mate es un proyecto familiar que arrancó con una idea simple:
              acercar las yerbas que más nos gustan a la mesa de todos los días. Traemos
              padrones uruguayos y brasileños, probamos cada partida y elegimos las que
              nos representan.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Desde Suipacha, con la confianza de tratar directo con quien atiende: sin
              intermediarios, sin apuros — solo mate del bueno.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/catalogo" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Explorar yerbas <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contacto" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
                Cómo comprar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-soft">Destacadas</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Las favoritas de la casa</h2>
            </div>
            <Link to="/catalogo" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Ver catálogo completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <article key={p.id} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-warm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{p.brand}</span>
                  {p.tag && <span className="rounded-full bg-[color:var(--gold)]/20 px-3 py-1 text-xs font-medium text-[color:var(--gold-foreground)]">{p.tag}</span>}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.profile}</p>
                <p className="mt-1 text-xs text-muted-foreground/80">Origen: {p.origin}</p>
                <div className="mt-5 space-y-1.5">
                  {p.variants.map((v) => (
                    <div key={v.size} className="flex items-baseline justify-between border-b border-dashed border-border/70 py-1 text-sm">
                      <span className="text-foreground/80">{v.size}</span>
                      <span className="font-semibold text-foreground">{formatPrice(v.price)}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={waLink(`Hola! Quiero pedir ${p.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Pedir por WhatsApp
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-warm sm:p-12 md:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[color:var(--gold)]/25 blur-3xl" aria-hidden />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
                ¿Listo para elegir tu próxima yerba?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Escribinos por WhatsApp y te asesoramos según tu perfil de mate — suave, intenso, con hierbas o algo distinto.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={waLink("Hola! Quiero que me recomienden una yerba.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 py-3 text-sm font-semibold text-white shadow-warm hover:brightness-110"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chatear ahora
              </a>
              <Link to="/catalogo" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
