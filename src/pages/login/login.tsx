import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Field from "../../ui/field/Field";
import Button from "../../ui/button/Button";
import "./Login.scss";
import { login } from "../../features/auth/authActions.ts";
import { useAppDispatch } from "../../app/hooks.js";
import { toast } from "react-toastify";

export const Login = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const getActivClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resultAction = await dispatch(login({ email, password }));

    if (login.fulfilled.match(resultAction)) {
      toast.success("Login successful!");
      navigation("/profile");
    } else {
      const errorMessage =
        (resultAction.payload as { message?: string })?.message ||
        "Something went wrong";
      toast.error(errorMessage);
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
          <Field placeholder="Email" required icon="/public/_.png">
            <input
              className="input-ui"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field placeholder="Password" required icon="/public/_.png">
            <input
              className="input-ui"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>

          <Button type="submit" text="Sign in" />
        </form>
      </div>
    </div>
  );
};