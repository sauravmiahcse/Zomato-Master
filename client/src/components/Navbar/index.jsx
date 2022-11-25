import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// components
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";

// redux
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/reducers/auth/auth.action";

function MobileNav({ SignIn, SignUp }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // const [user, setUser] = useState({});
  const reduxState = useSelector((globalState) => globalState.user.user.user);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {reduxState?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-20 h-20 rounded-full"
            >
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={() => dispatch(signOut())}>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function LargeNav({ SignIn, SignUp }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // const [user, setUser] = useState({});
  const reduxState = useSelector((globalState) => globalState.user.user.user);
  const dispatch = useDispatch();

  return (
    <>
      <div className="hidden lg:inline container px-20 mx-auto">
        <div className="gap-4 w-full items-center justify-around flex">
          <div className="w-20">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
            />
          </div>
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Delhi NCR"
                className="w-full focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          {reduxState?.fullName ? (
            <div className="relative w-20">
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border border-gray-300 text-zomato-400 w-full h-20 rounded-full"
              >
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                  <button onClick={() => dispatch(signOut())}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className=" flex gap-4">
              <button
                className="text-gray-500 text-xl hover:text-gray-800"
                onClick={SignIn}
              >
                Login
              </button>
              <button
                className="text-gray-500 text-xl hover:text-gray-800"
                onClick={SignUp}
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openSignInModal = () => setOpenSignIn(true);
  const openSignUpModal = () => setOpenSignUp(true);

  return (
    <>
      <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />

      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav SignIn={openSignInModal} SignUp={openSignUpModal} />
        <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />
      </nav>
    </>
  );
}

export default Navbar;
