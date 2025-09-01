// src/hooks/useInternational.js
import { useState, useEffect } from "react";

export function useInternational(query) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!query) {
      setRecipes([]); // Clear previous results
      return;
    }

    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        if (data.meals) {
          // Map API data to our recipe structure
          const formatted = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            category: meal.strCategory || "International",
            subCategory: "Dinner", // default, can adjust
            ingredients: Array.from({ length: 20 })
              .map((_, i) => meal[`strIngredient${i + 1}`])
              .filter(Boolean),
            instructions: meal.strInstructions || "",
            thumbnail: meal.strMealThumb,
            videoUrl: meal.strYoutube || "",
            nutrition: { calories: 0, protein: 0, carbs: 0, fats: 0 } // API doesn’t provide nutrition
          }));
          setRecipes(formatted);
        } else {
          setRecipes([]);
        }
      } catch (error) {
        console.error("Error fetching international recipes:", error);
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, [query]);

  return recipes;
}
