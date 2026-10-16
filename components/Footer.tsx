import { contacto } from "@/data/content";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./icons";

const columnas = [
  { titulo: "Categorías", links: ["Moda vaquera", "Botas", "Sombreros", "Fajas", "Talabartería", "Seguridad ecuestre"] },
  { titulo: "Servicios", links: ["Tienda en línea", "Hormado de sombreros", "Visítanos"] },
  { titulo: "El Establo", links: ["Nuestra historia", "Blog del vaquero", "Contacto"] },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="logo">
              <b>Tienda El Establo</b>
              <small>La tienda vaquera de Costa Rica</small>
            </div>
            <p style={{ marginTop: 18, maxWidth: 300 }}>
              Moda western, botas, sombreros y talabartería en Liberia, Guanacaste. Desde 2007.
            </p>
            <div className="social">
              <a href={contacto.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramIcon /></a>
              <a href={contacto.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><FacebookIcon /></a>
              <a href={contacto.tiktok} aria-label="TikTok" target="_blank" rel="noreferrer"><TikTokIcon /></a>
            </div>
          </div>
          {columnas.map((c) => (
            <div key={c.titulo}>
              <h5>{c.titulo}</h5>
              <ul>
                {c.links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Tienda El Establo · Liberia, Costa Rica</span>
          <a href={contacto.tiendaVirtual}>Tienda en línea →</a>
        </div>
      </div>
    </footer>
  );
}
