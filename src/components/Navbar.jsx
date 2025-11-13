import React from "react";
import { ShoppingCart, Home, RefreshCw } from "lucide-react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount, refreshPage } = useCart();
  return (
    <header className="w-full bg-gray-50 py-3 sticky top-0 z-50 border-b">
      <nav className="max-w-7xl mx-auto px-4">
        {/* ----- DESKTOP  ----- */}
        <div className="hidden sm:flex items-center justify-between">
          {/* Logo (left) */}
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            Cartify <span className="text-3xl">🛍️</span>
          </h1>

          {/* Search centered (use a fixed width or flex basis) */}
          <div className="w-1/2 max-w-xl">
            <SearchBar />
          </div>

          {/* Icons (right) */}
          <div className="flex gap-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 rounded-lg hover:bg-blue-100 transition-colors ${
                  isActive ? "bg-blue-100" : ""
                }`
              }
            >
              <Home className="text-gray-700" />
            </NavLink>

            {/* <button
              onClick={refreshPage}
              className="p-2 rounded-lg hover:bg-blue-100 transform transition-transform duration-700 hover:rotate-180"
            >
              <RefreshCw className="text-gray-700" />
            </button> */}

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `p-2 rounded-lg hover:bg-blue-100 transition-colors relative ${
                  isActive ? "bg-blue-100" : ""
                }`
              }
            >
              <ShoppingCart className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>

        {/* ------- MOBILE ROW --------*/}
        <div className="flex items-center pl-2 justify-between sm:hidden">
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            Cartify <span className="text-2xl">🛍️</span>
          </h1>

          <div className="flex gap-3 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 rounded-lg hover:bg-blue-100 transition-colors ${
                  isActive ? "bg-blue-100" : ""
                }`
              }
            >
              <Home className="text-gray-700" />
            </NavLink>

            {/* <button
              onClick={refreshPage}
              className="p-2 rounded-lg hover:bg-blue-100 transform transition-transform duration-700 hover:rotate-180"
            >
              <RefreshCw className="text-gray-700" />
            </button> */}

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `p-2 rounded-lg hover:bg-blue-100 transition-colors relative ${
                  isActive ? "bg-blue-100" : ""
                }`
              }
            >
              <ShoppingCart className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>

        {/* -------- MOBILE SearchBar -------- */}
        <div className="sm:hidden mt-3 px-0">
          <SearchBar fullWidth /> {/* we'll support fullWidth prop below */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
