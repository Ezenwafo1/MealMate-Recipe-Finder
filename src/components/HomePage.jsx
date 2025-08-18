import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading && <p className="text-center text-gray-500">Loading recipes...</p>}

      <RecipeList recipes={recipes} />
    </div>
  );
}

export default HomePage;
