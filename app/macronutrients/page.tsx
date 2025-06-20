import { Caption } from "@/_components/Caption";
import LinkButton from "@/_components/LinkButton";
import MacrosGraphic from "@/_components/MacrosGraphic";
import MissingNutritionAlert from "@/_components/MissingNutritionAlert";
import { auth } from "@/_lib/auth";
import { getUser } from "@/_lib/mongodb/mongodbActions";
import { capitalize } from "@/utils/capitalize";
import { redirect } from "next/navigation";

export default async function page() {
  // Authentication check
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  // Fetch user data
  const user = await getUser(session.user.email);
  if (!user) throw new Error("User data not found");

  if (!user?.nutrition) return <MissingNutritionAlert />;

  return (
    <section className="flex flex-col items-center">
      {/* Page title */}
      <h1 className="mb-10 text-center text-2xl font-bold">
        Macronutrients distribution
      </h1>

      {/* Main grid container */}
      <div className="grid w-full max-w-4xl grid-cols-1 items-center justify-items-center md:grid-cols-2 md:grid-rows-[auto_auto] md:gap-10 lg:gap-12">
        {/* Graphic - takes first column on desktop */}
        <div className="md:col-span-1">
          <MacrosGraphic
            macros={user.nutrition.macros}
            totalCalories={user.nutrition.totalCalories}
          />
        </div>

        {/* Button - full width row below on desktop, between graphic and caption on mobile */}
        <div className="mb-8 flex justify-center md:col-span-2 md:row-start-2 md:mb-0">
          <LinkButton href="/recipeSuggestions">Recipe suggestions</LinkButton>
        </div>

        {/* Caption - takes second column on desktop */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold">Caption</h2>
          <div className="grid grid-cols-2 gap-4">
            <Caption label="Goal">
              {capitalize(user.nutrition.goal).replace("-", " ")}
            </Caption>
            <Caption label="Protein">{user.nutrition.macros.protein} g</Caption>
            <Caption label="Fat">{user.nutrition.macros.fat} g</Caption>
            <Caption label="Carbohydrates">
              {user.nutrition.macros.carbs} g
            </Caption>
          </div>
        </div>
      </div>
    </section>
  );
}
