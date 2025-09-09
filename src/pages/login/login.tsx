import { useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Field from "../../ui/field/Field";
import Button from "../../ui/button/Button";
import AuthStore from '../../store/store';
import axios from 'axios';
import "./Login.scss";

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const getActivClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await AuthStore.login({ email, password });
    if (AuthStore.isAuth) {
      navigation("/user");
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (!err.response) {
        setError("No Server Response");
      } else {
        switch (err.response.status) {
          case 400:
            setError("User not found or password not found");
            break;
          case 401:
            setError("Invalid password");
            break;
          case 500:
            setError("Internal Server Error");
            break;
          default:
            setError("Login Failed");
        }
      }
    }
  }
};

  return (
    <div className="auth-container">
      <div className="header-image">
        <img src="/image 1.png" alt="clicker" />
        <hr className="divider" />
        <img src="/Clicker-12-14-2023 (3) 1.png" alt="pokemon" />
      </div>
      <div className="auth-form">
        <form className="form" onSubmit={handleSubmit}>
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
          <Field
            type="email"
            value={email}
            placeholder="Login"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="error">{error}</div>}

          <Button type="submit" text="Sign in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
