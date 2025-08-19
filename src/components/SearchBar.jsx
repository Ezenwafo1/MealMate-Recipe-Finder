// src/components/SearchBar.jsx
import React, { useState } from "react";
import useRecipeStore from "../store";

function SearchBar() {
  const [input, setInput] = useState("");
  const { setSearchTerm } = useRecipeStore();

  const handleSearch = () => {
    if (input.trim()) {
      setSearchTerm(input);
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search recipes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 rounded-l-md px-4 py-2 w-64"
      />
      <button
        onClick={handleSearch}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md shadow-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
