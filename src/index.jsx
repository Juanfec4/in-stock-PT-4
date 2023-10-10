import './styles/global.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

//Import layout
import Header from './components/header/header'
//Import pages
import ItemPage from './pages/Item/ItemPage'
import WarehousePage from './pages/Warehouse/WarehousePage'
import InventoryPage from './pages/Inventory/InventoryPage'
import Delete from './components/warehouse/delete/delete'

//Main Layout
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Delete />
    </>
  )
}

//Router
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <WarehousePage />,
      },
      {
        path: '/inventory',
        element: <InventoryPage />,
      },
      {
        path: '/item/:id',
        element: <ItemPage />,
      },
    ],
  },
])

//Render routes
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
