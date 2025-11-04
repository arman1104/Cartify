import React from "react";
import { ShoppingCart, Home, RefreshCw } from "lucide-react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-gray-200 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            Cartify <span className="text-3xl">🛍️</span>
          </h1>

          <SearchBar />

          <div className="flex gap-4 cursor-pointer">
            <button className="p-1 rounded-lg hover:bg-blue-200 transition">
              <Home className=" text-gray-700" />
            </button>
            <button className="p-1 rounded-lg hover:bg-blue-200 transition">
              <RefreshCw className=" text-gray-700" />
            </button>
            <button className="p-1 rounded-lg hover:bg-blue-200 transition">
              <ShoppingCart className=" text-gray-700" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
