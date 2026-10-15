"use client";

import { useState } from "react";

export default function Newsletter() {
  // En la maqueta no se envía a ningún lado; en la versión final se conecta al servicio de correo
  const [enviado, setEnviado] = useState(false);
  return (
    <div className="news">
      <div className="wrap">
        <div>
          <h2>
            Unite al <em>corral.</em>
          </h2>
          <p>Ofertas exclusivas, cupones de descuento y aviso de nuevos ingresos antes que nadie.</p>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEnviado(true);
            }}
          >
            <input type="email" placeholder="Tu correo electrónico" aria-label="Correo electrónico" required />
            <button type="submit">{enviado ? "¡Listo! ✓" : "Suscribirme →"}</button>
          </form>
          <small>Respetamos tu privacidad. Cero spam.</small>
        </div>
      </div>
    </div>
  );
}
