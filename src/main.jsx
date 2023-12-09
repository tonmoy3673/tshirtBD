import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import Countries from "./components/Countries/Countries";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("products.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/countries",
        element: <Countries />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
