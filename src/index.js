import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import LoginSignUp from "./components/LoginSignUp";

const Main = () => {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname == "/") window.location.replace("/login-signup");
  return (
    <React.StrictMode>
      <Outlet />
    </React.StrictMode>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login-signup",
        element: <LoginSignUp />,
      },
      {
        path: "/todo",
        element: <App />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
