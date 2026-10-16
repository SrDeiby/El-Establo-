import { contacto, menu } from "@/data/content";
import Logo from "./Logo";
import { BagIcon, MenuIcon } from "./icons";

export default function Header() {
  return (
    <header>
      <div className="wrap nav rel">
        <Logo />
        <nav className="menu">
          {menu.map((m) => (
            <a key={m.label} href={m.href}>
              {m.label}
            </a>
          ))}
        </nav>
        <div className="icons">
          <a href={contacto.tiendaVirtual} className="btn btn-rust btn-sm">
            <BagIcon />
            <span className="hide-sm">Tienda en línea</span>
          </a>
          <button aria-label="Menú" className="burger"><MenuIcon /></button>
        </div>
      </div>
    </header>
  );
}
