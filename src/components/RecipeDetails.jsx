import React from "react";

function RecipeDetails({ meal, onClose }) {
  if (!meal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          ✖
        </button>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{meal.strMeal}</h2>
        <p className="text-gray-700 mt-3">{meal.strInstructions}</p>
        <h4 className="text-lg font-semibold mt-4">Category:</h4>
        <p>{meal.strCategory}</p>
        <h4 className="text-lg font-semibold mt-4">Area:</h4>
        <p>{meal.strArea}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
