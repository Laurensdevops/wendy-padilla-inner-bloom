export type Service = {
  n: string;
  slug: "conocete" | "amate" | "mejorate";
  title: string;
  subtitle: string;
  tagline: string;
  brief: string;
  intro: string[];
  trabajaremos: string[];
  dirigido: string;
  modalidad: string;
  waMsg: string;
};

export const services: Service[] = [
  {
    n: "01",
    slug: "conocete",
    title: "Conócete",
    subtitle: "Acompañamiento de Autoconocimiento",
    tagline: "El punto de partida para cualquier transformación genuina.",
    brief:
      "Identificación de patrones emocionales, creencias limitantes, valores y propósito de vida.",
    intro: [
      "¿Cuántas veces has actuado en piloto automático sin entender por qué reaccionas como reaccionas, por qué repites ciertos patrones o por qué ciertas situaciones te afectan más de lo que esperarías? El autoconocimiento no es un lujo, es la base de todo cambio real.",
      "En este acompañamiento exploraremos juntas quién eres realmente: tus patrones emocionales, tus creencias limitantes, tu historia de vida y la forma en que todo eso ha moldeado tu presente. A través de herramientas de desarrollo personal, comenzaremos a descubrir tu ser auténtico y los bloqueos que te han impedido avanzar.",
      "El autoconocimiento no es un proceso de una sola sesión — es un viaje que, una vez comenzado, transforma la manera en que te ves a ti misma y al mundo que te rodea.",
    ],
    trabajaremos: [
      "Identificación de patrones emocionales y creencias limitantes",
      "Claridad sobre tus valores, propósito y fortalezas",
      "Herramientas de introspección y mindfulness",
      "Comprensión de tu historia de vida",
      "Inicio de un diálogo compasivo contigo misma",
    ],
    dirigido:
      "Mujeres, jóvenes y personas en general que sienten que algo no encaja en su vida, que desean entenderse mejor o iniciar un proceso genuino de transformación.",
    modalidad: "Acompañamiento individual online",
    waMsg:
      "Hola Wendy, quiero información sobre el acompañamiento de Conócete.",
  },
  {
    n: "02",
    slug: "amate",
    title: "Ámate",
    subtitle: "Acompañamiento de Autoestima y Autocuidado",
    tagline:
      "La relación más importante de tu vida: la que tienes contigo misma.",
    brief:
      "Sanación de la autoimagen, límites saludables, autocompasión y autocuidado integral.",
    intro: [
      "Es tiempo de parar, de dejar de abandonarte y empezar a habitarte.",
      "Vivimos en una época que nos empuja constantemente hacia afuera — hacia la aprobación externa, la comparación, la productividad sin descanso — y en ese proceso, muchas veces nos vamos abandonando a nosotras mismas sin darnos cuenta. La autoestima real no se construye con afirmaciones frente al espejo ni con hábitos de mañana perfectos. Se construye desde adentro, desde la raíz.",
      "Este acompañamiento trabaja la autoestima desde sus capas más profundas: la relación con tu cuerpo, con tu historia, con tus emociones, y con la voz crítica interna que muchas veces es más dura contigo que con cualquier otra persona. Aprenderemos a desarrollar una relación de amor propio auténtico — no de perfección, sino de compasión, presencia y cuidado genuino hacia ti misma.",
      "Cuando aprendes a amarte de verdad, no desde el ego sino desde el ser, tus relaciones cambian, tus decisiones cambian, tu vida entera cambia.",
    ],
    trabajaremos: [
      "Sanación de la autoimagen y resignificación de la voz crítica interna",
      "Límites saludables desde el amor propio",
      "Prácticas de autocuidado integral (físico, emocional, mental, espiritual)",
      "Autocompasión y reconexión con tu cuerpo",
      "Manejo de la comparación y la aprobación externa",
    ],
    dirigido:
      "Mujeres y personas que se exigen demasiado, que se critican constantemente, que ponen a los demás por encima de sí mismas, o que sienten que nunca son 'suficiente'; también en procesos de recuperación emocional o saliendo de relaciones que drenaron su autoestima.",
    modalidad: "Acompañamiento individual online",
    waMsg: "Hola Wendy, quiero información sobre el acompañamiento de Ámate.",
  },
  {
    n: "03",
    slug: "mejorate",
    title: "Mejórate",
    subtitle: "Mentoría Kaizen de Crecimiento Personal",
    tagline: "Pequeños pasos sostenidos que generan grandes cambios.",
    brief:
      "Diseño de un plan de vida personalizado, seguimiento mensual, manejo de bloqueos.",
    intro: [
      "La filosofía Kaizen nos enseña que la mejora continua no viene de los grandes saltos ni de las resoluciones de año nuevo que duran dos semanas. Viene de la consistencia, de los pequeños compromisos diarios, de decidir cada día ser un poco mejor que ayer — no comparándote con nadie más, sino con la versión de ti que eras ayer.",
      "En esta mentoría diseñaremos juntas un plan de vida real, alineado con quién eres y hacia dónde quieres ir. No un plan idealizado ni perfecto, sino uno que tenga en cuenta tus recursos, tu ritmo y tu ser auténtico.",
      "Esta no es una mentoría de productividad fría — es un proceso humano, integral y profundo, donde el crecimiento exterior siempre parte del crecimiento interior.",
    ],
    trabajaremos: [
      "Diseño de un plan de vida personalizado con metas claras",
      "Seguimiento y acompañamiento mensual",
      "Estrategias de hábitos y disciplina desde la autocompasión",
      "Gestión de obstáculos y bloqueos mentales",
    ],
    dirigido:
      "Personas que ya tienen cierto nivel de autoconocimiento y están listas para pasar a la acción, que saben lo que quieren pero no logran avanzar consistentemente.",
    modalidad: "Mentoría individual online",
    waMsg: "Hola Wendy, quiero información sobre la mentoría Mejórate.",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
