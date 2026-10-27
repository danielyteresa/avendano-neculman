import type { Testimonial } from "./types";

/*
 * TESTIMONIOS DE EJEMPLO: son textos inventados para ver el diseño.
 * - No son reales y nunca se publican como tales.
 * - Solo se muestran en `npm run dev`, con la etiqueta "Ejemplo".
 * - Nunca se marcan como Review en el JSON-LD.
 * Cuando haya testimonios reales con autorización escrita, reemplazarlos,
 * poner isPlaceholder: false y activar site.showTestimonials.
 */
const allTestimonials: Testimonial[] = [
  {
    name: "Nombre de ejemplo",
    area: "familia",
    quote:
      "Texto de ejemplo: aquí irá la experiencia real de un cliente con su caso de familia.",
    isPlaceholder: true,
  },
  {
    name: "Nombre de ejemplo",
    area: "inmobiliario",
    quote:
      "Texto de ejemplo: aquí irá la experiencia real de un cliente que compró o vendió una propiedad.",
    isPlaceholder: true,
  },
  {
    name: "Nombre de ejemplo",
    area: "laboral",
    quote:
      "Texto de ejemplo: aquí irá la experiencia real de un cliente con un caso laboral.",
    isPlaceholder: true,
  },
];

/** En producción se filtran los de ejemplo, aunque alguien active showTestimonials por error. */
export const testimonials: Testimonial[] = import.meta.env.PROD
  ? allTestimonials.filter((t) => !t.isPlaceholder)
  : allTestimonials;
