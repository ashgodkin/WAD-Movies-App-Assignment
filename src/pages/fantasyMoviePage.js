import React from "react";
import Header from "../components/headerMovieList";
import FantasyMovieForm from "../components/fantasyMovieForm";

const FantasyMoviePage = () => {
  return (
    <>
    <Header title={"Create Your Fantasy Movie"} />
    <FantasyMovieForm />
    </>

  );
};

export default FantasyMoviePage; 