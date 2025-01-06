import React, { StrictMode } from 'react'; // Ensure React is imported
import { createRoot } from 'react-dom/client'; // Ensure correct React DOM method is used
import './index.css'; // Ensure the file exists and the path is correct
import App from './App.jsx'; // Ensure App.jsx exists in the same folder

// Ensure there is an element with the ID 'root' in your index.html
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No root element found. Ensure your index.html has <div id='root'></div>");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
