import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTVShows } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


const TVShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = tvShows.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToFavouritesIcon tvShow={tvShow} />
      }}
    />
  );
};
export default TVShowsPage;