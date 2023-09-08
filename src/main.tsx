import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './theme/style.tsx';
import Game from './pages/game/miniGame.tsx';
import Products from './pages/produtcts/products.tsx';
import NotFound from './pages/error/error.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'game',
        element: <Game />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>
);
