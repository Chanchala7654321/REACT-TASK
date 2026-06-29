import React, { useState, useEffect } from "react";
import { useAuth, useAuthSetter } from "../contexts/Authcontext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useAuth();
  const setIsAuth = useAuthSetter();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/movies", { replace: true });
    }
  }, [isAuth, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    if (userName === "admin" && password === "admin") {
      setIsAuth(true);
      navigate("/movies", { replace: true });
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}