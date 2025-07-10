import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateEmail } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/store/userSlice";
import { useDispatch } from "react-redux";
import { BG_LOGO, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
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
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!

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
        <img src={BG_LOGO} alt="bg-img" />
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
