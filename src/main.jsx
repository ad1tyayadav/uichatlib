import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Hero from "./components/Hero";
import Docs from "./components/pages/Docs";
import Pricing from "./components/pages/Pricing";
import Showcase from "./components/pages/Showcase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Hero /> },
      { path: "docs", element: <Docs /> },
      { path: "pricing", element: <Pricing /> },
      { path: "showcase", element: <Showcase /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
