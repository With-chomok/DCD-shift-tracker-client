import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/coverage/Coverage";
import About from "../pages/about/About/About";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader:() => fetch("/warehouses.json").then(res => res.json())
      },
      {
        path:"/about",
        Component: About
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path:"login",
        Component: Login
      },
      {
        path:"register",
        Component: Register
      }
    ]
  }
]);
