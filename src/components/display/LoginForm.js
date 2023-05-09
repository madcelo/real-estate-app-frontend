import React, { useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";   

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/auth/login", { email, password });
      const { token } = response.data;

      localStorage.setItem("authToken", token);
      navigate("/admin");
    } catch (error) {
      setError("Invalid email or password");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="login-form-container">
      {error && <span className="error-message">{error}</span>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;