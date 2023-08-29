import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact-us",
    element: <Contact></Contact>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/about-us",
    element: <About></About>,
    errorElement: <ErrorPage></ErrorPage>
  }, 
  {
    path: "/privacy",
    element: <Privacy></Privacy>,
    errorElement: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);