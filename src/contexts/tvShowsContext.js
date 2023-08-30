import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [watchList, setWatchList] = useState( {} )
  const [favouriteActors, setFavouriteActors] = useState( {} )

  const addToFavourites = (tvShow) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(tvShow.id)) {
      newFavourites.push(tvShow.id);
    }
    setFavourites(newFavourites);
  };
  
  // We will use this function in a later section
  const removeFromFavourites = (tvShow) => {
    setFavourites( favourites.filter(
      (mId) => mId !== tvShow.id
    ) )
  };

  const addToWatchList = (tvShow) => {
    let newWatchList = [...watchList];
    if (!watchList.includes(tvShow.id)) {
      newWatchList.push(tvShow.id);
    }
    setWatchList(newWatchList);
    console.log('addToWatchList')
  }

  const addReview = (tvShow, review) => {
    setMyReviews( {...myReviews, [tvShow.id]: review } )
  };

  return (
    <TVShowsContext.Provider
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
    </TVShowsContext.Provider>
  );
};
export default TVShowsContextProvider;