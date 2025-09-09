import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Field  from "../../ui/field/Field.js";
import Button from "../../ui/button/Button.js";
import "./register.scss";
import AuthStore from "../../store/store.js";
import axios from "axios";

const Register = () => {
  const navigation = useNavigate();

  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');

  const getActivClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
       setError("Your password must contain at least 8 characters");
       return;
    }
      if (password !== passwordConfirm) {
        setError("Passwords do not match");
        return;
      }

    try {
     await AuthStore.registration({ email, password });
      navigation("/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (!err.response) {
          setError("No Server Response");
        } else {
          switch (err.response.status) {
            case 400:
              setError("User already exists");
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
        <img src="../../public/image 1.png" alt="clicker" />
        <hr className="divider" />
        <img src="../../public/Clicker-12-14-2023 (3) 1.png" alt="pokemon" />
      </div>
      <div className="auth-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-header">
            <ul>
              <li>
                <NavLink to="/register" className={getActivClass}>
                  Sign up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={getActivClass}
                  prefetch="intent"
                >
                  Sign in
                </NavLink>
              </li>
            </ul>
          </div>
          <Field
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Field
            type="password"
            placeholder="Password confirmation"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          {error && <div className="error">{error}</div>}

          <Button text="Sing in" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
