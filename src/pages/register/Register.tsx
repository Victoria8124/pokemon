import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Field from "../../shared/ui/field/Field.js";
import Button from "../../shared/ui/button/Button.js";
import "./register.scss";
import { useAppDispatch } from "../../app/hooks.js";
import { registration } from "../../features/auth/authActions.ts";
import { toast } from "react-toastify";

const Register = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const getActivClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resultAction = await dispatch(registration({ email, password }));
    if (registration.fulfilled.match(resultAction)) {
      toast.success("Registration successful! Please log in.");
      navigation("/login");
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
        <img src="/public/image 1.png" alt="clicker" />
        <hr className="divider" />
        <img src="/Clicker-12-14-2023 (3) 1.png" alt="pokemon" />
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
          <Field placeholder="Email" required icon="/public/_.png">
            <input
              type="email"
              className="input-ui"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field required icon="/public/_.png" placeholder="Password">
            <input
              type="password"
              value={password}
              className="input-ui"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          <Field
            placeholder="Password confirmation"
            required
            icon="/public/_.png"
          >
            <input
              type="password"
              value={passwordConfirm}
              className="input-ui"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </Field>

          <Button text="Sing in" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
