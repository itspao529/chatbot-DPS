import React from 'react';

const TAG_LABELS = { exam:'Examen', task:'Tarea', class:'Clase', event:'Evento' };

export default function AgendaCard({ hora, titulo, detalles = [], tag = 'class', urgencia = 0 }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-time">⏰ {hora}</div>
        <span className={`card-tag tag--${tag}`}>{TAG_LABELS[tag] || tag}</span>
      </div>
      <div className="card-title">{titulo}</div>
      <div className="card-details">
        {detalles.map((d, i) => <div key={i}>{d}</div>)}
      </div>
      {urgencia > 0 && (
        <div className="card-urgency">
          <div className="card-urgency-fill" style={{ width: `${urgencia}%` }} />
        </div>
      )}
    </div>
  );
}
