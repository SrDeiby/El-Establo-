import { marcas } from "@/data/content";
import Note from "./Note";

export default function Brands() {
  const items = [...marcas, ...marcas];
  return (
    <div className="brands rel" id="marcas">
      <p className="eyebrow">Distribuidores autorizados</p>
      <div className="brand-track">
        {items.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
      <Note n={4} style={{ top: 10, left: 24 }}>
        Las marcas son su mayor argumento de confianza y hoy están escondidas en una subpágina. Aquí van al frente, cada
        una <b>clickeable a su colección</b> (con logos oficiales en la versión final).
      </Note>
    </div>
  );
}
