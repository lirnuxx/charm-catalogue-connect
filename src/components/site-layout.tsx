import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={SITE.logo} alt="Logo La Ruta del Mate" className="h-11 w-11 shrink-0 rounded-full ring-1 ring-border" />
          <div className="min-w-0 leading-tight">
            <p className="truncate font-display text-lg font-semibold">{SITE.name}</p>
            <p className="truncate text-xs text-muted-foreground">Suipacha · Yerbas seleccionadas</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-foreground"
              activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={waLink("Hola! Quisiera hacerte una consulta sobre las yerbas.")}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-2 text-sm font-semibold text-white shadow-warm transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink("Hola! Quisiera hacerte una consulta sobre las yerbas.")}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--whatsapp)] px-3 py-2 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex items-start gap-3">
          <img src={SITE.logo} alt="" className="h-12 w-12 rounded-full ring-1 ring-white/20" />
          <div>
            <p className="font-display text-lg font-semibold">{SITE.name}</p>
            <p className="text-sm text-primary-foreground/70">Suipacha · Buenos Aires</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Contacto</p>
          <p className="mt-2 text-sm">{SITE.owner}</p>
          <p className="text-sm text-primary-foreground/80">WhatsApp: {SITE.phone}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Seguinos</p>
          <a
            href={`https://instagram.com/${SITE.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm hover:text-[color:var(--gold)]"
          >
            <Instagram className="h-4 w-4" /> @{SITE.instagram}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.41-8.44ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.77.99 1-3.67-.24-.38a9.87 9.87 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.84 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hola! Vengo desde la web de La Ruta del Mate.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-warm ring-4 ring-white/30 transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
