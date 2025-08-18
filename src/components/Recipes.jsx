import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDetails";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("rice");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = (query) => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRecipes(searchTerm);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Discover Recipes</h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={() => fetchRecipes(searchTerm)}
      />

      {loading ? (
        <p className="text-center">Loading recipes...</p>
      ) : recipes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} onSelect={setSelectedMeal} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-6">No recipes found.</p>
      )}

      {/* Recipe Details Modal */}
      {selectedMeal && (
        <RecipeDetails meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}

export default Recipes;
