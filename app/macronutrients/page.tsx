import { Caption } from "@/_components/Caption";
import { auth } from "@/_lib/auth";
import { getUserData } from "@/_lib/firebaseActions";
import MacrosGraphic from "../_components/MacrosGraphic";
import { capitalize } from "@/utils/capitalize";

export default async function page() {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User not authenticated");

  const user = await getUserData(session.user.email);

  if (!user) throw new Error("User data not found");

  return (
    <section>
      <h1 className="mb-10 text-center text-2xl font-bold">
        Macronutrients distribution
      </h1>

      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8">
        <MacrosGraphic
          macros={user.macros}
          totalCalories={user.totalCalories}
        />

        <div>
          <h2 className="text-xl font-bold">Caption</h2>

          <div className="grid grid-cols-3">
            {/* Caption */}
            <Caption label="Goal">
              {capitalize(user.goal).replace("-", " ")}
            </Caption>
            <Caption label="Calories">{user.totalCalories} kcal</Caption>
            <Caption label="Fat">{user.macros.fat} g</Caption>
            <Caption label="Protein">{user.macros.protein} g</Caption>
            <Caption label="Carbohydrates">{user.macros.carbs} g</Caption>
          </div>
        </div>
      </div>
    </section>
  );
}
