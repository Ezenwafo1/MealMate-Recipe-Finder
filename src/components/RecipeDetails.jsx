import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Invalid recipe ID.");
      setLoading(false);
      return;
    }

    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
          setError("");
        } else {
          setError("Recipe not found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch recipe.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient}${measure ? ` - ${measure}` : ""}`);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-green-600 mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb || "/fallback-image.png"}
        alt={recipe.strMeal}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      {ingredients.length > 0 ? (
        <ul className="list-disc list-inside mb-4">
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No ingredients listed.</p>
      )}

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700">{recipe.strInstructions || "No instructions."}</p>
    </div>
  );
}

export default RecipeDetails;
