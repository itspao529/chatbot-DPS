import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import MessageBubble from './components/MessageBubble';
import TypingIndicator from './components/TypingIndicator';
import { findBestResponse } from './data/qa';

const WELCOME_CHIPS = ['📅 Clases de hoy', '📋 Mis tareas', '📝 Mis exámenes', '🗓️ Calendario'];

const WELCOME_MSG = {
  id: 0,
  sender: 'bot',
  text: '¡Hola! 👋 Soy tu asistente de Agenda Estudiantil.\n¿Qué quieres revisar hoy?',
};

let nextId = 1;

export default function App() {
  const [messages,  setMessages]  = useState([WELCOME_MSG]);
  const [input,     setInput]     = useState('');
  const [isTyping,  setIsTyping]  = useState(false);
  const pendingCount = 3; // tareas urgentes (estático por ahora)
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { id: nextId++, sender: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const result = findBestResponse(trimmed);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id:         nextId++,
        sender:     'bot',
        text:       result.respuesta,
        agenda:     result.agenda     || null,
        sugerencias: result.sugerencias || null,
      }]);
    }, 700);
  };

  const handleSubmit = (e) => { e.preventDefault(); sendMessage(input); };

  const dateLabel = new Date().toLocaleDateString('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long'
  });

  return (
    <div className="widget">

      {/* ── HEADER ── */}
      <header className="hdr">
        <div className="hdr-avatar">📚</div>
        <div className="hdr-info">
          <div className="hdr-title">Agenda Estudiantil</div>
          <div className="hdr-sub">
            <span className="status-dot" />
            Asistente activo · IA
          </div>
        </div>
        {pendingCount > 0 && <div className="hdr-badge">{pendingCount}</div>}
      </header>

      {/* ── MENSAJES ── */}
      <main className="msgs">
        <div className="divider">{dateLabel}</div>

        {messages.map((msg) => (
          <React.Fragment key={msg.id}>
            <MessageBubble message={msg} onChipClick={sendMessage} />

            {/* Chips de bienvenida — fuera de la burbuja */}
            {msg.id === 0 && (
              <div className="chips">
                {WELCOME_CHIPS.map(label => (
                  <button
                    key={label}
                    className="chip chip--solid"
                    onClick={() => sendMessage(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}

        {isTyping && <TypingIndicator />}
        <div ref={scrollRef} />
      </main>

      {/* ── INPUT ── */}
      <footer className="footer">
        <form onSubmit={handleSubmit} style={{ display:'flex', gap:'.45rem', flex:1, alignItems:'center' }}>
          <input
            className="input"
            type="text"
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={e => setInput(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="send" aria-label="Enviar">
            <Send size={17} />
          </button>
        </form>
      </footer>

    </div>
  );
}
