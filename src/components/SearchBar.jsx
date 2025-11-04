import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <input
        type="text"
        placeholder="Search products..."
        className="w-96 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
