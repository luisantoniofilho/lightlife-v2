export async function getMeals(calories: number) {
  const meals = await fetch(
    `https://api.spoonacular.com/mealplanner/generate?targetCalories=${calories}&timeFrame=day&apiKey=${process.env.SPOONACULAR_API_KEY}`,
  );

  return await meals.json();
}
