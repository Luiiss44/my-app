// src/components/NoteEditor/NoteEditor.js

// Importo React y 'useState' para gestionar el estado en React.
import React, { useState } from 'react';

// Importo los estilos específicos del componente desde 'NoteEditor.css'.
import './NoteEditor.css';

// Defino el componente 'NoteEditor' que recibe 'addNote' como propiedad.
function NoteEditor({ addNote }) {
  // Establezco el estado local 'title' y 'content' utilizando 'useState'.
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Defino la función 'handleSubmit' que se ejecutará al enviar el formulario.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifico si tanto el título como el contenido tienen texto antes de agregar la nota.
    if (title.trim() || content.trim()) {
      // Llamo a la función 'addNote' pasando un objeto con el título, contenido y una ID única.
      addNote({ title, content, id: Date.now() });
      // Limpio los estados 'title' y 'content' después de agregar la nota.
      setTitle('');
      setContent('');
    }
  };

  // Devuelvo la estructura del componente 'NoteEditor'.
  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      {/* Input para el título de la nota */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      {/* Área de texto para el contenido de la nota */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenido"
      />
      {/* Botón para enviar el formulario y añadir la nota */}
      <button type="submit">Añadir Nota</button>
    </form>
  );
}

// Exporto el componente 'NoteEditor' como el componente por defecto.
export default NoteEditor;
