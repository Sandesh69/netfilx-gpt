import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/store/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.PopularMovies);
  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data?.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !PopularMovies && fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
