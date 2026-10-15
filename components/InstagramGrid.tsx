import Image from "next/image";
import { contacto, instagram } from "@/data/content";

export default function InstagramGrid() {
  return (
    <div className="insta">
      <div className="wrap">
        <div className="ihead">
          <h3>@tiendaelestablo</h3>
          <a href={contacto.instagram} className="link-arrow" target="_blank" rel="noreferrer">
            Seguinos en Instagram →
          </a>
        </div>
      </div>
      <div className="igrid">
        {instagram.map((src) => (
          <a key={src} href={contacto.instagram} target="_blank" rel="noreferrer">
            <Image src={src} alt="" fill sizes="(max-width: 1020px) 33vw, 17vw" />
          </a>
        ))}
      </div>
    </div>
  );
}
