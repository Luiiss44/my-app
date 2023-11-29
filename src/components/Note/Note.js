// src/components/Note/Note.js

// Importo React para la creación de componentes.
import React from 'react';

// Importo los estilos específicos del componente desde 'Note.css'.
import './Note.css';

// Defino el componente 'Note' que recibe 'note' y 'removeNote' como propiedades.
function Note({ note, removeNote }) {
  // Devuelvo la estructura del componente 'Note'.
  return (
    <div className="note">
      {/* Título de la nota */}
      <h2>{note.title}</h2>
      {/* Contenido de la nota */}
      <p>{note.content}</p>
      {/* Botón para eliminar la nota */}
      <button onClick={() => removeNote(note.id)}>Eliminar</button>
    </div>
  );
}

// Exporto el componente 'Note' como el componente por defecto.
export default Note;

