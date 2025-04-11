import { auth } from "@/_lib/auth";
import { getUserData } from "@/_lib/firebaseActions";
import MacrosGraphic from "./MacrosGraphic";

export default async function page() {
  const session = await auth();

  if (!session?.user?.email) throw new Error("User not authenticated");

  const user = await getUserData(session.user.email);

  return (
    <section>
      <MacrosGraphic
        macros={user!.macros}
        totalCalories={user!.totalCalories}
      />
    </section>
  );
}
