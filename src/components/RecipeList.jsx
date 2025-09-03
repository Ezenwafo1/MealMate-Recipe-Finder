// src/components/RecipeList.jsx
import React from "react";
import RecipeCard from "./RecipeCard.jsx";
import { recipes as localNigerianRecipes } from "../data/nigerianRecipes.js";
import { westAfricanRecipes } from "../data/westAfricanRecipes.js";
import { useInternational } from "../hooks/useInternational.js";

function RecipeList({ showNigerian, showWestAfrican, showInternational }) {
  const international = useInternational(); // Always call hooks at top level

  // Select recipes based on toggles
  const nigerian = showNigerian ? localNigerianRecipes : [];
  const westAfrican = showWestAfrican ? westAfricanRecipes : [];
  const intl = showInternational ? international : [];

  const allRecipes = [...nigerian, ...westAfrican, ...intl];

  if (allRecipes.length === 0)
    return <p className="text-center mt-4">No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allRecipes.map((recipe, idx) => (
        <RecipeCard
          key={
            recipe.id || recipe.idMeal || `${recipe.name || recipe.strMeal}-${idx}`
          }
          recipe={recipe}
        />
      ))}
    </div>
  );
}

export default RecipeList;
