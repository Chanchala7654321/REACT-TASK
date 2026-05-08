import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Counter title="Counter 1" />
    </ThemeProvider>
  );
}

export default App;