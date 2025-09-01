import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails.jsx";
import { useLocalNigerian } from "../hooks/useLocalNigerian.js";
import { westAfricanRecipes } from "../data/westAfricanRecipes.js";
import { useInternational } from "../hooks/useInternational.js";

function RecipeList({ query, showNigerian, showWestAfrican, showInternational }) {
  const [subCategoryFilter, setSubCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const localNigerian = showNigerian ? useLocalNigerian() : [];
  const westAfrican = showWestAfrican ? westAfricanRecipes : [];
  const international = showInternational ? useInternational(query) : [];

  let recipes = [...localNigerian, ...westAfrican, ...international];

  if (subCategoryFilter !== "All") {
    recipes = recipes.filter((r) => r.subCategory === subCategoryFilter);
  }

  if (searchTerm.trim() !== "") {
    recipes = recipes.filter((r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (recipes.length === 0) return <p className="text-center mt-4">No recipes found.</p>;

  const allSubCategories = ["All", ...new Set(recipes.map((r) => r.subCategory))];

  return (
    <div>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <label className="mr-2 font-semibold">Filter by Type:</label>
          <select
            value={subCategoryFilter}
            onChange={(e) => setSubCategoryFilter(e.target.value)}
            className="border rounded-lg p-1"
          >
            {allSubCategories.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-semibold">Search by Name:</label>
          <input
            type="text"
            placeholder="Enter recipe name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-1 w-full sm:w-64 focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((r) => (
          <RecipeDetails key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
