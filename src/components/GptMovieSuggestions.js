import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { getMovieNames, getMovies } = useSelector((store) => store.gpt);
  if (!getMovieNames) return;
  return (
    <div className="p-4 m-4 rounded-lg  bg-black bg-opacity-80">
      {getMovieNames?.map((MovieName, index) => (
        <MovieList
          index={MovieName}
          title={MovieName}
          movies={getMovies[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
