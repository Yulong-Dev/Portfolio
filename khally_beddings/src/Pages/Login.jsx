import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import sha256 from "js-sha256";
import "./Login.css";
import Navbar from "../components/Navbar/Navbar";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { email, password } = form;
  
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
  
    const success = login(email, sha256(password)); // 🔥 Corrected here
  
    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login">
      <Navbar />
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        
        <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <label className="show-password">
        <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
            className="show-password-checkbox"
        /> 
          Show Password
        </label>
        </div>

        <button type="submit">Login</button>

        <p className="redirect-text">
          Don't have an account? <a href="/signup">Signup</a>
        </p>

        <p className="redirect-text">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
