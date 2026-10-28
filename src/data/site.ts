import type { NavLink, OpeningHours, SocialLink } from "./types";

// Datos generales del estudio. Son datos reales: cualquier cambio debe
// coincidir con la ficha de Google Business Profile, escrito igual.
export const site = {
  name: "Avendaño & Neculman",
  fullName: "Avendaño & Neculman · Asesoría Jurídica Temuco",
  /** Línea en versalitas bajo el nombre, como en el logo. */
  tagline: "Asesoría Jurídica Temuco",
  // Eslogan propuesto: por validar con las abogadas.
  slogan: "Asesoría jurídica cercana, en Temuco y online",
  title:
    "Asesoría Jurídica Temuco · Familia, Inmobiliario, Civil y Laboral · Avendaño & Neculman",
  description:
    "Estudio jurídico en Temuco. Abogadas de familia, inmobiliario, civil y laboral, con atención presencial y online para todo Chile. Agende su consulta por WhatsApp.",
  lang: "es-CL",
  locale: "es_CL",
  foundingYear: 2023,

  /**
   * Testimonios: déjalo en false hasta tener testimonios reales con
   * autorización escrita de cada cliente. Los de ejemplo, además, solo
   * se ven en `npm run dev` (ver src/data/testimonials.ts).
   */
  showTestimonials: false,

  contact: {
    phone: "+56 9 4869 2661",
    /** Solo dígitos, con código de país: lo usa el enlace de WhatsApp. */
    whatsapp: "56948692661",
    email: "asesorialegal.tco@gmail.com",
  },

  address: {
    street: "Arturo Prat 696",
    unit: "oficina 321",
    city: "Temuco",
    region: "La Araucanía",
    country: "CL",
    countryName: "Chile",
  },

  /** Ubicación exacta de la ficha de Google Maps del estudio (Edificio Centenario). */
  geo: { lat: -38.7403314, lng: -72.5910694 },
  /** Enlace para compartir de Google Maps, entregado por el estudio. */
  mapsUrl: "https://maps.app.goo.gl/DzK9RqikmprwfTMn7",

  hours: [
    {
      label: "Lunes a viernes",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ] satisfies OpeningHours[],

  modality: "Presencial en Temuco y online para todo Chile",

  /** Valor de la primera consulta, en pesos chilenos (confirmado por el estudio). */
  firstConsultationFee: 25000,
  areaServed: ["Temuco", "Chile"],

  social: [
    {
      network: "facebook",
      name: "Facebook",
      href: "https://www.facebook.com/share/19czeqWogM/?mibextid=wwXIfr",
      // TODO: reemplazar por la URL completa de la página (facebook.com/nombre-de-la-pagina).
      profileUrl: null,
    },
    {
      network: "instagram",
      name: "Instagram",
      href: "https://www.instagram.com/asesoriajuridicatco",
      profileUrl: "https://www.instagram.com/asesoriajuridicatco",
    },
    {
      network: "tiktok",
      name: "TikTok",
      href: "https://www.tiktok.com/@asesoria.juridicat",
      profileUrl: "https://www.tiktok.com/@asesoria.juridicat",
    },
  ] satisfies SocialLink[],

  nav: [
    { label: "Materias", href: "/#materias" },
    { label: "Equipo", href: "/#equipo" },
    { label: "Cómo trabajamos", href: "/#como-trabajamos" },
    { label: "Contacto", href: "/#contacto" },
  ] satisfies NavLink[],

  /** Crédito del footer. */
  developer: {
    name: "Daniel y Tere",
    githubUrl: "https://github.com/danielyteresa/avendano-neculman",
  },
} as const;

// Textos de cada sección de la página. Trato de usted, frases cortas.
export const content = {
  header: {
    cta: { label: "Agendar consulta", href: "/#contacto" },
    navLabel: "Principal",
    skipLink: "Saltar al contenido",
    openMenuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
  },
  hero: {
    eyebrow: "Asesoría jurídica · Temuco",
    title:
      "Abogadas en Temuco para temas de familia, inmobiliarios, civiles y laborales",
    subtitle:
      "Le explicamos su caso con palabras simples y usted habla directamente con su abogada.",
    primaryCta: {
      label: "Escríbanos por WhatsApp",
      whatsappMessage: "Hola, quisiera agendar una consulta con el estudio.",
    },
    secondaryCta: { label: "Ver materias", href: "/#materias" },
    note: "Atención presencial y online",
    newTabNote: "(se abre en otra pestaña)",
  },
  practiceAreas: {
    eyebrow: "Materias",
    title: "En qué le podemos ayudar",
    casesLabel: "Casos frecuentes",
    cta: { label: "Agendar consulta", href: "/#contacto" },
  },
  team: {
    eyebrow: "Equipo",
    title: "Hable directamente con su abogada",
    subtitle:
      "Somos un estudio pequeño de Temuco. Usted sabe siempre quién lleva su caso.",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Tres pasos, sin enredos",
    subtitle: "Si nunca ha ido a un abogado, así es el proceso.",
    cta: { label: "Dar el primer paso", href: "/#contacto" },
  },
  onlineBanner: {
    text: "Atendemos en todo Chile por videollamada",
    detail: "Desde su casa, con la misma abogada de principio a fin.",
    cta: { label: "Agendar videollamada" },
    whatsappMessage:
      "Hola, quisiera agendar una consulta online por videollamada.",
    newTabNote: "(se abre en otra pestaña)",
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Lo que dicen nuestros clientes",
    placeholderBadge: "Ejemplo",
    placeholderNote:
      "Vista de desarrollo: estos testimonios son de ejemplo y no se publican.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Antes de su consulta",
    moreQuestions: "¿Tiene otra pregunta?",
    moreQuestionsCta: { label: "Escríbanos", href: "/#contacto" },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Agende su consulta",
    subtitle:
      "Cuéntenos brevemente su caso y le respondemos en horario de oficina. Si prefiere, escríbanos por WhatsApp.",
    whatsappLabel: "Escríbanos por WhatsApp",
    whatsappMessage: "Hola, quisiera agendar una consulta con el estudio.",
    infoTitle: "Datos de contacto",
    whatsappTitle: "WhatsApp",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    addressTitle: "Dirección",
    hoursTitle: "Horario",
    directionsLabel: "Cómo llegar",
    mapTitle: "Mapa con la ubicación de Avendaño & Neculman en Temuco",
    newTabNote: "(se abre en otra pestaña)",
    submitLabel: "Enviar mensaje",
    requiredNote: "Los campos con * son obligatorios.",
    /** Nombre del formulario en Netlify (aparece en el panel de Netlify). */
    formName: "consultas",
    /** Página a la que Netlify lleva después de enviar. */
    successPath: "/gracias",
    fields: {
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono (opcional)",
      area: "Materia de su consulta",
      modality: "¿Cómo prefiere la reunión?",
      message: "Cuéntenos brevemente su caso",
    },
    placeholders: {
      name: "Su nombre",
      email: "su@correo.cl",
      phone: "+56 9 1234 5678",
      message: "Por ejemplo: quiero saber cómo pedir pensión de alimentos.",
    },
    /** Aviso bajo el mensaje (no en el placeholder, que desaparece al escribir). */
    messageHint:
      "Basta con unas líneas. No incluya datos sensibles como diagnósticos o RUT; los conversaremos en la reunión.",
    areaPlaceholder: "Seleccione una materia",
    areaOther: "Otro / no estoy seguro",
    modalities: [
      { value: "presencial", label: "Presencial en Temuco" },
      { value: "online", label: "Online por videollamada" },
    ],
    privacy: {
      before: "Acepto la ",
      linkLabel: "política de privacidad",
      href: "/privacidad",
      after: " y el uso de mis datos para responder esta consulta.",
    },
    /** Campo trampa invisible: si un bot lo llena, Netlify descarta el envío. */
    honeypotLabel: "No llene este campo si es una persona",
  },
  thanks: {
    pageTitle: "Mensaje enviado · Avendaño & Neculman",
    title: "Recibimos su mensaje",
    message:
      "Le responderemos en horario de oficina, de lunes a viernes. Si es urgente, escríbanos por WhatsApp.",
    backLabel: "Volver al inicio",
  },
  footer: {
    contactTitle: "Contacto",
    hoursTitle: "Horario",
    socialTitle: "Síganos",
    whatsappLabel: "WhatsApp",
    disclaimer:
      "La información de este sitio es general y no constituye asesoría legal.",
    creditPrefix: "Sitio desarrollado por",
    githubLabel: "Ver el código en GitHub",
    privacyLabel: "Política de privacidad",
    newTabNote: "(se abre en otra pestaña)",
  },
  whatsappFloat: {
    label: "Escríbanos por WhatsApp (se abre en otra pestaña)",
    whatsappMessage: "Hola, quisiera agendar una consulta con el estudio.",
  },
} as const;
