"use client";

import { useEffect, useState } from "react";

// Lunes a sábado, 8:30–12:00 y 13:00–18:00, hora de Costa Rica
function estaAbierto(fecha = new Date()) {
  const cr = new Date(fecha.toLocaleString("en-US", { timeZone: "America/Costa_Rica" }));
  const dia = cr.getDay();
  const min = cr.getHours() * 60 + cr.getMinutes();
  return dia >= 1 && dia <= 6 && ((min >= 510 && min < 720) || (min >= 780 && min < 1080));
}

export default function OpenNow() {
  // Se calcula en el navegador para no depender de la hora del servidor
  const [abierto, setAbierto] = useState<boolean | null>(null);
  useEffect(() => {
    setAbierto(estaAbierto());
    const id = setInterval(() => setAbierto(estaAbierto()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (abierto === null) return null;
  return <span className={abierto ? "open-now" : "open-now closed"}>{abierto ? "Abierto ahora" : "Cerrado ahora"}</span>;
}
