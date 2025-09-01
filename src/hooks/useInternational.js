import { useState, useEffect } from "react";

// Default recipes in case API fails or returns empty
const defaultInternationalRecipes = [
  {
    id: 1001,
    name: "Spaghetti Carbonara",
    category: "Italian",
    subCategory: "Dinner",
    ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Pancetta", "Black pepper"],
    instructions: "Cook spaghetti. Mix eggs and cheese. Fry pancetta. Combine all and serve.",
    thumbnail: "https://example.com/spaghetti.jpg",
    videoUrl: "",
    nutrition: { calories: 500, protein: 20, carbs: 60, fats: 20 },
  },
  {
    id: 1002,
    name: "Chicken Tikka Masala",
    category: "Indian",
    subCategory: "Dinner",
    ingredients: ["Chicken", "Yogurt", "Tomato puree", "Garam masala", "Cream"],
    instructions: "Marinate chicken in yogurt and spices. Cook in tomato sauce. Serve with rice.",
    thumbnail: "https://example.com/tikka.jpg",
    videoUrl: "",
    nutrition: { calories: 550, protein: 35, carbs: 40, fats: 25 },
  },
  {
    id: 1003,
    name: "Sushi Roll",
    category: "Japanese",
    subCategory: "Lunch",
    ingredients: ["Sushi rice", "Nori", "Salmon", "Avocado", "Cucumber"],
    instructions: "Place rice on nori, add fillings, roll tightly, slice, and serve.",
    thumbnail: "https://example.com/sushi.jpg",
    videoUrl: "",
    nutrition: { calories: 300, protein: 15, carbs: 50, fats: 5 },
  },
];

export function useInternational() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );
        const data = await res.json();

        if (data.meals) {
          const formatted = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            category: meal.strCategory || "International",
            subCategory: "Dinner",
            ingredients: Array.from({ length: 20 })
              .map((_, i) => meal[`strIngredient${i + 1}`])
              .filter(Boolean),
            instructions: meal.strInstructions || "",
            thumbnail: meal.strMealThumb,
            videoUrl: meal.strYoutube || "",
            nutrition: { calories: 0, protein: 0, carbs: 0, fats: 0 },
          }));
          setRecipes(formatted);
        } else {
          // If API returns no meals, use default
          setRecipes(defaultInternationalRecipes);
        }
      } catch (err) {
        console.error("Error fetching international recipes:", err);
        // Use default recipes on error
        setRecipes(defaultInternationalRecipes);
      }
    };

    fetchRecipes();
  }, []);

  return recipes;
}
