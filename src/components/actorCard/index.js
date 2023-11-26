import React , {useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from '@mui/icons-material/Cake';
import PlaceIcon from '@mui/icons-material/Place';
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { ActorsContext } from "../../contexts/actorsContext";

export default function ActorCard({ actor, action, fetchUrl }) {
  const { favourites, addToFavourites } = useContext(ActorsContext);
  const { watchList, addToWatchList } = useContext(ActorsContext);
 
   if (favourites?.find((id) => id === actor.id)) {actor.favourite = true;
   }
   else {actor.favourite = false;
  }

     if (watchList?.find((id) => id === actor.id)) {actor.mustWatch = true;
     }
     else {actor.mustWatch = false;
     }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
          title={
            <Typography variant="h5" component="p">
              {actor.name}{" "}
            </Typography>
          }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CakeIcon fontSize="small" />
              {actor.birthday}{""}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <PlaceIcon fontSize="small" />
              {"  "} {actor.place_of_birth}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    <Link to={`/actors/${actor.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        Details ...
      </Button>
    </Link>
    <Button variant="h6" size="medium" color="primary">
        <PlaylistAddIcon fontSize="small"/>
      </Button>
  </CardActions>
    </Card>
  );
}
