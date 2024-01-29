import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/common/ThemeContext';
import './index.css';

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
