// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div
        className="mycontainer flex justify-between items-center
    px-4 py-5 h-14"
      >
        <div className="logo font-bold text-white text-2xl">
          <span className="text-red-700"> &lt; </span>
          Pass
          <span className="text-red-700">Man /&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
