import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import ActorsPage from "./pages/actorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import TVShowsPage from "./pages/tvShowsPage";
import TVShowDetailsPage from "./pages/tvShowDetailsPage";
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import TVShowReviewPage from "./pages/tvShowReviewPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMovies";
import FantasyMoviePage from "./pages/fantasyMoviePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
      <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/fantasymovie" element={<FantasyMoviePage/>} />
        <Route path="/movies/trending" element={<TrendingMoviesPage/>} />
        <Route path="/tvshows/:id" element={<TVShowDetailsPage/>} />
        <Route path="/tvshows" element={<TVShowsPage/>} />
        <Route path="/actors/:id" element={<ActorDetailsPage/>} />
        <Route path="/actors" element={<ActorsPage /> } />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage /> } />
        <Route path="/reviews/:id" element={<MovieReviewPage /> } />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false}
    />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
