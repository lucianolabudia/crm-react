import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { NewClient, action as actionNewClient } from './pages/NewClient'
import { Index, loader as loaderClients } from './pages/Index'
import { EditClient, loader as editLoaderClient, action as editActionClient } from './pages/EditClient'
import ErrorPage from './components/ErrorPage'
import { action as deleteActionClient } from './components/Client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderClients,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: actionNewClient,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditClient />,
        loader: editLoaderClient,
        action: editActionClient,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: deleteActionClient
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
