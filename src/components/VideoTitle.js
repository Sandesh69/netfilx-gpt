import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-12 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold ml-5 mb-2 md:ml-2 md:mb-1">
        {title}
      </h1>
      <p className=" hidden md:inline-block py-6 text-lg  w-5/12 ">
        {overview}
      </p>
      <div className="flex md:mb-0 my-2">
        <button className="mx-5 px-6 py-2 md:px-10 md:py-3 font-bold  rounded-md bg-white text-black hover:bg-opacity-80 cursor-pointer">
          {" "}
          ▶︎ Play
        </button>
        <button className=" hidden md:inline-block  px-10 py-3  font-semibold  rounded-md bg-[#6d6d6eb3] bg-opacity-50 cursor-pointer  hover:bg-[#171717] hover:bg-opacity-60">
          〶 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
