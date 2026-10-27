# Avendaño & Neculman · Asesoría Jurídica Temuco — sitio web

Sitio de una página para un estudio jurídico real de Temuco (Chile). Proyecto de portafolio con cliente real.

## Stack

- Astro (última estable) + TypeScript estricto
- Tailwind CSS v4 vía @tailwindcss/vite; tema en src/styles/global.css con @theme
- Node 22+. Despliegue en Netlify.

## Estilo: minimalista

- Fondo claro casi siempre; azul solo en header, hero y footer.
- Máximo 3 colores por pantalla, sin sombras fuertes ni degradados.
- Mucho espacio en blanco; cada sección = título + texto breve + una acción.
- Títulos con el componente SectionTitle.

## Reglas

- Cada sección es un componente en src/components/; index.astro solo los ensambla.
- Ningún texto, dato de contacto o enlace dentro de componentes: todo en src/data/*.ts.
- Testimonios: solo se renderizan si site.showTestimonials es true. Los actuales son ejemplos; nunca los marques como Review en JSON-LD.
- Mobile-first, HTML semántico, contraste AA (el dorado #D4954F no sirve para texto chico sobre fondo claro; el dorado oscuro #9A6428 tampoco sobre crema).
- JavaScript solo para el menú móvil.
- Textos en español de Chile, trato de usted, lenguaje simple sin jerga legal.
- Explícame brevemente cada cambio importante: estoy aprendiendo.

## Paleta

azul #0F1F3D · dorado #D4954F · dorado oscuro #9A6428 · crema #F3E4CC · fondo #FAF8F4 · texto #2B2F36
Fuentes: Cormorant Garamond (títulos), Inter (texto).

## Estado

- Fases 2 a 8 listas. Lighthouse móvil: 100 en las cuatro categorías.
- Primera consulta: $25.000 (site.firstConsultationFee). Conservación de datos: un año.
- Pendiente de las abogadas: logo en alta resolución, fotos, casos típicos por área, biografías, eslogan, URL completa de Facebook, revisión de /privacidad, autorización para el portafolio.
- Fase 9: deploy en Netlify, aviso por correo del formulario a la casilla del estudio, README con capturas.
