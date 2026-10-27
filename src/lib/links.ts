import { site } from "../data/site";

// Enlaces que se arman a partir de los datos del estudio.

/** "tel:+56948692661": al tocarlo en el celular, abre la llamada. */
export const phoneHref = `tel:${site.contact.phone.replace(/\s/g, "")}`;

export const emailHref = `mailto:${site.contact.email}`;

/** Abre WhatsApp con el mensaje ya escrito (opcional). */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

const { street, unit, city, countryName } = site.address;

/** Dirección en una línea, para mostrar: "Arturo Prat 696, oficina 321, Temuco, Chile". */
export const fullAddress = `${street}, ${unit}, ${city}, ${countryName}`;

// Para el mapa basta la calle y la ciudad: la oficina confunde a Google Maps.
const mapQuery = encodeURIComponent(`${street}, ${city}, ${countryName}`);

/** Indicaciones en Google Maps hasta la oficina. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

/** Mapa de Google para el iframe (no necesita clave de API). */
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
