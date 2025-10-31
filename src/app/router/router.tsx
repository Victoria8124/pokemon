import { createBrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import User from "../../pages/user/user";
import Profile from "../../pages/profile/Profile";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/register" />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
