// src/index.js

// Importo React y ReactDOM para la creación de la interfaz de usuario.
import React from 'react';
import ReactDOM from 'react-dom';

// Importo el componente principal 'App'.
import App from './App';

// Importo los estilos globales de la aplicación desde 'index.css'.
import './index.css';

// Renderizo el componente 'App' dentro del elemento con el ID 'root' en el HTML.
ReactDOM.render(
  // Utilizo 'React.StrictMode' para realizar verificaciones y advertencias adicionales en el modo de desarrollo.
  <React.StrictMode>
    {/* Renderizo el componente principal 'App' */}
    <App />
  </React.StrictMode>,
  // Obtengo el elemento del DOM con el ID 'root' donde se renderizará la aplicación.
  document.getElementById('root')
);

