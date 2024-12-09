import React, { useState } from "react";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Store token
        localStorage.setItem("firstName", JSON.stringify(data.firstName));
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: data.message,
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      {/* Menu bar (visible only on small screens) */}
      <nav className="menu-bar">
        <button className="menu-button">☰</button>
      </nav>
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          name="email"
          className="login-input"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          className="login-input"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
