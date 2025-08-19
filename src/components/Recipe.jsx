import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDetails";

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [search]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-10">Loading recipes...</p>
    );

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((meal) => (
          <div key={meal.idMeal}>
            <RecipeCard meal={meal} toggleExpand={toggleExpand} />
            {expandedId === meal.idMeal && <RecipeDetails meal={meal} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
