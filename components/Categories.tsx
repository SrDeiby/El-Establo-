import Image from "next/image";
import { categorias, contacto } from "@/data/content";
import Note from "./Note";

export default function Categories() {
  return (
    <section id="categorias">
      <div className="wrap rel">
        <div className="head">
          <div>
            <span className="eyebrow">Comprá por categoría</span>
            <h2>
              Todo para el vaquero <em>y su caballo</em>
            </h2>
          </div>
          <p>Desde la bota para el día a día hasta la montura para la competencia. Encontrá lo que buscás en dos clics.</p>
        </div>
        <div className="cats">
          {categorias.map((c) => (
            <a key={c.titulo} className={`cat ${c.layout}`} href={contacto.tiendaVirtual}>
              <Image
                src={c.foto}
                alt=""
                fill
                sizes={c.layout === "c1" ? "(max-width: 1020px) 100vw, 620px" : "(max-width: 1020px) 50vw, 420px"}
                style={c.imgStyle}
              />
              <div className="lbl">
                <div>
                  <small>{c.sub}</small>
                  <h3>{c.titulo}</h3>
                </div>
                {!c.sinFlecha && <span className="arr">→</span>}
              </div>
            </a>
          ))}
        </div>
        <Note n={3} style={{ top: -20, right: 0 }}>
          <b>7 categorías</b> con su propia foto. Cada una lleva directo a esa sección de <b>su tienda en línea</b>.
        </Note>
      </div>
    </section>
  );
}
