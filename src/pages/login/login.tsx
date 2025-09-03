import { useState} from 'react'
import { NavLink } from "react-router-dom";
import Field from "../../ui/field/Field";
import Button from "../../ui/button/Button";

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const getActivClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";
  return (
    <div className="auth-container">
      <div className="header-image">
        <img src="../../public/image 1.png" alt="clicker" />
        <hr className="divider" />
        <img src="../../public/Clicker-12-14-2023 (3) 1.png" alt="pokemon" />
      </div>
      <div className="auth-form">
        <form className="form">
          <div className="form-header">
            <ul>
              <li>
                <NavLink to="/register" className={getActivClass}>
                  Sing up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={getActivClass}>
                  Sing in
                </NavLink>
              </li>
            </ul>
          </div>
          <Field type="text" placeholder="Login" onChange={e => setEmail(e.target.value)}/>
          <Field type="password" placeholder="Password" />
          {isLogin ? (
            <Field type="password" placeholder="Password confirmation" />
          ) : (
            ""
          )}
          <Button text="Sing in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
