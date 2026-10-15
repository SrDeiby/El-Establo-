import { menu } from "@/data/content";
import Logo from "./Logo";
import { BagIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from "./icons";

export default function Header() {
  return (
    <header>
      <div className="wrap nav rel">
        <Logo />
        <nav className="menu">
          {menu.map((m) => (
            <a key={m.label} href={m.href} className={m.hot ? "hot" : undefined}>
              {m.label}
            </a>
          ))}
        </nav>
        <div className="icons">
          <button aria-label="Buscar"><SearchIcon /></button>
          <button aria-label="Cuenta" className="hide-sm"><UserIcon /></button>
          <button aria-label="Favoritos" className="hide-sm"><HeartIcon /></button>
          <button aria-label="Carrito">
            <BagIcon />
            <span className="badge">2</span>
          </button>
          <button aria-label="Menú" className="burger"><MenuIcon /></button>
        </div>
      </div>
    </header>
  );
}
