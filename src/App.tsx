import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
//import { observer } from 'mobx-react-lite';
import AuthStore from './store/store';
//import { Provider } from "react-redux";
//import { router } from './router/router.data'; 
import User from "./pages/user/user";
import Register from "./pages/register/Register";
//import store from "./store/store";
import PrivateRoute from './router/privateRoute'
import Admin from "./pages/admin/admin";
import Login from "./pages/login/login";

const App = () => {
  useEffect(() => {
    AuthStore.checkAuth();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route element={<PrivateRoute />}>
          <Route element={<User />} path="/user" />
          <Route element={<Admin />} path="/admin" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </div>
  );
};

export default App;
