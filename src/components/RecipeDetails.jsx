// src/components/RecipeDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { recipes } from "../data/recipes";
import { westAfricanRecipes } from "../data/westAfricanRecipes";

function RecipeDetails() {
  const { id } = useParams();
  const recipeId = parseInt(id);

  // Try to find the recipe in Nigerian or West African arrays
  const recipe =
    recipes.find((r) => r.id === recipeId) ||
    westAfricanRecipes.find((r) => r.id === recipeId) ||
    null;

  const [showDetails, setShowDetails] = useState(false);

  if (!recipe)
    return <p className="text-center mt-8">Recipe not found</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
      {/* Always visible section */}
      <img
        src={recipe.thumbnail}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">
        {recipe.name}
      </h1>
      <p className="text-gray-600 mt-2">{recipe.subCategory}</p>

      {/* Toggle button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 px-6 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition"
      >
        {showDetails ? "Hide Details" : "More Details"}
      </button>

      {/* Conditionally visible details */}
      {showDetails && (
        <div className="mt-6 space-y-4">
          {/* Instructions */}
          <div>
            <h2 className="text-lg font-semibold">Instructions</h2>
            <p className="text-gray-700 mt-2">{recipe.instructions}</p>
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="text-lg font-semibold">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>

          {/* Nutrition */}
          <div>
            <h2 className="text-lg font-semibold">Nutrition</h2>
            {recipe.nutrition ? (
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {Object.entries(recipe.nutrition).map(
                  ([key, value], idx) => (
                    <li key={idx}>
                      {key}: {value}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p className="text-gray-600">Nutrition info not available</p>
            )}
          </div>

          {/* Video */}
          {recipe.videoUrl && (
            <div>
              <h2 className="text-lg font-semibold">Video</h2>
              <a
                href={recipe.videoUrl}
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

      {/* Back button */}
      <div className="mt-6">
        <Link to="/" className="text-gray-700 hover:underline">
          ← Back to Recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
