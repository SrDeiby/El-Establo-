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
        Ser distribuidores autorizados de estas marcas genera mucha confianza, así que van al frente, cada una{" "}
        <b>clickeable a sus productos en la tienda en línea</b> (con logos oficiales en la versión final).
      </Note>
    </div>
  );
}
