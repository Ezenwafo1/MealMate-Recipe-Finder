import React, { useState } from "react";
import Recipe from "./Recipe";
import { useAppContext } from "../App";

function HomePage() {
  const { darkMode, toggleDarkMode } = useAppContext();
  const categories = ["Beef", "Chicken", "Dessert", "Pasta", "Seafood", "Vegetarian"];
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="flex flex-col items-center py-10 px-4 w-full max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-green-600 mb-2">🍲 MealMate</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Discover recipes, add favorites, build your shopping list, and browse categories.
        </p>
        <button
          onClick={toggleDarkMode}
          className="mt-4 px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
              selectedCategory === cat
                ? "bg-green-500 text-white"
                : "bg-gray-300 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory("")}
          className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold transition-colors duration-300"
        >
          All
        </button>
      </div>

      {/* Recipe list */}
      <div className="w-full">
        <Recipe category={selectedCategory} />
      </div>
    </div>
  );
}

export default HomePage;
