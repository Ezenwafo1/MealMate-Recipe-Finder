import React from "react";

function RecipeDetails({ recipe }) {
  // Assign colors based on subCategory
  const badgeColors = {
    Snack: "bg-yellow-200 text-yellow-800",
    Lunch: "bg-orange-200 text-orange-800",
    Dinner: "bg-red-200 text-red-800",
    Smoothie: "bg-green-200 text-green-800",
    Default: "bg-gray-200 text-gray-800"
  };

  const badgeClass = badgeColors[recipe.subCategory] || badgeColors.Default;

  return (
    <div className="border rounded-xl shadow-lg p-4 bg-white transition-colors duration-300 hover:shadow-xl">
      <img
        src={recipe.thumbnail}
        alt={recipe.name}
        className="w-full h-48 sm:h-56 object-cover rounded-lg mb-3"
      />

      <h2 className="text-xl sm:text-2xl font-semibold mb-1 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
        {recipe.name}
      </h2>

      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
          {recipe.subCategory}
        </span>
        <span className="text-sm italic text-gray-600">{recipe.category}</span>
      </div>

      <p className="text-sm sm:text-base mb-2">
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </p>

      <p className="text-sm sm:text-base mb-2">
        <strong>Instructions:</strong> {recipe.instructions}
      </p>

      <p className="text-sm sm:text-base mb-2">
        <strong>Nutrition:</strong> {recipe.nutrition.calories} cal, {recipe.nutrition.protein}g protein, {recipe.nutrition.carbs}g carbs, {recipe.nutrition.fats}g fats
      </p>

      {recipe.videoUrl && (
        <a
          href={recipe.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 font-semibold hover:underline"
        >
          Watch Video
        </a>
      )}
    </div>
  );
}

export default RecipeDetails;
