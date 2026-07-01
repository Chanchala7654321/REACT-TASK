import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../apiclient";

function Home() {
  const movies = useLoaderData();
  const [favoritesMap, setFavoritesMap] = useState({});
  const [loadingIds, setLoadingIds] = useState({});

  // Load favorites on mount
  useEffect(() => {
    async function loadFavorites() {
      try {
        const favorites = await getFavorites();
        const map = {};
        favorites.forEach((fav) => {
          map[fav.movieId] = fav.id;
        });
        setFavoritesMap(map);
      } catch (err) {
        console.error("Failed to load favorites:", err);
      }
    }
    loadFavorites();
  }, []);

  const isFavorite = (movieId) => Boolean(favoritesMap[movieId]);

  const handleToggleFavorite = async (movie) => {
    const movieId = movie.id;
    if (loadingIds[movieId]) return;

    setLoadingIds((prev) => ({ ...prev, [movieId]: true }));

    try {
      if (isFavorite(movieId)) {
        const favoriteId = favoritesMap[movieId];
        await removeFavorite(favoriteId);
        setFavoritesMap((prev) => {
          const updated = { ...prev };
          delete updated[movieId];
          return updated;
        });
      } else {
        const newFav = await addFavorite(movieId);
        setFavoritesMap((prev) => ({
          ...prev,
          [movieId]: newFav.id,
        }));
      }
    } catch (err) {
      console.error("Failed to update favorite:", err);
    } finally {
      setLoadingIds((prev) => ({ ...prev, [movieId]: false }));
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h2>{movie.title}</h2>

              <p>
                {movie.releaseYear} • {movie.duration}
              </p>

              <p>⭐ {movie.rating}</p>

              <p>{movie.description}</p>

              <button
                onClick={() => handleToggleFavorite(movie)}
                disabled={loadingIds[movie.id]}
                style={{
                  marginTop: "10px",
                  padding: "6px 16px",
                  borderRadius: "6px",
                  border: "1px solid",
                  cursor: loadingIds[movie.id] ? "not-allowed" : "pointer",
                  backgroundColor: isFavorite(movie.id) ? "orangered" : "white",
                  color: isFavorite(movie.id) ? "white" : "orangered",
                  borderColor: "orangered",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "background-color 0.2s, color 0.2s",
                }}
              >
                {loadingIds[movie.id]
                  ? "..."
                  : isFavorite(movie.id)
                  ? "Liked"
                  : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;