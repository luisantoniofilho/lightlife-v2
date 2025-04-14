import { auth } from "@/_lib/auth";
import { getUserData } from "@/_lib/firebaseActions";
import MacrosGraphic from "../_components/MacrosGraphic";
import { Suspense } from "react";
import Spinner from "@/_components/Spinner";

export default async function page() {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User not authenticated");

  const user = await getUserData(session.user.email);

  return (
    <section>
      <Suspense fallback={<Spinner />}>
        <MacrosGraphic
          macros={user!.macros}
          totalCalories={user!.totalCalories}
        />
      </Suspense>
    </section>
  );
}
