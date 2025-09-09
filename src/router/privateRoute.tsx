import { Navigate, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import authStore from "../store/store";

const PrivateRoute = observer(() => {
  if (authStore.isAuthInProgress) {
    return <div>Checking auth...</div>;
  }

  if (authStore.isAuth) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
});

export default PrivateRoute;

