import React, { useEffect, createContext, useReducer } from "react";
import {getActors} from "../api/tmdb-api";

export const ActorsContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {

    case "load":
      return { 
        actors: action.payload.actors };
    default:
      return state;
  }
};

const ActorsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {actors: []});

  useEffect(() => {
    getActors().then((actors) => {
      dispatch({ type: "load", payload: { actors } });
    });
  }, []);

  return (
    <ActorsContext.Provider
      value={{
        actors: state.actors,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;