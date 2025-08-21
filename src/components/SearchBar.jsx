import React from "react";
import { useAppContext } from "../App";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useAppContext();

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default SearchBar;
