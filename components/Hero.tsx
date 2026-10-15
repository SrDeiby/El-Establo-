import Image from "next/image";
import { img } from "@/data/content";
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
          <a href="#tienda" className="btn btn-rust">Comprar ahora →</a>
          <a href="#visitanos" className="btn btn-ghost">Visitar la tienda</a>
        </div>
      </div>
      <div className="hero-meta">Desde 2007 · Tienda familiar</div>
      <Note n={1} style={{ top: 16, left: "34%" }}>
        Menú por <b>lo que el cliente busca comprar</b> (Hombre, Mujer, Botas, Sombreros…) en vez de “Quiénes somos /
        Blog”. Buscador, cuenta y carrito: la web pasa de folleto a tienda.
      </Note>
      <Note n={2} style={{ top: 150, right: 40 }}>
        Hero con <b>mensaje claro y 2 acciones</b> (comprar / visitar). Hoy el home abre con una foto borrosa y sin
        llamado a la acción.
      </Note>
    </section>
  );
}
