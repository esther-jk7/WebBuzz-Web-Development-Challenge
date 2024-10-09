import React from "react";
import LoginButton from "../../../components/Login/LoginButton";
import LogoutButton from "../../../components/Login/LogoutButton";
import Profile from "../../../components/Login/Profile";
import DarkMode from "../../../pages/Darkmode/DarkMode";

export default function Navbar() {
  return (
    <nav
      className={`w-full flex items-center justify-between py-5 relative top-0 z-20 overflow-x-hidden`}
    >
      {/* Container with max width and padding */}
      <div className="w-full flex items-center justify-between max-w-2xl mx-auto px-4">
        {/* Logo/Brand Name: Adjusted size and margin */}
        <a href="./homepage" className="flex items-center">
          <h3 className="text-[#2c2c2c] dark:text-white font-bold uppercase text-lg sm:text-xl">
            Hustler's Sports Academy
          </h3>
        </a>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-black dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul className="list-none flex-row sm:gap-10 gap-5 mr-4 md:flex hidden">
          <li className="flex items-center gap-9 font-bold font-lora text-md dark:text-slate-200">
            <a href="tournament">Tournament</a>
          </li>
          <li className="flex items-center gap-9 font-bold font-lora text-md dark:text-slate-200">
            <a href="events">Events</a>
          </li>
          <li className="flex items-center gap-9 font-bold font-lora text-md dark:text-slate-200">
            <a href="community">Community</a>
          </li>
        </ul>

        {/* DarkMode and User Buttons */}
        <span className="flex justify-center items-center gap-4">
          <DarkMode />
          <LoginButton />
          <LogoutButton />
          <Profile />
        </span>
      </div>
    </nav>
  );
}
