import { site } from "./site";

/*
 * Política de privacidad del formulario de contacto.
 * BORRADOR para que las abogadas lo revisen y aprueben: ellas son las
 * responsables de los datos y conocen la Ley 19.628 y la Ley 21.719
 * (vigente desde el 1 de diciembre de 2026, salvo postergación).
 * Plazo de conservación: un año (definido por el estudio).
 */

export interface PrivacySection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export const privacy = {
  pageTitle: `Política de privacidad · ${site.name}`,
  description: `Cómo ${site.name} trata los datos que usted nos envía por el formulario de contacto.`,
  eyebrow: "Privacidad",
  title: "Política de privacidad",
  updated: "Última actualización: 27 de octubre de 2026",
  intro: `Esta política explica qué datos pedimos en el formulario de contacto de este sitio, para qué los usamos y cómo puede ejercer sus derechos. Pedimos solo lo necesario para responder su consulta.`,
  sections: [
    {
      title: "Quién es responsable de sus datos",
      paragraphs: [
        `${site.fullName}, con oficina en ${site.address.street}, ${site.address.unit}, ${site.address.city}. Puede escribirnos a ${site.contact.email} o al ${site.contact.phone}.`,
      ],
    },
    {
      title: "Qué datos pedimos",
      items: [
        "Nombre y correo electrónico, para responderle.",
        "Teléfono, solo si usted quiere que le llamemos (es opcional).",
        "El área de su consulta, la modalidad que prefiere y un mensaje breve, para saber cómo ayudarle.",
      ],
      paragraphs: [
        "Le pedimos no incluir en el mensaje datos sensibles, como información de salud o de terceros. Esos temas los conversaremos en la reunión, con la reserva propia del secreto profesional.",
      ],
    },
    {
      title: "Para qué los usamos",
      paragraphs: [
        "Solo para responder su consulta y, si usted lo desea, agendar una reunión. No enviamos publicidad, no vendemos sus datos y no los compartimos con otras personas o empresas para fines propios.",
        "La base para tratarlos es su consentimiento, que usted entrega al marcar la casilla del formulario. Puede retirarlo cuando quiera.",
      ],
    },
    {
      title: "Quién más los procesa",
      paragraphs: [
        "Para que el formulario funcione usamos servicios de terceros que almacenan los mensajes por cuenta nuestra: Netlify, que aloja el sitio y recibe el formulario, y Google (Gmail), donde recibimos el aviso por correo. Estos servicios pueden tener sus servidores fuera de Chile.",
        "Si nos escribe por WhatsApp, esa conversación se rige además por las políticas de WhatsApp (Meta). El mapa de la sección de contacto lo entrega Google Maps.",
      ],
    },
    {
      title: "Cuánto tiempo los guardamos",
      paragraphs: [
        "Mientras sea necesario para responder su consulta. Si no llega a ser cliente del estudio, eliminamos sus datos dentro de un año desde nuestro último contacto.",
      ],
    },
    {
      title: "Sus derechos",
      paragraphs: [
        `Usted puede pedirnos en cualquier momento acceder a sus datos, corregirlos, eliminarlos u oponerse a que los usemos. Basta con escribir a ${site.contact.email} indicando su nombre y lo que necesita. Le responderemos a la brevedad.`,
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Este sitio no usa cookies propias ni herramientas de seguimiento o publicidad. El mapa de Google Maps puede usar sus propias cookies cuando se carga.",
      ],
    },
  ] satisfies PrivacySection[],
  backLabel: "Volver al formulario",
  backHref: "/#contacto",
} as const;
