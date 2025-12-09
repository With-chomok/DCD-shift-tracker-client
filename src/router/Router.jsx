import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/coverage/Coverage";
import About from "../pages/about/About/About";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendPercel from "../pages/sendparcel/SendPercel";
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
      },
      {
        path:"/rider",
        element:  <PrivateRoute><Rider></Rider></PrivateRoute>
      },
      {
        path:"/sendparcel",
        element: <PrivateRoute><SendPercel></SendPercel></PrivateRoute>
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
