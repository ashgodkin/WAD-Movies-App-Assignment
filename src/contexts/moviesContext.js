import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [watchList, setWatchList] = useState( {} )
  const [favouriteActors, setFavouriteActors] = useState( {} )

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };
  
  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToWatchList = (movie) => {
    let newWatchList = [...watchList];
    if (!watchList.includes(movie.id)) {
      newWatchList.push(movie.id);
    }
    setWatchList(newWatchList);
    console.log('addToWatchList')
  }

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        favouriteActors,
        addToWatchList,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;