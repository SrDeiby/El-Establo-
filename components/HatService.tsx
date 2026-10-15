import Image from "next/image";
import { contacto, img, servicios } from "@/data/content";
import Note from "./Note";

export default function HatService() {
  return (
    <section className="service rel">
      <div className="grid">
        <div className="pic">
          <Image src={img.sombrero} alt="Sombrero vaquero listo para hormar" fill sizes="(max-width: 1020px) 100vw, 50vw" style={{ objectPosition: "50% 45%" }} />
        </div>
        <div className="txt">
          <span className="eyebrow" style={{ color: "#f0b48f" }}>Servicio en tienda</span>
          <h2>
            Tu sombrero, <em>a tu medida.</em>
          </h2>
          <p>
            Nuestro servicio de hormado le da a tu sombrero la forma que va con vos. Traelo nuevo o con años de tope
            encima: lo dejamos como debe ser.
          </p>
          <ul>
            {servicios.map((s, i) => (
              <li key={s.titulo}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{s.titulo}</b>
                  <small>{s.desc}</small>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <a href={contacto.whatsapp} className="btn btn-rust">Agendar por WhatsApp →</a>
          </div>
        </div>
      </div>
      <Note n={6} style={{ top: 30, right: 30 }}>
        El servicio de <b>hormado de sombreros</b> es un diferenciador que hoy casi no se ve. Merece su propia sección
        con reserva directa.
      </Note>
    </section>
  );
}
