import type { CSSProperties } from "react";

// Contenido del home. Todo lo editable (textos, fotos, productos, marcas) vive aquí.

const CDN = "https://images.squarespace-cdn.com/content/v1/64cc544c5f05254218e0e2f7";

export const img = {
  hero: `${CDN}/b1291c1f-d8e9-4f62-b6a0-3464b95e580c/DSC08606.jpg`,
  pareja: `${CDN}/1715650391959-YM41LX7EEAM3GAC9VZMJ/Artboard+1-100.jpg`,
  bota: `${CDN}/1780089956140-4GSXPUPLTZ9J5GTEXPDR/image-asset.jpeg`,
  sombrero: `${CDN}/1781106060291-CGFGHONET1ZG9DT0JK97/image-asset.jpeg`,
  faja: `${CDN}/1781225853034-E831AH8WNXRAWLUNX7Z2/image-asset.jpeg`,
  caballo: `${CDN}/1780245488532-CL4HXQPTL7EZ4M004CBT/image-asset.jpeg`,
  jinete: `${CDN}/1694069163665-4XC0OSUPUFRMGI9UIIA1/779017273.jpg`,
  productos: `${CDN}/1781045667849-YO23AYPNHDRHU4ZJGQNW/image-asset.jpeg`,
  interior: `${CDN}/a02c7bed-7ecd-4b34-9813-33f8553d0fcb/C33F1A7B-3B66-47F9-B6C7-93B20F27E234.JPEG`,
  fachada2007: `${CDN}/bfe9b4f8-6d63-4cb5-9625-924b5dd986f2/526645_10150994607449737_1107109125_n.jpg`,
  troxel: `${CDN}/1726953823210-5Z22X432LV7ZSVYYE3L3/Portada+Troxel+3.jpg`,
  faja2: `${CDN}/cfc63783-d59b-4f18-a978-3020d15681ba/DSC08376+%282%29.jpg`,
  hocico: `${CDN}/e89ba34b-90d1-4d15-a33c-2a8c2aeb0354/horse-nose-and-bridle-2022-10-24-18-42-05-utc.jpg`,
};

export const contacto = {
  telefono: "+506 8350 9640",
  whatsapp: "https://wa.me/50683509640",
  email: "gerencia@tiendaelestablo.com",
  direccion: "1.6 km al norte de Purdy Motors, Liberia. Frente a la Carretera Interamericana.",
  horario: "Lunes a sábado · 8:30 a.m. – 12:00 m.d. y 1:00 – 6:00 p.m.",
  waze: "https://waze.com/ul?q=Tienda%20el%20Establo%20Liberia",
  instagram: "https://instagram.com/tiendaelestablo",
  facebook: "https://www.facebook.com/tiendaelestablo",
  tiktok: "https://www.tiktok.com/@tiendaelestablo",
};

export const anuncios = [
  "Envíos a todo Costa Rica",
  `Compra por WhatsApp · ${contacto.telefono}`,
  "Liberia, Guanacaste · Frente a la Interamericana",
  "Distribuidores autorizados Ariat · Justin · Hooey",
];

export const menu = [
  { label: "Hombre", href: "#tienda" },
  { label: "Mujer", href: "#tienda" },
  { label: "Niños", href: "#tienda" },
  { label: "Botas", href: "#categorias" },
  { label: "Sombreros", href: "#categorias" },
  { label: "Talabartería", href: "#categorias" },
  { label: "Marcas", href: "#marcas" },
  { label: "Ofertas", href: "#tienda", hot: true },
];

export type Categoria = {
  titulo: string;
  sub: string;
  foto: string;
  layout: "c1" | "c2" | "c3" | "c4" | "c5" | "c6" | "c7";
  imgStyle?: CSSProperties;
  sinFlecha?: boolean;
};

export const categorias: Categoria[] = [
  { titulo: "Moda vaquera", sub: "Hombre · Mujer · Niños", foto: img.pareja, layout: "c1",
    imgStyle: { objectPosition: "100% 30%", transformOrigin: "85% 40%", scale: "1.18" } },
  { titulo: "Botas", sub: "Ariat · Justin · Twisted X", foto: img.bota, layout: "c2", imgStyle: { objectPosition: "50% 70%" } },
  { titulo: "Sombreros", sub: "Fieltro · Paja", foto: img.sombrero, layout: "c3" },
  { titulo: "Fajas", sub: "Hebillas", foto: img.faja, layout: "c4", sinFlecha: true },
  { titulo: "Talabartería", sub: "Monturas · Cabezadas · Riendas", foto: img.caballo, layout: "c5" },
  { titulo: "Seguridad ecuestre", sub: "Cascos Troxel · Protectores", foto: img.jinete, layout: "c6" },
  { titulo: "Sogas y rodeo", sub: "Cactus Ropes · Classic Equine", foto: img.productos, layout: "c7" },
];

export const marcas = [
  "Ariat", "Justin", "Hooey", "Resistol", "Pro Hats", "Twisted X", "Wrangler", "Rock & Roll",
  "Panhandle", "Montana Silversmiths", "Troxel", "Cactus Ropes", "Classic Equine", "Red Dirt", "Lost Calf",
];

export type Producto = {
  marca: string;
  nombre: string;
  precio: number;
  antes?: number;
  tag: string;
  oferta?: boolean;
  foto: string;
  colores: string[];
  seccion: "Hombre" | "Mujer" | "Caballo";
};

// Precios de ejemplo para la propuesta
export const productos: Producto[] = [
  { marca: "Ariat", nombre: "Bota western de cuero, punta cuadrada", precio: 129900, tag: "Nuevo", foto: img.bota,
    colores: ["#5a3a22", "#1f1a17", "#a0764e"], seccion: "Hombre" },
  { marca: "Resistol", nombre: "Sombrero de fieltro 6X, ala 4”", precio: 98500, tag: "Más vendido", foto: img.sombrero,
    colores: ["#e9e2d4", "#2b2522"], seccion: "Hombre" },
  { marca: "Twisted X", nombre: "Faja de cuero tallada a mano", precio: 36000, antes: 45000, tag: "-20%", oferta: true,
    foto: img.faja, colores: ["#8a5530", "#3c2516"], seccion: "Mujer" },
  { marca: "Classic Equine", nombre: "Cabezada y pechera de cuero", precio: 42500, tag: "Nuevo", foto: img.hocico,
    colores: ["#3c2516", "#7b1f22"], seccion: "Caballo" },
  { marca: "Hooey", nombre: "Set western: camisa + accesorios", precio: 54900, tag: "Nuevo", foto: img.productos,
    colores: ["#7b1f22", "#2f4c6e", "#d8cdb8"], seccion: "Mujer" },
  { marca: "Cactus Saddlery", nombre: "Montura de trabajo, árbol 15”", precio: 685000, tag: "Pedido especial", foto: img.caballo,
    colores: ["#8a5530", "#5a3a22"], seccion: "Caballo" },
];

export const servicios = [
  { titulo: "Hormado", desc: "Forma de copa y ala a tu estilo" },
  { titulo: "Limpieza", desc: "Fieltro y paja, como nuevo" },
  { titulo: "Open Crown", desc: "Copa abierta personalizada" },
  { titulo: "Asesoría", desc: "Talla, material y estilo ideal" },
];

export const historia = [
  { anio: "2007", texto: "Abrimos en Liberia" },
  { anio: "2012", texto: "Primera remodelación" },
  { anio: "2020", texto: "Ventas en línea" },
  { anio: "Hoy", texto: "A/C, 3 vestidores y +15 marcas" },
];

export const posts = [
  { titulo: "Cascos Troxel en Costa Rica", meta: "Seguridad · 21 sep", foto: img.troxel,
    resumen: "La marca líder en cascos ecuestres de EE. UU. ya está en nuestra tienda." },
  { titulo: "Pro Hats 🇨🇷", meta: "Marcas · 13 may", foto: img.pareja,
    resumen: "Una de las marcas de gorras con mayor crecimiento de los últimos años." },
  { titulo: "La cultura western", meta: "Cultura · 25 dic", foto: img.jinete,
    resumen: "Hablemos de la cultura del viejo oeste, la razón de ser de este proyecto." },
];

export const instagram = [img.faja2, img.caballo, img.sombrero, img.hocico, img.bota, img.hero];
