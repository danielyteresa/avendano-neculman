import type { PracticeArea } from "./types";

// Áreas de práctica. Los casos típicos son una propuesta: validarlos con las abogadas.
export const practiceAreas: PracticeArea[] = [
  {
    id: "familia",
    title: "Familia",
    summary: "Le acompañamos en los cambios más delicados de su familia.",
    cases: [
      "Pensión de alimentos",
      "Divorcio",
      "Cuidado personal y relación directa",
    ],
    schemaName: "Derecho de familia",
  },
  {
    id: "inmobiliario",
    title: "Inmobiliario",
    summary: "Le ayudamos a comprar, vender o arrendar con tranquilidad.",
    cases: ["Compraventa", "Estudio de títulos", "Arriendos"],
    schemaName: "Derecho inmobiliario",
  },
  {
    id: "civil",
    title: "Civil",
    summary: "Ordenamos herencias, contratos y deudas pendientes.",
    cases: ["Herencias y posesión efectiva", "Contratos", "Cobranzas"],
    schemaName: "Derecho civil",
  },
  {
    id: "laboral",
    title: "Laboral",
    summary:
      "Revisamos su caso si terminó su trabajo o no le pagaron lo justo.",
    cases: ["Despidos", "Finiquitos", "Autodespido"],
    schemaName: "Derecho laboral",
  },
];
