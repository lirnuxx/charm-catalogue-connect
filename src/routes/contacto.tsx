import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site-layout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — La Ruta del Mate" },
      { name: "description", content: "Contactá a Santiago Lasala por WhatsApp para pedidos, envíos y consultas sobre yerbas." },
      { property: "og:title", content: "Contacto — La Ruta del Mate" },
      { property: "og:description", content: "Escribinos por WhatsApp para pedidos y consultas." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary-soft">Contacto</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-balance sm:text-5xl">
        Hablemos de mate.
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        La forma más rápida de hacer un pedido o consultar por una yerba es por WhatsApp.
        Te respondemos directamente nosotros — sin bots, sin vueltas.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-warm sm:p-10">
          <WhatsAppIcon className="h-10 w-10 text-[color:var(--gold)]" />
          <h2 className="mt-4 font-display text-3xl font-bold">Escribinos por WhatsApp</h2>
          <p className="mt-2 text-primary-foreground/80">
            Atiende {SITE.owner} en persona. Horario recomendado: 9 a 21 hs.
          </p>
          <a
            href={waLink("Hola Santiago! Vengo desde la web de La Ruta del Mate.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 py-3 text-sm font-semibold text-white shadow-warm hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" /> Abrir chat
          </a>
          <p className="mt-4 text-sm text-primary-foreground/70">{SITE.phone}</p>
        </div>

        <ul className="space-y-4">
          <InfoRow icon={<Phone className="h-5 w-5" />} title="Teléfono / WhatsApp" value={SITE.phone} />
          <InfoRow icon={<MapPin className="h-5 w-5" />} title="Ubicación" value={SITE.location} />
          <InfoRow icon={<Clock className="h-5 w-5" />} title="Atención" value="Lunes a Sábados · 9 a 21 hs" />
          <li>
            <a
              href={`https://instagram.com/${SITE.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition hover:bg-accent"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Instagram className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Instagram</p>
                <p className="truncate text-sm font-semibold">@{SITE.instagram}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-14 rounded-3xl border border-border bg-secondary/50 p-8 sm:p-10">
        <h3 className="font-display text-2xl font-bold">Cómo comprar</h3>
        <ol className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { n: 1, t: "Elegí tu yerba", d: "Mirá el catálogo y anotá lo que te interesa." },
            { n: 2, t: "Escribinos", d: "Mandanos WhatsApp con el pedido — te confirmamos stock." },
            { n: 3, t: "Retiro o envío", d: "Coordinamos entrega en Suipacha o envío a coordinar." },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl bg-background p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--gold)] font-display font-bold text-[color:var(--gold-foreground)]">{s.n}</span>
              <p className="mt-3 font-semibold">{s.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="truncate text-sm font-semibold">{value}</p>
      </div>
    </li>
  );
}
