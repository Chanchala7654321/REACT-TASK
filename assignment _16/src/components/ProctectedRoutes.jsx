import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/Authcontext";

export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export function IsLoggedIn() {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/movies" replace /> : <Outlet />;
}