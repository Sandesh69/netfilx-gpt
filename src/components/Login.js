import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateEmail } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleSubmit = (e) => {
    const message = validateEmail(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User signed up:", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://scontent.fblr2-2.fna.fbcdn.net/v/t39.30808-6/248156962_4636673493082161_8279250848252699379_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TSQsSQZPg8wQ7kNvwGb4YiO&_nc_oc=AdmeQmnhp2KQgjjGt4kVoGxgbML3v4etR_FGFohwsZa0xnET4b65p5A6jYNEl3uFURAKGloDq5I7Vk_kARRkgRmV&_nc_zt=23&_nc_ht=scontent.fblr2-2.fna&_nc_gid=RAp3l4hCVhcHiLR-GoImuA&oh=00_AfQxAveqgFNjY1Wi-9T0-xJekX42V0JYdFVhQS-EOUFOvw&oe=6871D57E",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-4/12 absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-md"
      >
        <h1 className="font-bold text-3xl pb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn ? (
          <></>
        ) : (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full rounded-md  border border-gray-600 bg-[#171717]"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full rounded-md  border border-gray-600 bg-[#171717]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded-md border border-gray-600 bg-[#171717]"
        />
        <p className="text-red-500 font-bold text-lg py-2 ">{errMessage}</p>
        <button
          className="py-2 w-full my-4 bg-red-700 rounded-md font-semibold"
          type="button"
          onClick={handleSubmit}
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
