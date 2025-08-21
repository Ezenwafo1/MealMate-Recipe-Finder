import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100"
      />
    </div>
  );
}

export default SearchBar;
