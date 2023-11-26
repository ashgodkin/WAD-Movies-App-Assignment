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
import ActorsContextProvider from "./contexts/actorsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMovies";
import NowPlayingPage from "./pages/nowPlayingPage";

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
      <ActorsContextProvider>
      <MoviesContextProvider>
      <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/trending" element={<TrendingMoviesPage/>} />
        <Route path="/actors/popular" element={<ActorsPage/>} />
        <Route path="/actors/:id" element={<ActorDetailsPage/>} />
        <Route path="/tvshows/trending" element={<TVShowsPage/>} />
        <Route path="/tvshows/:id" element={<TVShowDetailsPage/>} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage /> } />
        <Route path="/movies/now_playing" element={<NowPlayingPage />} />
        <Route path="/reviews/:id" element={<MovieReviewPage /> } />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
        </ActorsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false}
    />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
