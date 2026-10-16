import { BagIcon, ShieldIcon, StoreIcon, TruckIcon } from "./icons";

const items = [
  { Icon: BagIcon, titulo: "Tienda en línea", sub: "Con el inventario de la tienda" },
  { Icon: ShieldIcon, titulo: "Distribuidor autorizado", sub: "Producto 100% original" },
  { Icon: TruckIcon, titulo: "Frente a la Interamericana", sub: "Fácil de llegar, con parqueo" },
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
