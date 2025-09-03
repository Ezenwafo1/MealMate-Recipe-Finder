// src/components/RecipeCard.jsx
import React, { useMemo, useState } from "react";

function RecipeCard({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  // Normalize fields across local + API data
  let image = recipe.thumbnail || recipe.image || recipe.strMealThumb || "";
  const title = recipe.name || recipe.strMeal || recipe.title || "Untitled";
  const subcategory =
    recipe.subCategory ||
    recipe.subcategory ||
    recipe.strCategory ||
    recipe.category ||
    "Uncategorized";
  const instructions = recipe.instructions || recipe.strInstructions || "";
  const videoUrl = recipe.videoUrl || recipe.video || recipe.strYoutube || "";

  // Resolve local images
  if (image.startsWith("local-nigeria/")) {
    image = `/images/nigeria/${image.replace("local-nigeria/", "")}`;
  } else if (image.startsWith("local-west-africa/")) {
    image = `/images/west-africa/${image.replace("local-west-africa/", "")}`;
  }

  // Build ingredients (local array OR API strIngredient1..20 [+ optional strMeasureN])
  const ingredients = useMemo(() => {
    if (Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0) {
      return recipe.ingredients;
    }
    // API style
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const meas = recipe[`strMeasure${i}`];
      if (ing && ing.trim()) {
        list.push(meas && meas.trim() ? `${meas.trim()} ${ing.trim()}` : ing.trim());
      }
    }
    return list;
  }, [recipe]);

  // Normalize nutrition (local object) – optional
  const nutrition = useMemo(() => {
    const n = recipe.nutrition || null;
    if (!n || typeof n !== "object") return null;
    const calories = n.calories ?? n.kcal ?? null;
    const protein = n.protein ?? null;
    const carbs = n.carbs ?? n.carbohydrates ?? null;
    const fats = n.fats ?? n.fat ?? null;
    return { calories, protein, carbs, fats };
  }, [recipe]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl">
      {/* Image */}
      {image ? (
        <img src={image} alt={title} className="w-full h-48 sm:h-56 object-cover" />
      ) : (
        <div className="w-full h-48 sm:h-56 bg-gray-200 flex items-center justify-center text-gray-500">
          No image
        </div>
      )}

      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">{title}</h2>
        {/* Subcategory */}
        <p className="text-gray-600 italic mb-4">{subcategory}</p>

        {/* Toggle button */}
        <button
          type="button"
          onClick={() => setShowDetails((s) => !s)}
          className="w-full bg-green-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
        >
          {showDetails ? "Hide Details" : "More Details"}
        </button>

        {/* Details */}
        {showDetails && (
          <div className="mt-4 space-y-3 text-gray-800">
            {/* Instructions */}
            {instructions && (
              <div>
                <h3 className="font-semibold">Instructions</h3>
                <p className="mt-1 whitespace-pre-line text-gray-700">{instructions}</p>
              </div>
            )}

            {/* Ingredients */}
            {ingredients.length > 0 && (
              <div>
                <h3 className="font-semibold">Ingredients</h3>
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  {ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nutrition */}
            {nutrition ? (
              <div>
                <h3 className="font-semibold">Nutrition</h3>
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  {nutrition.calories != null && <li>Calories: {nutrition.calories}</li>}
                  {nutrition.protein != null && <li>Protein: {nutrition.protein}g</li>}
                  {nutrition.carbs != null && <li>Carbs: {nutrition.carbs}g</li>}
                  {nutrition.fats != null && <li>Fats: {nutrition.fats}g</li>}
                </ul>
              </div>
            ) : null}

            {/* Video */}
            {videoUrl && (
              <div>
                <h3 className="font-semibold">Video</h3>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Watch Recipe Video
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
