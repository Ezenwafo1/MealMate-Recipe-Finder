import React from "react";

function RecipeCard({ meal, toggleExpand }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
      onClick={() => toggleExpand(meal.idMeal)}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{meal.strMeal}</h2>
      </div>
    </div>
  );
}

export default RecipeCard;
