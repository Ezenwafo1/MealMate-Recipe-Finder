import React, { useState, useEffect } from "react";

function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals);
        }
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {recipes.length > 0 ? (
        recipes.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold p-2">{meal.strMeal}</h3>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">Loading recipes...</p>
      )}
    </div>
  );
}

export default Recipe;
