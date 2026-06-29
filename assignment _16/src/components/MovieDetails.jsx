import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { data as moviesData } from "../Data";
import { useAuthSetter } from "../contexts/Authcontext";

export default function MovieDetails() {
  const { imdbId } = useParams();
  const navigate = useNavigate();
  const setIsAuth = useAuthSetter();

  const movie = moviesData.find((m) => m.imdbId === imdbId);

  function handleLogout() {
    setIsAuth(false);
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <Link to="/movies">Back</Link>

      <h1>{movie.title}</h1>

      <img
        src={movie.imgUrl}
        alt={movie.title}
        width="250"
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop";
        }}
      />

      <p>{movie.description}</p>
    </div>
  );
}
