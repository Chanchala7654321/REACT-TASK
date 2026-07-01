import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import { getMovies, getFavoritesLoader } from "../api/loaders/movieLoaders.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: getMovies,
      },
      {
        path: "favorites",
        Component: Favorites,
        loader: getFavoritesLoader,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
