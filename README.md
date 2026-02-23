# 📚 Agenda Estudiantil — Chatbot

Chatbot académico para estudiantes con React + Vite.

## 🚀 Instalación y uso

```bash
npm install
npm run dev
```
Abre → http://localhost:5173

## 📁 Estructura

```
src/
├── App.jsx                  ← Componente principal
├── main.jsx                 ← Entrada React
├── index.css                ← Todo el diseño y animaciones
├── components/
│   ├── MessageBubble.jsx    ← Burbujas de mensaje
│   ├── AgendaCard.jsx       ← Tarjetas de agenda
│   └── TypingIndicator.jsx  ← Animación "escribiendo..."
└── data/
    └── qa.js                ← Preguntas, respuestas y motor de búsqueda
```

## ✏️ Agregar respuestas

Edita `src/data/qa.js`. Cada entrada tiene:
- `keywords` → palabras que activan la respuesta
- `respuesta` → texto que muestra el bot
- `tipo`      → `"info"` o `"agenda"`
- `agenda`    → array de tarjetas (opcional)
- `sugerencias` → chips de seguimiento (opcional)

### Tags para tarjetas de agenda:
`exam` 🟡 · `task` 🟢 · `class` 🟣 · `event` 🩷
