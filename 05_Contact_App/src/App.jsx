import React from "react";
import Navbar from "./components/navbar";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

const App = () => {
  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-3">
      <div className="flex relative flex-grow items-center">
        <FaSearch className="text-white text-3xl absolute ml-1" />
        <input
          type="text"
          className="border bg-transparent border-white rounded h-10 flex-grow text-white pl-9"
        />
        <div>
          <CiCirclePlus className="text-5xl text-white cursor-pointer"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
