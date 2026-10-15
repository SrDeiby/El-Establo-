import type { MetadataRoute } from "next";

// Es una propuesta: no debe aparecer en buscadores ni competir con el sitio oficial
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
