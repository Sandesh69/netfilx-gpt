import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import openAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/store/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const searchValue = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    //make an API call and get movie results

    const gptQuery = `Act as a Movie recommendations system and sugest some movies for the Query: ${searchValue.current.value}. Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don , Deewar,Golmaal.`;
    const gptResults = await openAI.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: gptQuery }],
    });
    const gptMovies = gptResults.choices[0].message.content.split(",");

    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className=" pt-[50%] md:pt-40 flex justify-center">
      <form
        className="  bg-[#171717] grid grid-cols-12 w-full md:w-1/2 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchValue}
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
          className="px-4 py-2 m-4 border rounded-md col-span-9"
        />
        <button
          className="px-4 py-3 m-4 bg-red-700 text-white font-bold rounded-xl col-span-3"
          onClick={handleGptSearchClick}
        >
          🔍 {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
