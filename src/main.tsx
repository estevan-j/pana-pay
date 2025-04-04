
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// En desarrollo eliminamos StrictMode para evitar problemas con Keycloak
createRoot(document.getElementById('root')!).render(
  <App />
);
