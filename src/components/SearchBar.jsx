import React from "react";

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/2 p-3 border rounded-l-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 hover:bg-green-600 text-white px-5 rounded-r-lg shadow-md transition duration-200"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
