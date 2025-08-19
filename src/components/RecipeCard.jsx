// src/components/RecipeCard.jsx
import React from "react";
import useRecipeStore from "../store";

function RecipeCard({ recipe }) {
  const { setSelectedRecipe } = useRecipeStore();

  return (
    <div
      onClick={() => setSelectedRecipe(recipe)}
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500">{recipe.strArea}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
