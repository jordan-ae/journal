/* eslint-disable @next/next/no-img-element */
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen w-[230px] flex justify-between flex-col p-10">
      <div>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4"
        />
        <h1 className="text-xl mb-2">Hola, Max</h1>
        <p className="text-sm mb-6">
          Good morning
          <span role="img" aria-label="sun">
            🌟
          </span>
        </p>
      </div>

      <nav className="flex flex-col gap-4 mt-24 text-lg">
        <a href="#" className="hover:underline">
          Fitness
        </a>
        <a href="#" className="hover:underline">
         Music
        </a>
        <a href="#" className="hover:underline">
          Work
        </a>
        <a href="#" className="hover:underline">
          Date night
        </a>
        <a href="#" className="hover:underline">
          Books
        </a>
        <a href="#" className="hover:underline">
          Podcasts
        </a>
        <a href="#" className="hover:underline">
          Wishlist
        </a>
      </nav>
      <div className="mt-auto">
        <button className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
