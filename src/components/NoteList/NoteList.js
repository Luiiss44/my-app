// src/components/NoteList/NoteList.js

// Importo React y 'useState' para el manejo del estado en React.
import React, { useState } from 'react';

// Importo el componente 'Note' que se utilizará en el renderizado.
import Note from '../Note/Note';

// Importo los estilos específicos para 'NoteList'.
import './NoteList.css';

// Defino el componente 'NoteList' que recibe 'notes' y 'removeNote' como propiedades.
function NoteList({ notes, removeNote }) {
  // Establezco el estado local 'searchTerm' y la función para actualizarlo ('setSearchTerm').
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar las notas según el término de búsqueda en 'searchTerm'.
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Devuelvo la estructura del componente 'NoteList'.
  return (
    <div className="note-list">
      {/* Contenedor del campo de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar notas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Contenedor de la cuadrícula de notas */}
      <div className="grid-container">
        {/* Mapeo las notas filtradas y renderizo el componente 'Note' para cada una.
          Este bloque de código utiliza el método map para recorrer cada nota en el array filteredNotes 
         y crea un componente 'Note' para representar cada una de ellas en la interfaz de usuario.
      */}
        {filteredNotes.map((note) => (
          <Note key={note.id} note={note} removeNote={removeNote} />
        ))}
      </div>
    </div>
  );
}

// Exporto el componente 'NoteList' como el componente por defecto.
export default NoteList;
