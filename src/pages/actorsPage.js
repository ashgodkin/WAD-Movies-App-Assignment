import React, {useContext} from "react";
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";

const ActorListPage = () => {
    const context = useContext(ActorsContext);
    const actors = context.actors

    return (
        <PageTemplate
            title='Popular Actors'
            actors={actors}
            />
    );
};

export default ActorListPage;