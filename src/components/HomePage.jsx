import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Beef", "Chicken", "Dessert", "Pasta", "Seafood", "Vegetarian"];
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (category = "") => {
    setLoading(true);
    try {
      const url = category
        ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    fetchRecipes(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold text-green-600 mb-6">🍲 MealMate</h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full font-semibold transition-colors duration-300 ${
              selectedCategory === cat
                ? "bg-green-500 text-white"
                : "bg-gray-300 dark:bg-gray-700 dark:text-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory("")}
          className="px-3 py-1 rounded-full bg-blue-500 text-white font-semibold"
        >
          All
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
          {recipes.length === 0 && (
            <p className="text-gray-700 dark:text-gray-300 text-center col-span-full">
              No recipes found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;
