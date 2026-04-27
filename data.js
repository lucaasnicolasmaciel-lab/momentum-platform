// data.js — Datos de la plataforma Momentum Impact
const PLATFORM_DATA = {
  clients: {
    "daniela": {
      id: "daniela",
      name: "Daniela Morales",
      specialty: "Nutricionista · México",
      startDate: "2026-04-24",
      currentStage: 1,
      stages: {
        1: { completed: [1], active: 2, approved: [1] },
        2: { completed: [], active: 1, approved: [] },
        3: { completed: [], active: 1, approved: [] },
        4: { completed: [], active: 0, approved: [] }
      }
    },
    "valentina": {
      id: "valentina",
      name: "Valentina Torres",
      specialty: "Nutricionista · Argentina",
      startDate: "2026-04-19",
      currentStage: 2,
      stages: {
        1: { completed: [1,2,3], active: null, approved: [1,2,3] },
        2: { completed: [], active: 1, approved: [] },
        3: { completed: [], active: 1, approved: [] },
        4: { completed: [], active: 0, approved: [] }
      }
    },
    "camila": {
      id: "camila",
      name: "Camila Ríos",
      specialty: "Nutricionista · Colombia",
      startDate: "2026-04-15",
      currentStage: 3,
      stages: {
        1: { completed: [1,2,3], active: null, approved: [1,2,3] },
        2: { completed: [1,2,3,4,5], active: null, approved: [1,2,3,4,5] },
        3: { completed: [], active: 1, approved: [] },
        4: { completed: [], active: 0, approved: [] }
      }
    }
  },

  stages: {
    1: {
      name: "Oferta",
      description: "Definición de nicho, ICP y oferta irresistible",
      color: "#1A4A2E",
      steps: [
        { id: 1, title: "Clase — ¿Qué es una oferta irresistible?", desc: "Entendés el modelo, la ecuación de valor y los componentes.", time: "18 min", type: "clase" },
        { id: 2, title: "Ejercicio de nicho", desc: "Definís tu nicho y lo evaluás contra los tres criterios.", time: "20 min", type: "ejercicio" },
        { id: 3, title: "Plantilla de oferta", desc: "Construís los 9 componentes de tu oferta irresistible.", time: "1-2 hs", type: "plantilla" }
      ]
    },
    2: {
      name: "Adquisición",
      description: "Perfil de Instagram, contenido y anuncios",
      color: "#2D6B45",
      steps: [
        { id: 1, title: "Clase — El ICP", desc: "Aprendés cómo habla y qué siente tu paciente ideal.", time: "15 min", type: "clase" },
        { id: 2, title: "Ejercicio de ICP", desc: "Construís el mapa completo de tu paciente ideal.", time: "30 min", type: "ejercicio" },
        { id: 3, title: "Clase — Optimización de perfil", desc: "Optimizás tu bio, foto y destacadas.", time: "12 min", type: "clase" },
        { id: 4, title: "Guía de perfil de Instagram", desc: "Aplicás la fórmula con tus palabras y enviás la captura.", time: "45 min", type: "guia" },
        { id: 5, title: "Clase — Los 3 tipos de anuncio", desc: "Aprendés la estructura ganadora de cada tipo.", time: "20 min", type: "clase" },
        { id: 6, title: "Guiones de anuncios", desc: "Personalizás los 3 guiones con tu voz y tus casos.", time: "1-2 hs", type: "ejercicio" },
        { id: 7, title: "Clase — Grabación y edición", desc: "Grabás los 3 videos y los editás.", time: "Variable", type: "clase" },
        { id: 8, title: "Clase — Meta Ads", desc: "Entendés cómo funciona tu primera campaña.", time: "15 min", type: "clase" }
      ]
    },
    3: {
      name: "IA y mensajes",
      description: "VSL, ManyChat y flujo de mensajes",
      color: "#1A4A2E",
      steps: [
        { id: 1, title: "Clase — El VSL", desc: "Aprendés la estructura del video de ventas.", time: "15 min", type: "clase" },
        { id: 2, title: "Guión del VSL", desc: "Escribís y grabás tu VSL.", time: "2-3 hs", type: "ejercicio" },
        { id: 3, title: "Clase — ManyChat", desc: "Configurás el flujo automático de mensajes.", time: "20 min", type: "clase" },
        { id: 4, title: "Configuración de ManyChat", desc: "Seguís la guía paso a paso para activar el flujo.", time: "1 hs", type: "guia" }
      ]
    },
    4: {
      name: "Ventas",
      description: "Guión de llamada, presentación y cierre",
      color: "#2D6B45",
      steps: [
        { id: 1, title: "Clase — Estructura de la llamada", desc: "Aprendés las fases y transiciones de la llamada.", time: "20 min", type: "clase" },
        { id: 2, title: "Guión de ventas", desc: "Personalizás el guión con tu voz y tus casos.", time: "1-2 hs", type: "ejercicio" },
        { id: 3, title: "Banco de objeciones", desc: "Preparás respuestas a las objeciones más comunes.", time: "45 min", type: "ejercicio" }
      ]
    }
  }
};

function getDayNumber(startDateStr) {
  const start = new Date(startDateStr);
  const today = new Date();
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return Math.min(diff + 1, 15);
}

function getDaysRemaining(startDateStr) {
  return Math.max(15 - getDayNumber(startDateStr), 0);
}
