
// Linguagem de programação: TypeScript/TSX (React com TypeScript)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Busca o elemento DOM com id 'root' onde a aplicação React será montada
const rootElement = document.getElementById('root');

// Verifica se o elemento root existe, caso contrário lança um erro
// Isso previne erros de runtime se o elemento não for encontrado
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Cria a raiz da aplicação React usando a nova API do React 18
const root = ReactDOM.createRoot(rootElement);

// Renderiza a aplicação dentro do React.StrictMode
// StrictMode ajuda a identificar problemas potenciais na aplicação durante o desenvolvimento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
