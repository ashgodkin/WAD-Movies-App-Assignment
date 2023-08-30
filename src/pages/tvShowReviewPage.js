import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTVShowPage";
import TVShowReview from "../components/tvShowReview";

const TVShowReviewPage = (props) => {
  let location = useLocation();
  const {tvshow, review} = location.state;
  
  return (
    <PageTemplate tvshow={tvshow}>
      <TVShowReview review={review} />
    </PageTemplate>
  );
};

export default TVShowReviewPage;