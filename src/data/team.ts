import type { TeamMember } from "./types";

// Equipo del estudio. Las biografías son un borrador: que cada abogada apruebe la suya.
export const team: TeamMember[] = [
  {
    name: "Laura Avendaño",
    role: "Abogada de familia",
    jobTitle: "Abogada de familia",
    areas: ["familia"],
    bio: "Sé que los temas de familia se viven con preocupación. Mi trabajo es explicarle sus opciones con claridad y acompañarle en cada etapa, sin que tenga que adivinar qué viene después.",
    photo: {
      // Poner aquí el archivo cuando llegue la foto real (ej. "laura-avendano.jpg").
      file: null,
      alt: "Retrato de Laura Avendaño, abogada de familia",
    },
  },
  {
    name: "Teresa Neculman",
    role: "Abogada civilista, especialista en inmobiliario",
    jobTitle: "Abogada civilista, especialista en inmobiliario",
    areas: ["civil", "inmobiliario"],
    bio: "Antes de firmar, reviso cada papel para que usted no tenga sorpresas. Me dedico a herencias, contratos y propiedades, y le cuento en simple qué hacemos y por qué.",
    photo: {
      file: null,
      alt: "Retrato de Teresa Neculman, abogada civilista",
    },
  },
];
