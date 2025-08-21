import React from "react";
import { useAppContext } from "../App";

function RecipeCard({ meal, isExpanded, toggleExpand }) {
  const { favorites, setFavorites } = useAppContext();

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer mx-auto"
      onClick={() => toggleExpand(meal.idMeal)}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">{meal.strMeal}</h2>
        <button
          className={`ml-2 p-1 rounded-full transition-colors duration-300 ${
            favorites.includes(meal.idMeal) ? "bg-red-500 hover:bg-red-600" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(meal.idMeal);
          }}
        >
          ❤️
        </button>
      </div>

      {isExpanded && (
        <div className="p-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <h3 className="font-semibold mb-2">Category: {meal.strCategory}</h3>
          <h4 className="font-semibold mb-2">Area: {meal.strArea}</h4>
          <p className="mb-2">Instructions: {meal.strInstructions}</p>
          <p className="font-semibold mb-1">Ingredients:</p>
          <ul className="list-disc pl-5">
            {Array.from({ length: 20 }, (_, i) => i + 1)
              .map((n) => ({
                ingredient: meal[`strIngredient${n}`],
                measure: meal[`strMeasure${n}`],
              }))
              .filter((ing) => ing.ingredient && ing.ingredient.trim())
              .map((ing, idx) => (
                <li key={idx}>{`${ing.ingredient} - ${ing.measure}`}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
