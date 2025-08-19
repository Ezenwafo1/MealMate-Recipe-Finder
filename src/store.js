// src/store.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  searchTerm: "",
  recipes: [],
  selectedRecipe: null,

  // actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  setRecipes: (recipes) => set({ recipes }),
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),

  // async fetch
  fetchRecipes: async (term) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await res.json();
      set({ recipes: data.meals || [] });
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  },
}));

export default useRecipeStore;
