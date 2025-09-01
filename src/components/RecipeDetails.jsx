import React from "react";

function RecipeDetails({ recipe }) {
  return (
    <div className="border rounded-xl shadow-lg p-4 bg-white transition-colors duration-300">
      <img
        src={recipe.thumbnail}
        alt={recipe.name}
        className="w-full h-48 sm:h-56 object-cover rounded-lg mb-3"
      />
      <h2 className="text-xl sm:text-2xl font-semibold mb-1 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
        {recipe.name}
      </h2>
      <p className="text-sm sm:text-base italic text-gray-600 mb-2">{recipe.category} | {recipe.subCategory}</p>
      <p className="text-sm sm:text-base mb-2"><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p className="text-sm sm:text-base mb-2"><strong>Instructions:</strong> {recipe.instructions}</p>
      <p className="text-sm sm:text-base mb-2">
        <strong>Nutrition:</strong> {recipe.nutrition.calories} cal, {recipe.nutrition.protein}g protein, {recipe.nutrition.carbs}g carbs, {recipe.nutrition.fats}g fats
      </p>
      {recipe.videoUrl && (
        <a href={recipe.videoUrl} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold hover:underline">
          Watch Video
        </a>
      )}
    </div>
  );
}

export default RecipeDetails;
