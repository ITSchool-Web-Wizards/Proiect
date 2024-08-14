import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import Destination from "./Pages/Destination/Destination";
import Crew from "./Pages/Crew/Crew";
import Technology from "./Pages/Technology/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "homepage", element: <HomePage /> },
      { path: "destination", element: <Destination /> },
      { path: "crew", element: <Crew /> },
      { path: "technology", element: <Technology /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
