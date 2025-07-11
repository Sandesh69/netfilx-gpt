import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[Math.floor(Math.random() * 21)];
  const { overview, original_title, id } = mainMovie;
  if (!mainMovie) return;
  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
