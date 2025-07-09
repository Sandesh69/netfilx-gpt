import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-80 px-12 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg  w-5/12 ">{overview}</p>
      <div className="flex">
        <button className="mx-5 px-10 p-3  font-bold  rounded-md bg-white text-black hover:bg-opacity-80 cursor-pointer">
          {" "}
          ▶︎ Play
        </button>
        <button className=" px-10 p-3  font-semibold  rounded-md bg-[#6d6d6eb3] bg-opacity-50 cursor-pointer  hover:bg-[#171717] hover:bg-opacity-60">
          〶 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
