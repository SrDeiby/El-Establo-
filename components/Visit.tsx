import { contacto } from "@/data/content";
import { ClockIcon, PhoneIcon, PinIcon } from "./icons";
import Note from "./Note";
import OpenNow from "./OpenNow";

export default function Visit() {
  return (
    <section className="visit" id="visitanos">
      <div className="wrap rel">
        <div className="grid">
          <div className="info">
            <span className="eyebrow">Visitanos</span>
            <h2>
              Te esperamos <em>en Liberia.</em>
            </h2>
            <div className="vrow">
              <ClockIcon />
              <div>
                <b>Horario <OpenNow /></b>
                {contacto.horario}
              </div>
            </div>
            <div className="vrow">
              <PinIcon />
              <div>
                <b>Ubicación</b>
                {contacto.direccion}
              </div>
            </div>
            <div className="vrow">
              <PhoneIcon />
              <div>
                <b>Contacto</b>
                {contacto.telefono} · {contacto.email}
              </div>
            </div>
            <div className="perks">
              <span>❄ Aire acondicionado</span>
              <span>3 vestidores</span>
              <span>Parqueo</span>
            </div>
            <div className="btns">
              <a href={contacto.waze} className="btn btn-dark" target="_blank" rel="noreferrer">Abrir en Waze</a>
              <a href={contacto.whatsapp} className="btn btn-rust" target="_blank" rel="noreferrer">Escribinos</a>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Mapa Tienda El Establo"
              src="https://maps.google.com/maps?q=Tienda%20El%20Establo%20Liberia%20Costa%20Rica&z=14&output=embed"
              loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, filter: "sepia(.25) saturate(.85)" }}
            />
            <div className="card">
              <div>
                <b>Tienda El Establo</b>
                <small>Liberia, Guanacaste · Frente a la Interamericana</small>
              </div>
              <span>→</span>
            </div>
          </div>
        </div>
        <Note n={8} style={{ top: -28, left: 24 }}>
          Sus datos de contacto, ahora <b>a un toque</b>: indicador de “abierto ahora”, botón a Waze, mapa y
          WhatsApp.
        </Note>
      </div>
    </section>
  );
}
