// src/App.js

// Importo React, 'useState' y 'useEffect' para gestionar el estado y el ciclo de vida en React.
import React, { useState, useEffect } from 'react';

// Importo los componentes 'NoteList' y 'NoteEditor'.
import NoteList from './components/NoteList/NoteList';
import NoteEditor from './components/NoteEditor/NoteEditor';

// Importo los estilos específicos de la aplicación desde 'App.css'.
import './App.css';

// Defino el componente principal 'App'.
function App() {
  // Establezco el estado local 'notes' y 'setNotes' para gestionar las notas.
  const [notes, setNotes] = useState([]);

  // useEffect para cargar las notas almacenadas en el localStorage al iniciar la aplicación.
  useEffect(() => {
    // Parseo las notas almacenadas o asigno un array vacío si no hay notas.
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    // Actualizo el estado 'notes' con las notas cargadas.
    setNotes(savedNotes);
  }, []);

  // useEffect para guardar las notas en el localStorage cada vez que 'notes' se actualiza.
  useEffect(() => {
    // Convierto las notas a formato JSON y las almaceno en el localStorage.
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Función para añadir una nueva nota al estado 'notes'.
  const addNote = (note) => {
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  // Función para eliminar una nota del estado 'notes'.
  const removeNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  // Devuelvo la estructura del componente 'App'.
  return (
    <div className="app-container">
      {/* Encabezado de la aplicación */}
      <h1>Aplicación de Notas</h1>
      {/* Componente 'NoteEditor' para añadir nuevas notas */}
      <NoteEditor addNote={addNote} />
      {/* Componente 'NoteList' para mostrar la lista de notas */}
      <NoteList notes={notes} removeNote={removeNote} />
    </div>
  );
}

// Exporto el componente 'App' como el componente por defecto.
export default App;
