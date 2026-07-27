import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PRODUCTS, formatPrice, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site-layout";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — La Ruta del Mate" },
      { name: "description", content: "Yerbas Baldo, Canarias, Rei Verde (Premium, Tradicional, Clásica, Compuesta) y Sara de Coco. Precios y presentaciones." },
      { property: "og:title", content: "Catálogo — La Ruta del Mate" },
      { property: "og:description", content: "Yerbas seleccionadas: Baldo, Canarias, Rei Verde, Sara y más." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const brands = useMemo(() => ["Todas", ...Array.from(new Set(PRODUCTS.map((p) => p.brand)))], []);
  const [brand, setBrand] = useState<string>("Todas");
  const filtered = brand === "Todas" ? PRODUCTS : PRODUCTS.filter((p) => p.brand === brand);

  return (
    <>
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-soft">Catálogo</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-balance sm:text-5xl">
            Yerbas seleccionadas, mate por mate.
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Todos los precios están en pesos argentinos. Coordinamos entrega o retiro por WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setBrand(b)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  brand === b
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground/80 hover:bg-accent"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-warm">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{p.brand}</span>
                {p.tag && <span className="rounded-full bg-[color:var(--gold)]/20 px-3 py-1 text-xs font-medium text-foreground/80">{p.tag}</span>}
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight">{p.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.profile}</p>
              <p className="mt-1 text-xs text-muted-foreground/80">Origen: {p.origin}</p>

              <div className="mt-5 space-y-1.5">
                {p.variants.map((v) => (
                  <div key={v.size} className="flex items-baseline justify-between border-b border-dashed border-border/70 py-1.5 text-sm">
                    <span className="text-foreground/80">{v.size}</span>
                    <span className="font-semibold text-foreground">{formatPrice(v.price)}</span>
                  </div>
                ))}
              </div>

              <a
                href={waLink(`Hola! Quiero pedir ${p.name} (${p.variants.map((v) => v.size).join(" o ")}).`)}
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-6"
              >
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
                  <WhatsAppIcon className="h-4 w-4" /> Pedir por WhatsApp
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
