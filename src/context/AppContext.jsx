import React, { createContext, useContext, useState, useMemo } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Minimal starter data (you can replace with API results later)
  const [recipes, setRecipes] = useState([
    {
      id: "52772",
      title: "Teriyaki Chicken Casserole",
      category: "Chicken",
      thumbnail: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
      description: "Sweet and savory Japanese-style chicken with vegetables.",
    },
    {
      id: "52804",
      title: "Poutine",
      category: "Main Course",
      thumbnail: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
      description: "Canadian classic: fries, gravy, and cheese curds.",
    },
    {
      id: "52795",
      title: "Chicken Alfredo",
      category: "Pasta",
      thumbnail: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
      description: "Creamy pasta with chicken and parmesan.",
    },
  ]);

  // UI state
  const [filterQuery, setFilterQuery] = useState("");

  const value = useMemo(
    () => ({ recipes, setRecipes, filterQuery, setFilterQuery }),
    [recipes, filterQuery]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
