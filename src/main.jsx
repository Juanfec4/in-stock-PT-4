import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import Header from "./components/layout/header";

import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import WarehouseListPage from "./pages/warehouses";
import WarehouseDetailsPage from "./pages/warehouse";
import AddWarehousePage from "./pages/addWarehouse";
import EditWarehousePage from "./pages/editWarehouse";
import ItemPage from "./pages/item";
import InventoryPage from "./pages/Inventory";
import AddItemPage from "./pages/addItem";
import EditItemPage from "./pages/editItem";
//Main Layout
const AppLayout = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/warehouses");
  }, [navigate]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/warehouses",
        element: <WarehouseListPage />,
      },
      {
        path: "/warehouses/:id",
        element: <WarehouseDetailsPage />,
      },
      {
        path: "/warehouses/add",
        element: <AddWarehousePage />,
      },
      {
        path: "/warehouses/edit/:id",
        element: <EditWarehousePage />,
      },
      {
        path: "/inventory",
        element: <InventoryPage />,
      },
      {
        path: "/inventory/:id",
        element: <ItemPage />,
      },
      {
        path: "/inventory/add",
        element: <AddItemPage />,
      },
      {
        path: "/inventory/edit/:id",
        element: <EditItemPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
