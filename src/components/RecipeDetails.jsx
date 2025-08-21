import React from "react";
import { useAppContext } from "../App";

function RecipeDetails({ meal }) {
  const { shoppingList, setShoppingList } = useAppContext();

  const addToShoppingList = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) ingredients.push(ingredient);
    }
    setShoppingList([...shoppingList, ...ingredients]);
    localStorage.setItem("shoppingList", JSON.stringify([...shoppingList, ...ingredients]));
  };

  return (
    <div className="p-4 mt-2 text-gray-600 dark:text-gray-300 text-sm bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-lg shadow transition-all duration-500 ease-in-out">
      <p className="mb-2">{meal.strInstructions}</p>
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <button
        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-colors duration-300"
        onClick={addToShoppingList}
      >
        Add Ingredients to Shopping List
      </button>
    </div>
  );
}

export default RecipeDetails;
