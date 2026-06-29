import React from "react";
import { data as moviesData } from "../Data";
import { useAuthSetter } from "../contexts/Authcontext";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const setIsAuth = useAuthSetter();
  const navigate = useNavigate();

  function handleLogout() {
    setIsAuth(false);
    navigate("/login", { replace: true });
  }

  function handleMovieClick(imdbId) {
    navigate(`/movies/${imdbId}`);
  }

  return (
    <div>
      {moviesData.map((movie) => (
        <div
          key={movie.imdbId}
          onClick={() => handleMovieClick(movie.imdbId)}
        >
          <img
            src={movie.imgUrl}
            alt={movie.title}
            loading="lazy"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop";
            }}
          />

          <h2>{movie.title}</h2>

          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}