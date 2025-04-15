export async function getMeals(calories: number) {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/mealplanner/generate?targetCalories=${calories}&timeFrame=day&apiKey=${apiKey}`;

  const res = await fetch(url);

  // Check if response is ok
  if (!res.ok) {
    const errorText = await res.text();
    console.error("Error calling Spoonacular:", res.status, res.statusText);
    console.error("Response:", errorText);
    throw new Error(`API ERROR: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}
