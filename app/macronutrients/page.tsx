import { auth } from "@/_lib/auth";
import { getUserData } from "@/_lib/firebaseActions";
import MacrosGraphic from "../_components/MacrosGraphic";
import { Suspense } from "react";
import Spinner from "@/_components/Spinner";

export default async function page() {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User not authenticated");

  const user = await getUserData(session.user.email);

  if (!user) throw new Error("User data not found");

  return (
    <section>
      <Suspense fallback={<Spinner />}>
        <MacrosGraphic
          macros={user.macros}
          totalCalories={user.totalCalories}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold">Caption</h2>
        <div className="grid grid-cols-2 gap-2">
          {/* Caption */}
          <Caption label="Calories">{user.totalCalories} g</Caption>
          <Caption label="Carbohydrates">{user.macros.carbs} g</Caption>
          <Caption label="Protein">{user.macros.protein} g</Caption>
          <Caption label="Fat">{user.macros.fat} g</Caption>
        </div>
      </div>
    </section>
  );
}
