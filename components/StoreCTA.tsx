import Image from "next/image";
import { contacto, img } from "@/data/content";
import Note from "./Note";

// Las compras se hacen en la tienda virtual conectada a su sistema de facturación
export default function StoreCTA() {
  return (
    <section className="shop-cta" id="tienda-en-linea">
      <div className="wrap rel">
        <div className="grid">
          <div className="pic">
            <Image src={img.bota} alt="Botas vaqueras en la tienda" fill sizes="(max-width: 1020px) 100vw, 560px" style={{ objectPosition: "50% 70%" }} />
          </div>
          <div className="txt">
            <span className="eyebrow">Tienda en línea</span>
            <h2>
              Comprá desde la casa, <em>con el inventario de la tienda.</em>
            </h2>
            <p>
              Botas, sombreros, ropa y todo para tu caballo, con existencias al día. Encontrá tu talla y comprá en línea
              cuando quieras.
            </p>
            <div className="btns">
              <a href={contacto.tiendaVirtual} className="btn btn-rust">Ir a la tienda en línea →</a>
              <a href={contacto.whatsapp} className="btn btn-dark" target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
            </div>
          </div>
        </div>
        <Note n={5} style={{ top: -24, right: 0 }}>
          Las compras se mantienen en <b>su tienda virtual conectada al inventario</b>. El sitio lleva a ella desde aquí,
          desde el menú y desde cada categoría, sin administrar un segundo catálogo.
        </Note>
      </div>
    </section>
  );
}
