# Propuesta — Home de Tienda El Establo

Maqueta del nuevo home de [tiendaelestablo.com](https://www.tiendaelestablo.com/), hecha en **Next.js 16** (App Router), **React 19** y **TypeScript**.

## Correrlo

Necesitás Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abrí <http://localhost:3000>.

Para una versión de producción: `npm run build` y luego `npm start`.

## Estructura

| Ruta | Qué tiene |
| --- | --- |
| `app/page.tsx` | El home: arma todas las secciones en orden |
| `app/layout.tsx` | Fuentes (Fraunces, Barlow, Barlow Condensed) y metadatos SEO |
| `app/globals.css` | Todos los estilos y colores de la marca (variables en `:root`) |
| `components/` | Una sección por archivo: `Hero`, `Categories`, `NewArrivals`, `HatService`, `Visit`… |
| `data/content.ts` | **Todo el contenido editable**: textos, fotos, productos, precios, marcas, contacto |
| `referencia/el-establo-home.html` | La maqueta original en un solo archivo HTML |

Para cambiar textos, productos o fotos, editá solo `data/content.ts`.

## Notas

- Las fotos se cargan desde el sitio actual de El Establo (Squarespace), así que hace falta internet.
- Los precios de los productos son **de ejemplo**.
- El botón **“✎ Notas de la propuesta”** (abajo a la izquierda) muestra notas numeradas que explican cada mejora, para presentarla a los dueños.
