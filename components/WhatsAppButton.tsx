import { contacto } from "@/data/content";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a href={contacto.whatsapp} className="wa" aria-label="Escribir por WhatsApp" target="_blank" rel="noreferrer">
      <WhatsAppIcon />
    </a>
  );
}
