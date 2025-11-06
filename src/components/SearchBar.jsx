import React from "react";
import { Search } from "lucide-react";
import { useCart } from "../context/CartContext";

const SearchBar = () => {
  const { search, setSearch } = useCart();
  return (
    <div className="flex items-center justify-center flex-1">
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-96 pl-10 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400"
        />

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
          size={20}
        />
      </div>
    </div>
  );
};

export default SearchBar;
