import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/Authcontext";
import ProtectedRoutes, { IsLoggedIn } from "./components/ProctectedRoutes";
import Login from "./components/Login";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth-guarded routes for non-logged in users only */}
          <Route element={<IsLoggedIn />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Protected routes for logged in users only */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:imdbId" element={<MovieDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
