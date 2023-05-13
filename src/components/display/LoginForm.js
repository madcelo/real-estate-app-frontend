import React, { useState } from "react";
import { authAPI } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { token } = await authAPI.login({ email, password });

      localStorage.setItem("authToken", token);
      navigate("/admin");
    } catch (error) {
      setError("Invalid email or password");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="login-form">
      <h1 className="login-form-header">Login</h1>
      <div className="login-form-container">
        {error && <span className="login-form-error">{error}</span>}
        <form onSubmit={handleSubmit}>
          <label className="login-form-label" htmlFor="email">
            Email
          </label>
          <input
            className="login-form-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="login-form-label" htmlFor="password">
            Password
          </label>
          <input
            className="login-form-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            required
          />
          <button className="login-form-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
