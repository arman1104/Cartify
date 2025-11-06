import React from "react";
import { ShoppingCart, Home, RefreshCw } from "lucide-react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount, refreshPage } = useCart();
  return (
    <>
      <header className="w-full bg-gray-100 py-4 sticky top-0 z-50 border-b">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            Cartify <span className="text-3xl">🛍️</span>
          </h1>

          <SearchBar />

          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 rounded-lg hover:bg-blue-200 transition-colors ${
                  isActive ? "bg-blue-200" : ""
                }`
              }
            >
              <button>
                <Home className=" text-gray-700" />
              </button>
            </NavLink>
            <button className="p-2 rounded-lg hover:bg-blue-200 transform transition-transform duration-700 hover:rotate-180">
              <RefreshCw className=" text-gray-700" onClick={refreshPage} />
            </button>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `p-2 rounded-lg hover:bg-blue-200 transition-colors ${
                  isActive ? "bg-blue-200" : ""
                }`
              }
            >
              <button className="relative">
                <ShoppingCart className=" text-gray-700 " />
                <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
                {/* {cartCount > 0 && (
                  <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )} */}
              </button>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
