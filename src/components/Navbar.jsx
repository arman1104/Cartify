import React from "react";
import { ShoppingCart, Home, RefreshCw } from "lucide-react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-gray-200 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            Cartify <span className="text-3xl">🛍️</span>
          </h1>

          <SearchBar />

          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 rounded-xl hover:bg-blue-200 transition-colors ${
                  isActive ? "bg-blue-200" : ""
                }`
              }
            >
              <button>
                <Home className=" text-gray-700" />
              </button>
            </NavLink>
            <button className="p-2 rounded-xl hover:bg-blue-200 transition">
              <RefreshCw className=" text-gray-700" />
            </button>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `p-2 rounded-xl hover:bg-blue-200 transition-colors ${
                  isActive ? "bg-blue-200" : ""
                }`
              }
            >
              <button className="relative">
                <ShoppingCart className=" text-gray-700 " />
                <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                  0
                </span>
              </button>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
