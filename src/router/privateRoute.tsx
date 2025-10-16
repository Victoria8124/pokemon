import { Navigate, Outlet } from "react-router-dom";
import { selectAccessToken } from "../features/auth/authSlice";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const token = useSelector(selectAccessToken);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};