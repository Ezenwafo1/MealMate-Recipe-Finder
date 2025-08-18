import React from "react";

function RecipeCard({ meal, onSelect }) {
  return (
    <div
      onClick={() => onSelect(meal)}
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{meal.strMeal}</h3>
      <p className="mt-2 text-gray-600">
        {meal.strInstructions.substring(0, 100)}...
      </p>
    </div>
  );
}

export default RecipeCard;
