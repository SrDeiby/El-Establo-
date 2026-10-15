"use client";

import Image from "next/image";
import { useState } from "react";
import { productos, type Producto } from "@/data/content";
import Note from "./Note";

const tabs = ["Todo", "Hombre", "Mujer", "Caballo"] as const;
type Tab = (typeof tabs)[number];

const colones = (n: number) => `₡ ${n.toLocaleString("es-CR").replace(/[.,]/g, " ")}`;

export default function NewArrivals() {
  const [tab, setTab] = useState<Tab>("Todo");
  const visibles = tab === "Todo" ? productos.slice(0, 4) : productos.filter((p) => p.seccion === tab);

  return (
    <section id="tienda">
      <div className="wrap rel">
        <div className="head">
          <div>
            <span className="eyebrow">Recién llegados</span>
            <h2>
              Nuevos <em>ingresos</em>
            </h2>
          </div>
          <div className="tabs" role="tablist">
            {tabs.map((t) => (
              <button key={t} role="tab" aria-selected={t === tab} className={t === tab ? "on" : undefined} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="products">
          {visibles.map((p) => (
            <ProductCard key={p.nombre} p={p} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#" className="btn btn-dark">Ver toda la tienda →</a>
        </div>
        <Note n={5} style={{ top: -24, left: "30%" }}>
          Hoy <b>no se puede comprar en la web</b>. Una vitrina de productos con precio, talla y carrito (o “pedir por
          WhatsApp”) convierte visitas en ventas. Precios de ejemplo.
        </Note>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: Producto }) {
  return (
    <a className="prod" href="#">
      <div className="ph">
        <Image src={p.foto} alt={p.nombre} fill sizes="(max-width: 1020px) 50vw, 300px" />
        <span className={p.oferta ? "tag sale" : "tag"}>{p.tag}</span>
        <span className="quick">Agregar al carrito</span>
      </div>
      <div className="brand">{p.marca}</div>
      <h4>{p.nombre}</h4>
      <div className="price">
        {colones(p.precio)} {p.antes && <s>{colones(p.antes)}</s>}
      </div>
      <div className="swatches">
        {p.colores.map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </div>
    </a>
  );
}
