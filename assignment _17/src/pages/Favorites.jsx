import { useLoaderData } from "react-router-dom";

function Favorites() {
  const favorites = useLoaderData();

  return (
    <div>
      <h1>My Favorite Movies</h1>

      {favorites.length === 0 ? (
        <h3>No favorite movies yet </h3>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {favorites.map((movie) =>
            movie ? (
              <div
                key={movie.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                {/* Liked badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "orangered",
                    color: "white",
                    borderRadius: "6px",
                    padding: "3px 10px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Liked
                </span>

                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "15px" }}>
                  <h2>{movie.title}</h2>

                  <p>
                    {movie.releaseYear} • {movie.duration}
                  </p>

                  <p>⭐ {movie.rating}</p>

                  <p>{movie.description}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default Favorites;