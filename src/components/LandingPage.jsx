import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ username: "Manohar" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to My Project</h1>
        {user ? (
          <div>
            <p>Hello, {user.username}!</p>
            <button className="btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login">
              <button className="btn login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn signup-btn">Signup</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
