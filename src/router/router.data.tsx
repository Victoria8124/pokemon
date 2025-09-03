import Login from '../pages/login/login';
import Register from '../pages/register/Register';
import User from '../pages/user/user';
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/register" replace/>,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/",
    Component: User,
  },
]);
