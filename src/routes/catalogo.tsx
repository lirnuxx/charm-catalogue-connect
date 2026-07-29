import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES, formatPrice, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site-layout";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — La Ruta del Mate" },
      {
        name: "description",
        content:
          "Yerbas, termos, materas, yerberas y azucareras, estuches y portamates. Precios y presentaciones.",
      },
      { property: "og:title", content: "Catálogo — La Ruta del Mate" },
      {
        property: "og:description",
        content: "Yerbas seleccionadas y accesorios materos: termos, materas, yerberas y más.",
      },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const categories = useMemo(() => {
    const used = new Set(PRODUCTS.map((p) => p.category));
    return ["Todo", ...CATEGORIES.filter((c) => used.has(c))];
  }, []);
  const [category, setCategory] = useState<string>("Todo");
  const [loading, setLoading] = useState(false);
  const filtered =
    category === "Todo" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  const selectCategory = (c: string) => {
    if (c === category) return;
    setLoading(true);
    setCategory(c);
    setTimeout(() => setLoading(false), 350);
  };

  return (
    <>
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-soft">
            Catálogo
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-balance sm:text-5xl">
            Yerbas y accesorios, mate por mate.
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Todos los precios están en pesos argentinos. Coordinamos entrega o retiro por WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => selectCategory(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground/80 hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: Math.max(3, filtered.length) }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] w-full rm-skeleton" />
                <div className="p-6">
                  <div className="h-7 w-2/3 rounded rm-skeleton" />
                  <div className="mt-3 h-4 w-1/2 rounded rm-skeleton" />
                  <div className="mt-6 space-y-2">
                    <div className="h-4 w-full rounded rm-skeleton" />
                    <div className="h-4 w-full rounded rm-skeleton" />
                  </div>
                  <div className="mt-6 h-10 w-full rounded-full rm-skeleton" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div key={category} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, idx) => (
              <article
                key={p.id}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-warm rm-anim-fade-up"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/60 to-background">
                  <img
                    src={p.image}
                    alt={`Paquete de yerba ${p.name}`}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur">
                      {p.brand}
                    </span>
                    {p.tag && (
                      <span className="rounded-full bg-[color:var(--gold)]/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                        {p.tag}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-2xl font-semibold leading-tight">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.profile}</p>
                  <p className="mt-1 text-xs text-muted-foreground/80">Origen: {p.origin}</p>

                  <div className="mt-5 space-y-1.5">
                    {p.variants.map((v) => (
                      <div
                        key={v.size}
                        className="flex items-baseline justify-between border-b border-dashed border-border/70 py-1.5 text-sm"
                      >
                        <span className="text-foreground/80">{v.size}</span>
                        <span className="font-semibold text-foreground">
                          {formatPrice(v.price)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={waLink(
                      `Hola! Quiero pedir ${p.name} (${p.variants.map((v) => v.size).join(" o ")}).`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto pt-6"
                  >
                    <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
                      <WhatsAppIcon className="h-4 w-4" /> Pedir por WhatsApp
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
