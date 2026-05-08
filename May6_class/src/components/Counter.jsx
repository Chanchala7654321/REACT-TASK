import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Counter({ title }) {
  const [count, setCount] = useState(0);
  const { theme, setTheme } = useContext(ThemeContext);

  function increment() {
    setCount((prev) => prev + 1);
  }
  
  function reset() {
    setCount(0);
  }
  
  function decrement() {
    setCount((prev) => prev - 1);
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`counter-box ${theme}`}>
      <button onClick={toggleTheme} >
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <h2>{title}</h2>
      <h1 className="count-display">{count}</h1>
      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;