import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getFavorites() {
  const res = await axios.get(`${BASE_URL}/favorites`);
  return res.data;
}

export async function addFavorite(movieId) {
  const res = await axios.post(`${BASE_URL}/favorites`, { movieId });
  return res.data;
}

export async function removeFavorite(favoriteId) {
  await axios.delete(`${BASE_URL}/favorites/${favoriteId}`);
}
