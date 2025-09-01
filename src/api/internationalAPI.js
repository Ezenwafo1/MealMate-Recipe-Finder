export async function fetchInternationalRecipes(query) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error("Failed to fetch international recipes", err);
    return [];
  }
}
