import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-barlow" });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Tienda El Establo — La tienda vaquera de Costa Rica",
  description:
    "Botas, sombreros, ropa western y talabartería en Liberia, Guanacaste. Distribuidores autorizados de Ariat, Justin, Hooey, Resistol y más.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
