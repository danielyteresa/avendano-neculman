// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio: la usan el sitemap, el JSON-LD y las etiquetas para redes.
  // Nombre provisorio en Netlify. Cuando el estudio compre su dominio (.cl o .com), cámbiala aquí.
  site: "https://asesoriajuridicatco.netlify.app",
  // La página de gracias del formulario no se incluye en el sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes("/gracias") })],
  // Astro descarga las fuentes de Google y las sirve desde tu propio sitio,
  // con font-display: swap y una fuente de respaldo ajustada para evitar saltos.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Cormorant Garamond",
      cssVariable: "--font-cormorant",
      // Solo pesos medios y gruesos: en 300–400 la letra se ve demasiado delgada.
      weights: ["500 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
      display: "swap",
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
      display: "swap",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
