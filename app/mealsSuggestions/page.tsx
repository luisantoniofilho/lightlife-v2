import { getMeals } from "@/_lib/spoonacular";
import MealItem from "./MealItem";
import { getUserData } from "@/_lib/firebaseActions";
import { auth } from "@/_lib/auth";

type MealData = {
  id: number;
  image: string;
  imageType: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  title: string;
};

async function Page() {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User not authenticated");

  const userData = await getUserData(session?.user?.email);

  console.log(userData);

  const totalCalories = userData!.totalCalories;

  const data = await getMeals(totalCalories);
  const { meals, nutrients } = data;

  return (
    <div>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">Nutrients</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gray-100 p-4">
            <h3 className="font-semibold">Calories</h3>
            <p>{nutrients.calories.toFixed(2)} kcal</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-4">
            <h3 className="font-semibold">Carbohydrates</h3>
            <p>{nutrients.carbohydrates.toFixed(2)} g</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-4">
            <h3 className="font-semibold">Fat</h3>
            <p>{nutrients.fat.toFixed(2)} g</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-4">
            <h3 className="font-semibold">Protein</h3>
            <p>{nutrients.protein.toFixed(2)} g</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="mb-4 text-xl font-bold">Meals</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal: MealData) => (
            <MealItem
              key={meal.id}
              title={meal.title}
              image={meal.image}
              readyInTime={meal.readyInMinutes}
              servings={meal.servings}
              sourceUrl={meal.sourceUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
