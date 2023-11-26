import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getRecommendedTV } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default function RecommendedTV({ tvShow }) {
  const [recommendedTV, setRecommendedTV] = useState([]);

  useEffect(() => {
    getRecommendedTV(tvShow.id).then((recommendedTV) => {
      setRecommendedTV(recommendedTV);
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
          {recommendedTV.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.name}
              </TableCell>
              <TableCell >{excerpt(r.overview)}</TableCell>
              <TableCell >
              <Link
                  to={`/tv/${r.id}`}
                  state={{
                      recommended: r,
                      tvShow: tvShow,
                  }}
                >
                  Full Show Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}