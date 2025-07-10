import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/store/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(
      addTrailerVideo(json?.results?.find((data) => data.type === "Trailer"))
    );
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
