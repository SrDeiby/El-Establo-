import { ReturnIcon, ShieldIcon, StoreIcon, TruckIcon } from "./icons";

const items = [
  { Icon: TruckIcon, titulo: "Envíos a todo el país", sub: "Correos de CR y mensajería" },
  { Icon: ShieldIcon, titulo: "Distribuidor autorizado", sub: "Producto 100% original" },
  { Icon: ReturnIcon, titulo: "Cambios de talla", sub: "Fácil y sin complicaciones" },
  { Icon: StoreIcon, titulo: "+18 años", sub: "En la industria vaquera" },
];

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="wrap">
        {items.map(({ Icon, titulo, sub }) => (
          <div className="item" key={titulo}>
            <Icon />
            <div>
              <b>{titulo}</b>
              <small>{sub}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
