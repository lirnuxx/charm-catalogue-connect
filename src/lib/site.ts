import logoRm from "@/assets/logo-rm.jpg";
import imgBaldo from "@/assets/yerbas/baldo.png";
import imgCanarias from "@/assets/yerbas/canarias.png";
import imgReiPremium from "@/assets/yerbas/rei-verde-premium.png";
import imgReiTradicional from "@/assets/yerbas/rei-verde-tradicional.png";
import imgReiClasica from "@/assets/yerbas/rei-verde-clasica.png";
import imgReiCompuesta from "@/assets/yerbas/rei-verde-compuesta.png";
import imgSaraCoco from "@/assets/yerbas/sara-coco.png";

export const SITE = {
  name: "La Ruta del Mate",
  location: "Suipacha, Buenos Aires",
  owner: "Santiago Lasala",
  phone: "2324-624885",
  whatsapp: "5492324624885",
  instagram: "larutadelmate.suipacha",
  logo: logoRm,
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export type Product = {
  id: string;
  name: string;
  brand: string;
  origin: string;
  profile: string;
  variants: { size: string; price: number }[];
  tag?: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "baldo",
    name: "Baldo",
    brand: "Baldo",
    origin: "Uruguay (producida en Brasil)",
    profile: "Equilibrado y aromático",
    variants: [
      { size: "1 kg", price: 11500 },
      { size: "500 g", price: 7000 },
    ],
    tag: "Clásico",
    image: imgBaldo,
  },
  {
    id: "canarias",
    name: "Canarias",
    brand: "Canarias",
    origin: "Uruguay (producida en Brasil)",
    profile: "Intenso y duradero",
    variants: [{ size: "1 kg", price: 11000 }],
    tag: "Intenso",
    image: imgCanarias,
  },
  {
    id: "rei-verde-premium",
    name: "Rei Verde Premium",
    brand: "Rei Verde",
    origin: "Brasil / Uruguay",
    profile: "Complejo, ahumado y cremoso",
    variants: [
      { size: "1 kg", price: 11000 },
      { size: "500 g", price: 7000 },
    ],
    tag: "Premium",
    image: imgReiPremium,
  },
  {
    id: "rei-verde-tradicional",
    name: "Rei Verde Tradicional",
    brand: "Rei Verde",
    origin: "Brasil / Uruguay — padrón uruguayo",
    profile: "Intenso, amargo y con cuerpo",
    variants: [{ size: "1 kg", price: 10500 }],
    image: imgReiTradicional,
  },
  {
    id: "rei-verde-clasica",
    name: "Rei Verde Clásica",
    brand: "Rei Verde",
    origin: "Brasil / Uruguay — padrón uruguayo",
    profile: "Equilibrado, parejo y sutilmente ahumado",
    variants: [
      { size: "1 kg", price: 10000 },
      { size: "500 g", price: 6000 },
    ],
    image: imgReiClasica,
  },
  {
    id: "rei-verde-compuesta",
    name: "Rei Verde Compuesta",
    brand: "Rei Verde",
    origin: "Brasil / Uruguay",
    profile: "Herbal, digestivo y refrescante",
    variants: [{ size: "500 g", price: 7500 }],
    tag: "Con hierbas",
    image: imgReiCompuesta,
  },
  {
    id: "sara-coco",
    name: "Sara de Coco",
    brand: "Sara",
    origin: "Uruguay (producida en Brasil)",
    profile: "Innovador, suave y aromático",
    variants: [{ size: "500 g", price: 8900 }],
    tag: "Novedad",
    image: imgSaraCoco,
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
