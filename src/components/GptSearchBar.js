import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="pt-40 flex justify-center">
      <form className="  bg-[#171717] grid grid-cols-12 w-1/2 rounded-md">
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
          className="px-4 py-2 m-4 border rounded-md col-span-9"
        />
        <button className="px-4 py-3 m-4 bg-red-700 text-white font-bold rounded-xl col-span-3">
          🔍 {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
