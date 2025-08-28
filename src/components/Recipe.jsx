import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard.jsx";

const Recipe = ({ category }) => {
  const [recipes, setRecipes] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const url = category
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
        const res = await fetch(url);
        const data = await res.json();
        const meals = data.meals || [];

        const detailedMeals = await Promise.all(
          meals.map(async (meal) => {
            const detailRes = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
            const detailData = await detailRes.json();
            return detailData.meals[0];
          })
        );

        setRecipes(detailedMeals);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [category]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipes.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          meal={meal}
          isExpanded={expandedId === meal.idMeal}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default Recipe;
