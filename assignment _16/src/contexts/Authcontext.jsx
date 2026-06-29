import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);
const AuthSetterContext = createContext(undefined);

export function AuthProvider({ children }) {
  const isAuthFromStorage = localStorage.getItem("isAuth") === "true";
  const [isAuth, setIsAuth] = useState(isAuthFromStorage);

  const setAuthValue = (value) => {
    setIsAuth(value);
    if (value) {
      localStorage.setItem("isAuth", "true");
    } else {
      localStorage.removeItem("isAuth");
    }
  };

  return (
    <AuthContext.Provider value={isAuth}>
      <AuthSetterContext.Provider value={setAuthValue}>
        {children}
      </AuthSetterContext.Provider>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const result = useContext(AuthContext);
  if (result === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return result;
}

export function useAuthSetter() {
  const result = useContext(AuthSetterContext);
  if (result === undefined) {
    throw new Error("useAuthSetter must be used within AuthProvider");
  }
  return result;
}
