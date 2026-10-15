import { anuncios } from "@/data/content";

export default function AnnouncementBar() {
  // Se duplica la lista para que el carrusel sea continuo
  const items = [...anuncios, ...anuncios];
  return (
    <div className="announce" aria-label="Anuncios">
      <div className="track">
        {items.map((a, i) => (
          <span key={i}>{a}</span>
        ))}
      </div>
    </div>
  );
}
