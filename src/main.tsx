import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './theme/style.css';
import Header from './components/header/header.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
