import Image from "next/image";
import { contacto, img } from "@/data/content";
import Note from "./Note";

export default function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <Image src={img.hero} alt="Modelo con sombrero vaquero en el campo guanacasteco" fill priority sizes="100vw" />
      <div className="wrap">
        <span className="eyebrow">Nueva temporada · Liberia, Guanacaste</span>
        <h1>
          Hecho para el campo, <em>listo para el tope.</em>
        </h1>
        <p>
          Botas, sombreros, ropa western y todo para tu caballo. Las mejores marcas de Estados Unidos, escogidas para
          el clima y el gusto de Costa Rica.
        </p>
        <div className="ctas">
          <a href={contacto.tiendaVirtual} className="btn btn-rust">Ver la tienda en línea →</a>
          <a href="#visitanos" className="btn btn-ghost">Visitar la tienda</a>
        </div>
      </div>
      <div className="hero-meta">Desde 2007 · Tienda familiar</div>
      <Note n={1} style={{ top: 16, left: "34%" }}>
        Menú claro con todo lo que el cliente busca saber, y un botón siempre visible hacia <b>su tienda en línea</b>.
      </Note>
      <Note n={2} style={{ top: 150, right: 40 }}>
        Portada con sus propias fotos, un <b>mensaje claro y 2 acciones</b>: ir a la tienda en línea o visitar la tienda en Liberia.
      </Note>
    </section>
  );
}
