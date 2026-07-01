import api from "../../../apiclient";

export async function getMovies() {
  const res = await api.get("/movies");
  return res;
}

// export async function getFavorites() {
//   const favRes = await api.get("/favorites");
//   const movieRes = await api.get("/movies");

//   const favorites = favRes.data;
//   const movies = movieRes.data;

//   return favorites.map((fav) =>
//     movies.find((movie) => movie.id === fav.movieId)
//   );
// }


