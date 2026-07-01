import axios from "axios";

const BASE_URL = "http://localhost:3000";

// Loader: fetch all movies
export async function getMovies() {
  const res = await axios.get(`${BASE_URL}/movies`);
  return res.data;
}

// Loader: fetch favorites, then enrich with full movie data
export async function getFavoritesLoader() {
  const [favsRes, moviesRes] = await Promise.all([
    axios.get(`${BASE_URL}/favorites`),
    axios.get(`${BASE_URL}/movies`),
  ]);

  const favorites = favsRes.data;
  const movies = moviesRes.data;

  return favorites
    .map((fav) => movies.find((m) => m.id === fav.movieId))
    .filter(Boolean);
}
