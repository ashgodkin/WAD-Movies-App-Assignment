import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default function SimilarMovies({ movie }) {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(movie.id).then((similarMovies) => {
      setSimilarMovies(similarMovies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell align="center">Overview</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {similarMovies.map((s) => (
            <TableRow key={s.id}>
              <TableCell component="th" scope="row">
                {s.title}
              </TableCell>
              <TableCell >{excerpt(s.overview)}</TableCell>
              <TableCell >
              <Link
                  to={`/movies/${s.id}`}
                  state={{
                      similar: s,
                      movie: movie,
                  }}
                >
                  Full Movie Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}