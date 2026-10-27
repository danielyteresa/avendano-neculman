// Tipos compartidos por los archivos de datos. Si falta un campo,
// TypeScript avisa antes de que el error llegue al sitio.

export interface NavLink {
  label: string;
  href: string;
}

export interface OpeningHours {
  /** Texto que se muestra, ej. "Lunes a viernes". */
  label: string;
  /** Días en formato schema.org para el JSON-LD, ej. ["Monday", "Tuesday"]. */
  days: string[];
  /** Hora en formato 24 h, ej. "09:00". */
  opens: string;
  closes: string;
}

export type SocialNetwork = "facebook" | "instagram" | "tiktok";

export interface SocialLink {
  network: SocialNetwork;
  name: string;
  href: string;
  /**
   * URL completa del perfil para el JSON-LD (sameAs). Si es null, la red no
   * se incluye: Google no acepta enlaces cortos de "compartir".
   */
  profileUrl: string | null;
}

export type PracticeAreaId = "familia" | "inmobiliario" | "civil" | "laboral";

export interface PracticeArea {
  id: PracticeAreaId;
  title: string;
  /** Una línea simple, sin jerga legal. */
  summary: string;
  /** Tres casos típicos (por validar con las abogadas). */
  cases: [string, string, string];
  /** Nombre del área para schema.org (knowsAbout). */
  schemaName: string;
}

export interface TeamMember {
  name: string;
  /** Lo que se muestra bajo el nombre. */
  role: string;
  /** Cargo para el JSON-LD (jobTitle). */
  jobTitle: string;
  areas: PracticeAreaId[];
  /** 2–3 líneas en primera persona. */
  bio: string;
  photo: {
    /** Nombre del archivo en src/assets/images/. null mientras no haya foto real. */
    file: string | null;
    alt: string;
  };
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  area: PracticeAreaId;
  quote: string;
  /**
   * true = texto inventado de ejemplo. Nunca se muestra en producción
   * ni se marca como Review en el JSON-LD.
   */
  isPlaceholder: boolean;
}
