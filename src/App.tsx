import { Navigate, Route, Routes } from "react-router-dom";
import User from "./pages/user/user";
import { Register }  from "./pages/register/Register";
import { PrivateRoute } from './router/privateRoute'
import Admin from "./pages/admin/admin";
import { Login  } from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

const App = () => {
   return (
       <Routes>
         <Route path="/" element={<Navigate to="/register" />} />
         <Route element={<PrivateRoute />}>
           <Route path="/user" element={<User />} />
           <Route path="/admin" element={<Admin />} />
           <Route path="/profile" element={<Profile/>} />
         </Route>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>
   );
};

export default App;
