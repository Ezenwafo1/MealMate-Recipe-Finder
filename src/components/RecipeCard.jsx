import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipe/${recipe.idMeal}`}
      className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={recipe.strMealThumb || "/fallback-image.png"}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{recipe.strMeal}</h2>
      </div>
    </Link>
  );
}

export default RecipeCard;
