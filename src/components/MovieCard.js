import React from "react";
import { DEFAULT_MOVIE_POSTER, IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      {posterPath ? (
        <img alt="movie-img" src={IMG_CDN_URL + posterPath} />
      ) : (
        <img alt="movie-img" src={DEFAULT_MOVIE_POSTER} />
      )}
    </div>
  );
};

export default MovieCard;
