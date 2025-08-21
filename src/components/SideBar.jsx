import React, { useState } from "react";
import { useAppContext } from "../App";

function SideBar() {
  const { favorites, shoppingList } = useAppContext();
  const [open, setOpen] = useState(false);

  return (
    <div className={`fixed top-16 right-0 h-[80vh] w-64 bg-white dark:bg-gray-800 shadow-lg rounded-l-lg p-4 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
      <button
        className="absolute -left-8 top-0 bg-green-500 dark:bg-green-600 text-white px-2 py-1 rounded-l transition-colors duration-300"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Open"}
      </button>

      <h2 className="font-bold text-lg mb-2">Favorites ❤️</h2>
      {favorites.length ? (
        <ul className="mb-4">
          {favorites.map((id) => (
            <li key={id} className="text-sm border-b border-gray-200 dark:border-gray-700 py-1">
              Recipe ID: {id}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">No favorites yet</p>
      )}

      <h2 className="font-bold text-lg mb-2">Shopping List 🛒</h2>
      {shoppingList.length ? (
        <ul>
          {shoppingList.map((item, index) => (
            <li key={index} className="text-sm border-b border-gray-200 dark:border-gray-700 py-1">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">No items yet</p>
      )}
    </div>
  );
}

export default SideBar;
