import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./main.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <div> Test Route </div>,
  },
]);

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// root.render(<App />);
