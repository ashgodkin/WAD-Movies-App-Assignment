import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorPage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("actors", getActor);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const actors = data ? data.results : [];

    return (
        <PageTemplate
            title="Movie Actors"
            actors={actors}
        />
    );
};

export default ActorDetailsPage;
