import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Login} from "./components/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
