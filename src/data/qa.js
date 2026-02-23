// ============================================================
//  AGENDA ESTUDIANTIL — Base de datos Q&A
//  Motor con score de relevancia: retorna la mejor coincidencia
// ============================================================

const hoy = () => new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
const horaActual = () => new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

export const qaDatabase = [

  // ── SALUDOS ─────────────────────────────────────────────
  {
    categoria: "Saludo",
    preguntas: [
      {
        keywords: ["hola", "buenos días", "buenas tardes", "buenas noches", "hey", "hi", "saludos", "buen día", "inicio", "empezar"],
        respuesta: `¡Hola! 👋 Hoy es ${hoy()}.\n¿Qué quieres revisar?`,
        tipo: "saludo",
        sugerencias: ["📅 Clases de hoy", "📋 Mis tareas", "📝 Mis exámenes", "🗓️ Calendario"]
      },
      {
        keywords: ["gracias", "muchas gracias", "ok gracias", "perfecto"],
        respuesta: "¡Con gusto! 😊 ¿Algo más en lo que pueda ayudarte?",
        tipo: "info",
        sugerencias: ["📅 Clases de hoy", "📋 Mis tareas", "📝 Mis exámenes"]
      },
      {
        keywords: ["adios", "adiós", "hasta luego", "bye", "chao"],
        respuesta: "¡Hasta luego! 👋 ¡Mucho éxito en tus estudios! 🎓",
        tipo: "info"
      },
      {
        keywords: ["quien eres", "quién eres", "que eres", "qué eres", "como te llamas", "cómo te llamas"],
        respuesta: "Soy tu Asistente de Agenda Estudiantil 🤖📚\nEstoy aquí para ayudarte con horarios, tareas, exámenes y servicios del campus.",
        tipo: "info",
        sugerencias: ["📅 Clases de hoy", "📋 Mis tareas", "📝 Mis exámenes"]
      }
    ]
  },

  // ── HORARIOS Y CLASES ────────────────────────────────────
  {
    categoria: "Horarios",
    preguntas: [
      {
        keywords: ["clases de hoy", "hoy tengo", "materias hoy", "que tengo hoy", "qué tengo hoy", "clases hoy", "hoy"],
        respuesta: `📚 Tus clases de hoy, ${hoy()}:`,
        tipo: "agenda",
        agenda: [
          { hora: "07:00 – 08:30", titulo: "Matemáticas Discretas",  detalles: ["📍 Aula B-105",        "👨‍🏫 Prof. Ramírez"],    tag: "class", urgencia: 0 },
          { hora: "10:00 – 11:30", titulo: "Programación Web",        detalles: ["📍 Lab Informática 2", "👨‍🏫 Prof. Torres · 💻 Traer laptop"], tag: "class", urgencia: 0 },
          { hora: "14:00 – 15:30", titulo: "Cálculo II",              detalles: ["📍 Aula B-204",        "👩‍🏫 Prof. Hernández"],  tag: "class", urgencia: 0 }
        ],
        sugerencias: ["📋 Mis tareas", "📝 Mis exámenes", "🗺️ ¿Dónde queda el aula?"]
      },
      {
        keywords: ["horario", "horario semanal", "todas mis materias", "mi horario", "mis clases", "semana"],
        respuesta: "🗓️ Tu horario semanal:",
        tipo: "agenda",
        agenda: [
          { hora: "Lun · 07:00–08:30",   titulo: "Matemáticas Discretas", detalles: ["📍 Aula B-105",        "👨‍🏫 Prof. Ramírez"],   tag: "class", urgencia: 0 },
          { hora: "Lun · 10:00–11:30",   titulo: "Inglés Técnico III",    detalles: ["📍 Aula A-203",        "👩‍🏫 Prof. Castillo"],  tag: "class", urgencia: 0 },
          { hora: "Mar · 08:00–09:30",   titulo: "Programación Web",      detalles: ["📍 Lab Informática 2", "👨‍🏫 Prof. Torres"],    tag: "class", urgencia: 0 },
          { hora: "Mar · 14:00–15:30",   titulo: "Cálculo II",            detalles: ["📍 Aula B-204",        "👩‍🏫 Prof. Hernández"], tag: "class", urgencia: 0 },
          { hora: "Mié · 07:00–08:30",   titulo: "Estructuras de Datos",  detalles: ["📍 Lab Informática 1", "👨‍🏫 Prof. Mendoza"],   tag: "class", urgencia: 0 },
          { hora: "Jue · 10:00–11:30",   titulo: "Bases de Datos I",      detalles: ["📍 Aula C-301",        "👩‍🏫 Prof. Guzmán"],    tag: "class", urgencia: 0 },
          { hora: "Vie · 08:00–09:30",   titulo: "Inglés Técnico III",    detalles: ["📍 Aula A-203",        "👩‍🏫 Prof. Castillo"],  tag: "class", urgencia: 0 }
        ],
        sugerencias: ["📅 Solo clases de hoy", "📋 Mis tareas", "📝 Mis exámenes"]
      },
      {
        keywords: ["mañana", "clases mañana", "que tengo mañana", "qué tengo mañana"],
        respuesta: "📅 Tus clases de mañana:",
        tipo: "agenda",
        agenda: [
          { hora: "08:00 – 09:30", titulo: "Programación Web", detalles: ["📍 Lab Informática 2", "👨‍🏫 Prof. Torres · Continúa proyecto final"], tag: "class", urgencia: 0 },
          { hora: "14:00 – 15:30", titulo: "Cálculo II — ⚠️ PARCIAL II",  detalles: ["📍 Aula B-204", "📖 Temas: Integrales · Calculadora permitida"], tag: "exam",  urgencia: 92 }
        ],
        sugerencias: ["📝 Detalles del parcial", "📋 Mis tareas pendientes"]
      },
      {
        keywords: ["donde", "dónde", "ubicacion", "ubicación", "aula", "salon", "salón", "edificio", "mapa"],
        respuesta: "🗺️ Mapa rápido del campus:\n\n• Edif. A — Aulas teóricas (A-101 – A-310) · Servicios Estudiantiles\n• Edif. B — Aulas + Laboratorios (B-100 – B-250) · Lab Informática\n• Edif. C — Ciencias puras (C-200 – C-400)\n• Edif. D — Biblioteca (niv. 1-2) · Cafetería (planta baja)",
        tipo: "info",
        sugerencias: ["📅 Mis clases de hoy", "📚 Biblioteca", "☕ Cafetería"]
      }
    ]
  },

  // ── TAREAS Y ENTREGAS ────────────────────────────────────
  {
    categoria: "Tareas",
    preguntas: [
      {
        keywords: ["tarea", "tareas", "pendiente", "pendientes", "deberes", "entrega", "entregas", "que debo", "qué debo"],
        respuesta: "📋 Tus entregas pendientes:",
        tipo: "agenda",
        agenda: [
          { hora: "Hoy · 23:59",      titulo: "Ensayo — Literatura Universal",   detalles: ["📎 Subir a Moodle · Mín. 1,500 palabras · APA 7ma ed."],    tag: "task", urgencia: 92 },
          { hora: "Mañana · 08:00",   titulo: "Ejercicios — Física Cap. 7",      detalles: ["✏️ Ejercicios 7.1 – 7.15 · Entregar físico en clase"],        tag: "task", urgencia: 60 },
          { hora: "Viernes · 23:59",  titulo: "Proyecto Final — Programación Web",detalles: ["💻 Repositorio GitHub + Video demo 5 min · Enlace por Moodle"], tag: "task", urgencia: 38 },
          { hora: "Próxima semana",   titulo: "Informe de Lab — Química Orgánica",detalles: ["🧪 Práctica #4: Titulación · Formato entregado en clase"],     tag: "task", urgencia: 12 }
        ],
        sugerencias: ["⚠️ Solo urgentes", "📝 Mis exámenes", "💻 Ir a Moodle"]
      },
      {
        keywords: ["urgente", "urgentes", "para hoy", "vence hoy", "deadline"],
        respuesta: "⚠️ Entrega urgente — HOY:",
        tipo: "agenda",
        agenda: [
          { hora: "Hoy · 23:59", titulo: "Ensayo — Literatura Universal", detalles: ["📎 Moodle · 1,500 palabras · APA 7ma · ⏰ ¡Quedan pocas horas!"], tag: "exam", urgencia: 97 }
        ],
        sugerencias: ["📋 Todas mis tareas", "💻 Abrir Moodle", "🧠 Necesito ayuda"]
      },
      {
        keywords: ["moodle", "portal", "plataforma", "aula virtual", "online"],
        respuesta: "💻 Plataformas virtuales:\n\n• Moodle: moodle.universidad.edu\n• Portal Estudiantil: portal.universidad.edu\n• Correo: correo.universidad.edu\n\nUsa tu número de carné como usuario.",
        tipo: "info",
        sugerencias: ["📋 Mis tareas", "🔑 Olvidé mi contraseña"]
      }
    ]
  },

  // ── EXÁMENES ─────────────────────────────────────────────
  {
    categoria: "Examenes",
    preguntas: [
      {
        keywords: ["examen", "examenes", "exámenes", "prueba", "parcial", "final", "evaluacion", "evaluación", "próximos"],
        respuesta: "📝 Tus próximos exámenes:",
        tipo: "agenda",
        agenda: [
          { hora: "Mañana · 14:00",     titulo: "Parcial II — Cálculo II",         detalles: ["📍 Aula B-204 · Calculadora científica permitida", "📖 Integrales definidas, Volúmenes de revolución"],  tag: "exam", urgencia: 92 },
          { hora: "Jue 27 Feb · 08:00", titulo: "Parcial II — Bases de Datos I",   detalles: ["📍 Aula C-301 · Examen práctico en computadora",    "📖 SQL avanzado, Normalización 3FN"],               tag: "exam", urgencia: 55 },
          { hora: "Vie 07 Mar · 10:00", titulo: "Parcial I — Estructuras de Datos",detalles: ["📍 Lab Informática 1 · Traer laptop",                "📖 Listas enlazadas, Pilas y Colas"],               tag: "exam", urgencia: 28 },
          { hora: "Sem. Final",         titulo: "Final — Programación Web",         detalles: ["📍 Por confirmar · Presentación oral del proyecto"],                                                       tag: "exam", urgencia: 8  }
        ],
        sugerencias: ["📚 ¿Cómo estudiar para Cálculo?", "📋 Mis tareas", "🗓️ Calendario académico"]
      },
      {
        keywords: ["calculo", "cálculo", "integral", "derivada", "matematica", "matemática"],
        respuesta: "📐 Recursos — Cálculo II (Parcial II):\n\nTemas:\n• Integrales definidas e indefinidas\n• Técnicas de integración (sustitución, partes)\n• Volúmenes de revolución\n\nRecursos gratuitos:\n• Khan Academy — Cálculo Integral\n• Paul's Online Math Notes\n• Biblioteca: 'Cálculo' de James Stewart\n\n📍 Asesoría extra: Mar y Jue · 16:00–18:00 · Edif. C-201",
        tipo: "info",
        sugerencias: ["📝 Fecha del examen", "📚 Biblioteca", "📅 Asesorías"]
      },
      {
        keywords: ["programacion", "programación", "codigo", "código", "web", "javascript", "proyecto"],
        respuesta: "💻 Recursos — Programación Web:\n\nTemas del proyecto final:\n• HTML5 semántico · CSS3 responsivo\n• JavaScript ES6+ · APIs REST\n• Git y GitHub\n\nPlataformas gratuitas:\n• MDN Web Docs · freeCodeCamp · The Odin Project\n• GitHub Student Pack (actívalo con tu correo institucional)",
        tipo: "info",
        sugerencias: ["📋 Tarea de Prog. Web", "💻 Laboratorio de cómputo"]
      },
      {
        keywords: ["calendario", "calendario académico", "fechas importantes", "semestre", "ciclo"],
        respuesta: "🗓️ Calendario Académico 2026 — Ciclo I:",
        tipo: "agenda",
        agenda: [
          { hora: "19 Ene",      titulo: "Inicio del ciclo lectivo",           detalles: ["🎓 Primer día de clases"],                           tag: "event", urgencia: 0  },
          { hora: "24 Feb",      titulo: "Parciales II — Semana",              detalles: ["📝 24 Feb – 01 Mar"],                                tag: "exam",  urgencia: 80 },
          { hora: "16 Mar",      titulo: "Límite retiro de materias",          detalles: ["⚠️ Último día sin nota de reprobación"],             tag: "event", urgencia: 25 },
          { hora: "20 Abr",      titulo: "Parciales III — Semana",             detalles: ["📝 20 – 26 Abr"],                                   tag: "exam",  urgencia: 10 },
          { hora: "25 May",      titulo: "Exámenes Finales — Semana",          detalles: ["📝 25 – 31 May"],                                   tag: "exam",  urgencia: 5  },
          { hora: "06 Jun",      titulo: "Fin del ciclo lectivo",              detalles: ["🎉 Último día del semestre"],                       tag: "event", urgencia: 0  }
        ],
        sugerencias: ["📝 Mis próximos exámenes", "📋 Mis tareas", "📅 Clases de hoy"]
      }
    ]
  },

  // ── CALIFICACIONES ───────────────────────────────────────
  {
    categoria: "Calificaciones",
    preguntas: [
      {
        keywords: ["nota", "notas", "calificacion", "calificación", "calificaciones", "promedio", "rendimiento"],
        respuesta: "📊 Consulta tus notas:\nPortal Estudiantil → Académico → Calificaciones\n\nEscala:\n• 8.5 – 10.0 → Excelente\n• 7.0 – 8.4  → Bueno\n• 6.0 – 6.9  → Aprobado\n• < 6.0      → Reprobado\n\n📌 Las notas se publican máx. 5 días hábiles después del examen.",
        tipo: "info",
        sugerencias: ["📝 Mis exámenes próximos", "🔄 ¿Puedo repetir una materia?"]
      },
      {
        keywords: ["reprobar", "reprobé", "reprobado", "recuperacion", "recuperación", "segunda oportunidad"],
        respuesta: "😟 Opciones si reprobaste:\n\n• Suficiencia — Examen de recuperación (nota entre 4.0–5.9)\n• Segunda matrícula — Repetir el próximo ciclo\n• Retiro justificado — Por motivos válidos (enfermedad, etc.)\n\n📍 Registro Académico · Edif. A, of. 105\n💜 Si es por razones emocionales, también visita Bienestar Estudiantil.",
        tipo: "info",
        sugerencias: ["🧠 Apoyo psicológico", "📚 Tutorías", "🏫 Registro Académico"]
      }
    ]
  },

  // ── SERVICIOS DEL CAMPUS ─────────────────────────────────
  {
    categoria: "Servicios",
    preguntas: [
      {
        keywords: ["biblioteca", "libro", "libros", "investigacion", "investigación", "estudiar", "digital"],
        respuesta: "📚 Biblioteca — Edificio D:",
        tipo: "agenda",
        agenda: [
          {
            hora: "Lun–Vie: 07:00–21:00 · Sáb: 08:00–14:00",
            titulo: "Biblioteca Central",
            detalles: [
              "📖 +50,000 títulos físicos y digitales",
              "💻 Bases de datos: JSTOR, EBSCOhost, Scopus",
              "🔇 Zona silencio: 2do nivel",
              "👥 Salas de estudio grupal (reservar en portal)"
            ],
            tag: "event",
            urgencia: 0
          }
        ],
        sugerencias: ["📋 Mis tareas de investigación", "💻 Acceso bases de datos"]
      },
      {
        keywords: ["cafeteria", "cafetería", "comida", "almuerzo", "desayuno", "menu", "menú", "comedor"],
        respuesta: "🍽️ Cafetería — Edif. D, planta baja\n\nHorario:\n• Desayuno 06:30–09:00\n• Almuerzo 11:00–14:30\n• Merienda  15:00–17:00\n\nMenú de hoy:\n🍲 Sopa de res · 🍛 Pollo asado + arroz + ensalada · 🍮 Gelatina\nPrecio: $3.50\n\n☕ Cafetería express Edif. B: bebidas y snacks 07:00–18:00",
        tipo: "info",
        sugerencias: ["🗓️ Mis clases de hoy", "🏫 Mapa del campus"]
      },
      {
        keywords: ["wifi", "internet", "red", "contraseña", "clave", "conectar"],
        respuesta: "📶 WiFi del campus:\n\n• UniRed-Students — Para estudiantes (usuario: carné)\n• UniRed-Lab — Solo en laboratorios\n• UniRed-Guest — Visitantes (30 min/día)\n\n🔑 ¿Olvidaste tu clave? Portal → Mi Cuenta → Restablecer contraseña WiFi",
        tipo: "info",
        sugerencias: ["💻 Portal estudiantil", "🖥️ Laboratorio de cómputo"]
      },
      {
        keywords: ["laboratorio", "lab", "computo", "cómputo", "computadora", "imprimir", "impresora"],
        respuesta: "🖥️ Laboratorios de Cómputo — Edif. B:\n\n• Lab 1 (pb): 40 PCs · Lun–Vie 07:00–20:00 · Sáb 08:00–14:00\n• Lab 2 (of.108): 30 PCs · Uso libre cuando no hay clase\n\n🖨️ Impresión: $0.10 b/n · $0.25 color\n📌 Cargar saldo en ventanilla de cómputo",
        tipo: "info",
        sugerencias: ["💻 WiFi", "📋 Mis tareas de programación"]
      }
    ]
  },

  // ── BIENESTAR ────────────────────────────────────────────
  {
    categoria: "Bienestar",
    preguntas: [
      {
        keywords: ["estres", "estrés", "ansiedad", "mal", "triste", "deprimido", "deprimida", "agobiado", "agobiada", "presion", "presión", "cansado"],
        respuesta: "💜 No estás solo/a. El estrés académico es muy común.\n\nApoyo Psicológico Gratuito:\n📍 Edif. B, 2do nivel, of. 215\n⏰ Lun–Vie: 08:00–17:00 · ⚡ Atención urgente sin cita\n\nTécnicas rápidas:\n🌬️ Respira 4-7-8 (inhala 4s, retén 7s, exhala 8s)\n🚶 Camina 10 min al aire libre\n✍️ Escribe lo que te preocupa\n\nPedir ayuda es una fortaleza 💪",
        tipo: "info",
        sugerencias: ["🧠 Agendar cita psicológica", "📋 Organizar mis tareas"]
      },
      {
        keywords: ["psicologo", "psicólogo", "psicologia", "psicología", "salud mental", "apoyo emocional", "cita"],
        respuesta: "🧠 Psicología Estudiantil:\n\n📍 Edif. B, 2do nivel, of. 215\n⏰ Lun–Vie · 08:00–17:00\n📞 Ext. 305 · psicologia@universidad.edu\n\nServicios:\n• Orientación individual\n• Grupos de apoyo (ansiedad y estrés)\n• Talleres de técnicas de estudio\n• Manejo del tiempo y hábitos\n\n⚡ Urgencia: atención inmediata sin cita.",
        tipo: "info",
        sugerencias: ["📋 Organizar mis pendientes", "📚 Técnicas de estudio"]
      },
      {
        keywords: ["beca", "becas", "financiero", "economico", "económico", "subsidio", "dinero", "pago"],
        respuesta: "💰 Becas disponibles:\n\n• 🏆 Excelencia Académica (promedio ≥ 8.5)\n• 💰 Socioeconómica (situación familiar)\n• ⚽ Deportiva (atletas de alto rendimiento)\n• 🎨 Artística (música, arte, teatro)\n• ♿ Inclusión (estudiantes con discapacidad)\n\n📅 Convocatoria cierra: 28 de febrero de 2026\n📍 Bienestar Estudiantil · Edif. A, of. 110\n📋 Docs: DUI, constancia ingresos, notas del ciclo anterior",
        tipo: "info",
        sugerencias: ["📅 Fecha límite", "🧠 Apoyo psicológico"]
      },
      {
        keywords: ["deporte", "gym", "gimnasio", "ejercicio", "futbol", "fútbol", "cancha", "piscina"],
        respuesta: "⚽ Instalaciones deportivas:\n\n• 🏋️ Gimnasio — Edif. E · Lun–Sáb 06:00–20:00 (gratuito)\n• ⚽ Cancha fútbol — Todos los días\n• 🏀 Canchas básquetbol — 2 techadas\n• 🏊 Piscina semiolímpica — Lun–Vie 06:00–20:00 ($1/ingreso)\n\n📌 Clubes deportivos: inscripción al inicio de cada ciclo.",
        tipo: "info",
        sugerencias: ["💰 Beca deportiva", "🏫 Servicios del campus"]
      }
    ]
  },

  // ── TRÁMITES ─────────────────────────────────────────────
  {
    categoria: "Tramites",
    preguntas: [
      {
        keywords: ["matricula", "matrícula", "inscripcion", "inscripción", "inscribir", "seleccionar materias"],
        respuesta: "📋 Inscripciones Ciclo II-2026:\n\n• IV año+:   10–12 Junio\n• III año:   13–15 Junio\n• I–II año:  16–20 Junio\n\nPasos:\n1. Portal Estudiantil → Inscripciones\n2. Verifica que no tengas deudas\n3. Selecciona y confirma tus materias\n\n📍 Soporte: Registro Académico · Edif. A, of. 105",
        tipo: "info",
        sugerencias: ["📅 Calendario académico", "📋 Mis materias actuales"]
      },
      {
        keywords: ["constancia", "certificado", "carta", "documento", "tramite", "trámite", "titulo", "título"],
        respuesta: "📄 Documentos académicos:\n\n• Constancia de matrícula — 1 día hábil\n• Constancia de notas — 2-3 días\n• Certificado de conducta — 1 día\n• Historial académico — 3-5 días\n• Carta de egresado — 5-7 días\n\n📍 Registro Académico · Edif. A, of. 105\n⏰ Lun–Vie: 08:00–16:00",
        tipo: "info",
        sugerencias: ["🏫 ¿Dónde queda?", "📅 ¿Cuánto tarda?"]
      },
      {
        keywords: ["carnet", "carné", "id", "identificacion", "identificación", "perdí", "perdi", "reponer"],
        respuesta: "🪪 Carné estudiantil:\n\n¿Lo perdiste?\n1. Ve a Servicios Estudiantiles (Edif. A, pb)\n2. Presenta tu DUI\n3. Paga $5.00 de reposición\n4. Lo recibes el mismo día\n\n📌 Necesitas el carné para: biblioteca, WiFi, laboratorios y bus universitario.",
        tipo: "info",
        sugerencias: ["🏫 Servicios Estudiantiles", "💻 Portal estudiantil"]
      },
      {
        keywords: ["password", "contraseña", "olvidé", "olvide", "recuperar cuenta", "acceso", "login"],
        respuesta: "🔑 Recuperar acceso:\n\nPortal Estudiantil:\n1. portal.universidad.edu\n2. Clic en '¿Olvidé mi contraseña?'\n3. Ingresa tu correo institucional\n\nCorreo institucional:\n📍 Soporte TI · Edif. B, of. 103\n⏰ Lun–Vie: 08:00–17:00",
        tipo: "info",
        sugerencias: ["💻 Portal estudiantil", "📶 Problemas WiFi"]
      }
    ]
  },

  // ── ACTIVIDADES ──────────────────────────────────────────
  {
    categoria: "Actividades",
    preguntas: [
      {
        keywords: ["evento", "eventos", "actividad", "actividades", "esta semana", "que hay", "qué hay"],
        respuesta: "🎉 Eventos esta semana:",
        tipo: "agenda",
        agenda: [
          { hora: "Hoy · 12:00",       titulo: "Charla: Intercambio Internacional",  detalles: ["📍 Auditorio Principal · Becas Europa y LATAM · Entrada libre"], tag: "event", urgencia: 0 },
          { hora: "Mié 26 Feb · 16:00",titulo: "Hackathon 2026 — Inscripciones",     detalles: ["💻 Tema: Tecnología educativa · Equipos 3–5 personas · 🏆 $500 + pasantía"], tag: "event", urgencia: 0 },
          { hora: "Vie 28 Feb · 18:00", titulo: "Noche Cultural Universitaria",       detalles: ["📍 Plaza Central · Música, danza y arte · Entrada libre"],         tag: "event", urgencia: 0 }
        ],
        sugerencias: ["🏆 Inscribirme al Hackathon", "📋 Mis pendientes académicos"]
      },
      {
        keywords: ["club", "clubs", "grupo", "grupos", "extracurricular"],
        respuesta: "🎓 Clubes estudiantiles:\n\nTecnología:\n• Club de Programación — Mar 17:00\n• Club de Robótica — Jue 16:00\n• Ciberseguridad — Mié 17:30\n\nArte y Cultura:\n• Teatro — Lun y Mié 17:00\n• Coro — Mar 16:00\n• Fotografía — Vie 15:00\n\nLiderazgo:\n• Asociación de Estudiantes — Jue 17:00\n• Emprendimiento — Mié 16:00\n\n📍 Inscripción: Bienestar Estudiantil, Edif. A",
        tipo: "info",
        sugerencias: ["⚽ Clubes deportivos", "🎉 Eventos esta semana"]
      }
    ]
  }
];

// ============================================================
//  MOTOR DE BÚSQUEDA CON SCORE DE RELEVANCIA
//  Cuenta coincidencias de keywords y retorna la más relevante
// ============================================================
export const findBestResponse = (userInput) => {
  const input = userInput.toLowerCase().trim();
  let bestMatch = null;
  let highestScore = 0;

  for (const categoria of qaDatabase) {
    for (const item of categoria.preguntas) {
      const score = item.keywords.filter(key => input.includes(key)).length;
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }
  }

  if (bestMatch && highestScore > 0) return bestMatch;

  // Fallback
  return {
    respuesta: "🤔 No encontré información sobre eso.\nPuedo ayudarte con:\n\n📅 Horarios · 📋 Tareas · 📝 Exámenes\n🏫 Servicios · 💰 Becas · 🧠 Bienestar",
    tipo: "info",
    sugerencias: ["📅 Clases de hoy", "📋 Mis tareas", "📝 Mis exámenes", "🏫 Servicios"]
  };
};
