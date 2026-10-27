import type { ImageMetadata } from "astro";

// Carga las fotos de src/assets/images/ para que Astro las optimice (WebP).
// Si una foto todavía no existe, getImage devuelve undefined y el componente
// muestra un espacio neutro en lugar de romper el build.
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

export function getImage(file: string | null): ImageMetadata | undefined {
  if (!file) return undefined;
  return files[`../assets/images/${file}`]?.default;
}
