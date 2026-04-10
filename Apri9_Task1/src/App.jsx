
import { useState } from 'react';

import './App.css'

function App() {
  const startValue = {
    username: "",
    email: "",
    password: "" 
  };


  const [user, setUser] = useState(startValue);
  const [errors, setErrors] = useState(startValue);

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    setUser({ ...user, [name]: value });

    
    let currentErrors = { ...startValue };

    if (name === "username") {
      if (value.length < 5 || /[&%@#]/.test(value)) {
        currentErrors.username = "Username must be at least 5 characters and contain no special characters";
      }
    }

    if (name === "email") {
      if (!value.includes("@")) {
        currentErrors.email = "Email must contain @";
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        currentErrors.password = "Password must be at least 8 characters";
      }
    }

    setErrors(currentErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(startValue); 
  };

  return (
    <div className="container">
      <form className="box" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <div className="inputGroup">
          <label>Username:</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="inputGroup">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="inputGroup">
          <label>Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;