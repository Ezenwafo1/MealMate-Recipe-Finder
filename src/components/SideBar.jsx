import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

function SideBar() {
  const { filterQuery, setFilterQuery } = useAppContext();
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <aside className="w-64 shrink-0 h-screen sticky top-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
      <Link to="/" className="block text-2xl font-extrabold text-green-600 mb-6">
        🍲 MealMate
      </Link>

      {/* Search (works on any page, but most useful on Home) */}
      <label className="text-sm font-medium block mb-2">Search recipes</label>
      <input
        type="text"
        value={filterQuery}
        onChange={(e) => setFilterQuery(e.target.value)}
        placeholder="e.g. chicken, pasta"
        className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-green-500"
      />

      <nav className="mt-6 space-y-2">
        <Link
          to="/"
          className={`block px-3 py-2 rounded-md ${
            onHome
              ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          Home
        </Link>
      </nav>
    </aside>
  );
}

export default SideBar;
