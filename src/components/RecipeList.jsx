import React, { useState } from "react";

const RecipeList = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = [...new Set(recipes.map(r => r.category))];

  // Filter recipes based on search term and category
  const filteredRecipes = recipes.filter(recipe => {
    const matchesName = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? recipe.category === categoryFilter : true;
    return matchesName && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-2">
        <input
          type="text"
          placeholder="Search recipe by name or ingredient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-2 border rounded dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100"
        >
          <option value="">All Categories</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className="bg-white dark:bg-gray-900 rounded shadow p-4">
              <img
                src={recipe.thumbnail}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-bold mb-1">{recipe.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{recipe.category} | {recipe.subCategory}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Calories: {recipe.nutrition.calories} kcal | Protein: {recipe.nutrition.protein}g | Carbs: {recipe.nutrition.carbs}g | Fats: {recipe.nutrition.fats}g
              </p>
              {recipe.videoUrl && (
                <a href={recipe.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-2 inline-block">
                  Watch Step-by-Step Video
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-700 dark:text-gray-300">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
