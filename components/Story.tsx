import Image from "next/image";
import { historia, img } from "@/data/content";
import Note from "./Note";

export default function Story() {
  return (
    <section className="story">
      <div className="wrap grid rel">
        <div className="imgs">
          <div className="shot i1">
            <Image src={img.interior} alt="Interior de la tienda" fill sizes="(max-width: 1020px) 72vw, 420px" />
          </div>
          <div className="shot i2">
            <Image src={img.fachada2007} alt="Fachada original de la tienda" fill sizes="(max-width: 1020px) 52vw, 300px" />
          </div>
          <div className="seal">
            <div>
              <b>2007</b>Negocio
              <br />
              familiar
            </div>
          </div>
        </div>
        <div>
          <span className="eyebrow">Nuestra historia</span>
          <h2>
            Una familia <em>de a caballo.</em>
          </h2>
          <p>
            Topes, cabalgatas, desfiles, polo y rodeo: los caballos siempre han estado en nuestra familia. En 2007
            abrimos una pequeña tienda en Liberia y, con los años, se convirtió en lo que somos hoy: la tienda vaquera
            de Costa Rica.
          </p>
          <p>
            Probamos líneas, marcas y materiales para saber qué funciona en nuestro clima. Por eso, lo que encontrás
            aquí está escogido, no solo importado.
          </p>
          <div className="timeline">
            {historia.map((h) => (
              <div key={h.anio}>
                <b>{h.anio}</b>
                <small>{h.texto}</small>
              </div>
            ))}
          </div>
          <a href="#" className="link-arrow">Conocé nuestra historia →</a>
        </div>
        <Note n={7} style={{ top: -30, right: 0 }}>
          Su historia ya existe, pero está enterrada en “Quiénes somos”. Un resumen visual en el home{" "}
          <b>genera cercanía y confianza</b>.
        </Note>
      </div>
    </section>
  );
}
