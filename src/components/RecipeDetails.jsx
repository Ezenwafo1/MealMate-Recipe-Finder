import React from "react";

function RecipeDetails({ meal }) {
  return (
    <div className="p-4 text-gray-600 text-sm bg-gray-50 border-t border-gray-200">
      <p className="mb-2">{meal.strInstructions}</p>
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
    </div>
  );
}

export default RecipeDetails;
