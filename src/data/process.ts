import type { ProcessStep } from "./types";

// Sección "Cómo trabajamos": tres pasos para quien nunca ha ido a un abogado.
export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Nos escribe",
    description:
      "Por WhatsApp o por el formulario. Con unas líneas sobre su caso basta.",
  },
  {
    number: 2,
    title: "Primera reunión, presencial u online",
    description:
      "En nuestra oficina de Temuco o por videollamada. Escuchamos su caso y le explicamos sus opciones.",
  },
  {
    number: 3,
    title: "Plan claro y seguimiento",
    description:
      "Le decimos qué haremos, cuánto tomará y le mantenemos al tanto de cada avance.",
  },
];
