import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className=" w-4/12 absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-md">
        <h1 className="font-bold text-3xl pb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn ? (
          <></>
        ) : (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full rounded-md  border border-gray-600 bg-[#171717]"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full rounded-md  border border-gray-600 bg-[#171717]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded-md border border-gray-600 bg-[#171717]"
        />
        <button
          className="py-2 w-full my-4 bg-red-700 rounded-md font-semibold"
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignIn ? "New to Netflix?" : "Already Registered?"}

          <button
            type="button"
            className="ml-1 py-4 font-bold cursor-pointer"
            onClick={handleSignIn}
          >
            {isSignIn ? "Sign Up Now." : "Sign In Now."}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
