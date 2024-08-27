"use client";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import auth from "@/firebase.config";

const LogInPage = () => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user);

  function handleGoogleSignIn() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("ok");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex justify-center mx-4">
      <div
        onClick={() => handleGoogleSignIn()}
        className="border-2 hover:border-blue-600 duration-200 p-4 rounded-md w-full sm:w-[500px] lg:w-[800px] flex items-center cursor-pointer bg-slate-50"
      >
        <div className="flex-1 text-2xl font-semibold text-slate-600">
          SIgn In With Google
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-0.5 bg-slate-300 h-10"></div>
          <FcGoogle className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
