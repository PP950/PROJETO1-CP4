import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Contato from './routes/Contato.jsx';
import Sobre from './routes/Sobre.jsx';

// Criando Função BrowserRouter
const router = createBrowserRouter([
  {
    // Criando elemento Pai
    path: '/',
    element: <App />,
    errorElement: <Error />,

    // Criando elementos Filhos
    children: [
      { path: '/', element: <Home/> },
      { path: '/Produtos', element: <Produtos/> },
      { path: '/Contato', element: <Contato/> },
      { path: '/Sobre', element: <Sobre/> }
    ]
  }
]);

// Seleciona o elemento de root e renderiza o RouterProvider
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
