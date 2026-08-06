import logoRm from "@/assets/logo-rm.jpg";
import imgBaldo from "@/assets/yerbas/baldo.png";
import imgCanarias from "@/assets/yerbas/canarias.png";
import imgCanariasEspecial from "@/assets/yerbas/canarias-especial.png";
import imgReiPremium from "@/assets/yerbas/rei-verde-premium.png";
import imgReiTradicional from "@/assets/yerbas/rei-verde-tradicional.png";
import imgReiClasica from "@/assets/yerbas/rei-verde-clasica.png";
import imgReiCompuesta from "@/assets/yerbas/rei-verde-compuesta.png";
import imgSaraCoco from "@/assets/yerbas/sara-coco.png";
import imgSaraTradicional from "@/assets/yerbas/sara-tradicional.png";
import imgMatera from "@/assets/yerbas/matera-negra.jpg";
import imgEstuche from "@/assets/yerbas/estuche-portamate.jpg";
import imgYerbera from "@/assets/yerbas/yerbera-azucarera.jpg";
import imgTermo from "@/assets/yerbas/termo.jpg";



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

export const CATEGORIES = [
  "Yerbas",
  "Termos",
  "Yerberas y azucareras",
  "Estuches, fundas y portamates",
  "Materas",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: Category;
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
    category: "Yerbas",
    origin: "Uruguay (producida en Brasil)",
    profile: "Equilibrado y aromático",
    variants: [
      { size: "1 kg", price: 11500 },
      { size: "500 g", price: 7500 },
    ],
    tag: "Clásico",
    image: imgBaldo,
  },
  {
    id: "canarias",
    name: "Canarias",
    brand: "Canarias",
    category: "Yerbas",
    origin: "Uruguay (producida en Brasil)",
    profile: "Intenso y duradero",
    variants: [{ size: "1 kg", price: 11000 }],
    tag: "Intenso",
    image: imgCanarias,
  },
  {
    id: "canarias-especial",
    name: "Canarias Edición Especial",
    brand: "Canarias",
    category: "Yerbas",
    origin: "Uruguay (producida en Brasil)",
    profile: "Intenso, fino y de edición limitada",
    variants: [{ size: "500 g", price: 7500 }],
    tag: "Especial",
    image: imgCanariasEspecial,
  },
  {
    id: "rei-verde-premium",
    name: "Rei Verde Premium",
    brand: "Rei Verde",
    category: "Yerbas",
    origin: "Brasil / Uruguay",
    profile: "Complejo, ahumado y cremoso",
    variants: [
      { size: "1 kg", price: 11000 },
      { size: "500 g", price: 7500 },
    ],
    tag: "Premium",
    image: imgReiPremium,
  },
  {
    id: "rei-verde-tradicional",
    name: "Rei Verde Tradicional",
    brand: "Rei Verde",
    category: "Yerbas",
    origin: "Brasil / Uruguay — padrón uruguayo",
    profile: "Intenso, amargo y con cuerpo",
    variants: [{ size: "1 kg", price: 10500 }],
    image: imgReiTradicional,
  },
  {
    id: "rei-verde-clasica",
    name: "Rei Verde Clásica",
    brand: "Rei Verde",
    category: "Yerbas",
    origin: "Brasil / Uruguay — padrón uruguayo",
    profile: "Equilibrado, parejo y sutilmente ahumado",
    variants: [
      { size: "1 kg", price: 10000 },
      { size: "500 g", price: 7500 },
    ],
    image: imgReiClasica,
  },
  {
    id: "rei-verde-compuesta",
    name: "Rei Verde Compuesta",
    brand: "Rei Verde",
    category: "Yerbas",
    origin: "Brasil / Uruguay",
    profile: "Herbal, digestivo y refrescante",
    variants: [{ size: "500 g", price: 7500 }],
    tag: "Con hierbas",
    image: imgReiCompuesta,
  },
  {
    id: "sara-tradicional",
    name: "Sara Tradicional",
    brand: "Sara",
    category: "Yerbas",
    origin: "Uruguay (producida en Brasil)",
    profile: "Clásico, robusto y duradero",
    variants: [{ size: "500 g", price: 7500 }],
    tag: "Tradicional",
    image: imgSaraTradicional,
  },
  {
    id: "sara-coco",
    name: "Sara de Coco",
    brand: "Sara",
    category: "Yerbas",
    origin: "Uruguay (producida en Brasil)",
    profile: "Innovador, suave y aromático",
    variants: [{ size: "500 g", price: 8900 }],
    tag: "Novedad",
    image: imgSaraCoco,
  },
  {
    id: "matera-bolso-negro",
    name: "Matera bolso negro",
    brand: "Accesorios",
    category: "Materas",
    origin: "Suipacha, Argentina",
    profile: "Bolso matero para llevar termo, mate y yerbera",
    variants: [{ size: "Único", price: 20000 }],
    image: imgMatera,
  },
  {
    id: "estuche-portamate",
    name: "Estuche funda portamate",
    brand: "Accesorios",
    category: "Estuches, fundas y portamates",
    origin: "Suipacha, Argentina",
    profile: "Funda protectora para trasladar tu mate",
    variants: [{ size: "Único", price: 6500 }],
    image: imgEstuche,
  },
  {
    id: "yerbera-azucarera",
    name: "Yerbera y azucarera",
    brand: "Accesorios",
    category: "Yerberas y azucareras",
    origin: "Suipacha, Argentina",
    profile: "Set de yerbera y azucarera para tu ronda de mate",
    variants: [{ size: "Set", price: 10000 }],
    image: imgYerbera,
  },
  {
    id: "termo",
    name: "Termo",
    brand: "Accesorios",
    category: "Termos",
    origin: "Suipacha, Argentina",
    profile: "Termo con excelente conservación del calor",
    variants: [{ size: "Único", price: 20000 }],
    image: imgTermo,
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
