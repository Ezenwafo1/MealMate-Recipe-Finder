import React from "react";
import RecipeDetails from "./RecipeDetails.jsx";
import { recipes as localNigerianRecipes } from "../data/nigerianRecipes.js";
import { westAfricanRecipes } from "../data/westAfricanRecipes.js";
import { useInternational } from "../hooks/useInternational.js";

function RecipeList({ showNigerian, showWestAfrican, showInternational }) {
  const international = useInternational(); // Always call hooks

  const nigerian = showNigerian ? localNigerianRecipes : [];
  const westAfrican = showWestAfrican ? westAfricanRecipes : [];
  const intl = showInternational ? international : [];

  const allRecipes = [...nigerian, ...westAfrican, ...intl];

  if (allRecipes.length === 0)
    return <p className="text-center mt-4">No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allRecipes.map((recipe) => (
        <RecipeDetails key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
