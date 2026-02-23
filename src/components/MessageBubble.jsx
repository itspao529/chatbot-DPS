import React from 'react';
import AgendaCard from './AgendaCard';

export default function MessageBubble({ message, onChipClick }) {
  const { text, sender, agenda, sugerencias } = message;
  const isBot = sender === 'bot';

  return (
    <div className={`row row--${sender}`}>
      <div className={`bubble bubble--${sender}`}>
        <span style={{ whiteSpace: 'pre-line' }}>{text}</span>

        {/* Tarjetas de agenda */}
        {isBot && agenda?.length > 0 && (
          <div>
            {agenda.map((item, i) => <AgendaCard key={i} {...item} />)}
          </div>
        )}

        {/* Chips de sugerencia */}
        {isBot && sugerencias?.length > 0 && (
          <div className="chips">
            {sugerencias.map(s => (
              <button key={s} className="chip" onClick={() => onChipClick?.(s)}>{s}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
