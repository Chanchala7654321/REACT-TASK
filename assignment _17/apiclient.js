


import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;

// export const addFavorite = async (movieId) => {
//   const res = await api.post("/favorites", { movieId });
//   return res.data;
// };

// export const removeFavorite = async (favoriteId) => {
//   return api.delete(`/favorites/${favoriteId}`);
// };

// export const getFavorites = async () => {
//   const res = await api.get("/favorites");
//   return res.data;
// };

// export const getFavoriteByMovieId = async (movieId) => {
//   const res = await api.get(`/favorites?movieId=${movieId}`);
//   return res.data[0] || null; 
// };
