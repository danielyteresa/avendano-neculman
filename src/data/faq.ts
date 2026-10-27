import { formatCLP } from "../lib/format";
import { site } from "./site";
import type { FaqItem } from "./types";

// Preguntas frecuentes (opcional, ayuda al SEO). Las respuestas son un borrador:
// no publicar plazos sin que las abogadas los confirmen.
export const faq: FaqItem[] = [
  {
    question: "¿Cuánto cuesta la primera consulta?",
    answer: `La primera consulta tiene un valor de ${formatCLP(site.firstConsultationFee)}. En ella revisamos su caso y le explicamos sus opciones.`,
  },
  {
    question: "¿Atienden fuera de Temuco?",
    answer:
      "Sí. Atendemos por videollamada a personas de todo Chile, y de forma presencial en nuestra oficina de Temuco.",
  },
  {
    question: "¿Qué debo llevar a la primera reunión?",
    answer:
      "Su cédula de identidad y los documentos que tenga sobre su caso: contratos, notificaciones, liquidaciones o escrituras. Si no tiene nada, igual podemos conversar.",
  },
  {
    question: "¿Con quién voy a hablar?",
    answer:
      "Directamente con la abogada que llevará su caso, desde la primera reunión.",
  },
  {
    question: "¿En qué horario atienden?",
    answer:
      "De lunes a viernes, de 9:00 a 17:30. Puede escribirnos por WhatsApp en cualquier momento y le respondemos en ese horario.",
  },
];
