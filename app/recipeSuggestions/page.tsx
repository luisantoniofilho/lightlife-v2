import { Caption } from "@/_components/Caption";
import { auth } from "@/_lib/auth";
import { getUser } from "@/_lib/mongodb/mongodbActions";
import { getMeals } from "@/_lib/spoonacular";
import { redirect } from "next/navigation";
import MealItem from "./Recipe";

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
  // Authentication check
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const userData = await getUser(session?.user?.email);

  const userData = await getUserData(session?.user?.email);

  const totalCalories = userData.nutrition.totalCalories;

  const data = await getMeals(totalCalories);
  const { meals, nutrients } = data;

  return (
    <div>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">
          Recipe suggestions total nutrients
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Caption label="Calories">
            {nutrients.calories.toFixed(2)} kcal
          </Caption>
          <Caption label="Carbohydrates">
            {nutrients.carbohydrates.toFixed(2)} g
          </Caption>
          <Caption label="Fat">{nutrients.fat.toFixed(2)} g</Caption>
          <Caption label="Protein">{nutrients.protein.toFixed(2)} g</Caption>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl">
          Recipe suggestions
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
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
