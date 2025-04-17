"use server";

import { calcMacros } from "@/utils/calcMacros";
import { calcMetabolicBasalRate } from "@/utils/calcMetabolicBasalRate";
import { calcTotalCalories } from "@/utils/calcTotalCalories";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { saveUserData } from "./firebaseActions";
import { macroFormSchema } from "@/schemas/macroFormSchema";

export async function signInAction() {
  await signIn("google", { redirectTo: "/form" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function calcMacrosAction(formData: FormData) {
  // Transform FormData in object
  const rawData = Object.fromEntries(formData.entries());

  const parsed = macroFormSchema.safeParse(rawData);

  if (!parsed.success) {
    console.error(parsed.error.flatten());
    return { error: parsed.error.flatten() };
  }

  // Taking the form data
  const { age, weight, height, gender, activityLevel, goal } = parsed.data;

  // Calculating metabolic basal rate
  const MBR = calcMetabolicBasalRate({ age, weight, height, gender });

  // Calculating macros
  const { carbs, protein, fat } = calcMacros({
    MBR,
    weight,
    goal,
    activityLevel,
  });

  // Calculating total calories
  const totalCalories = calcTotalCalories({ carbs, protein, fat });

  // Checking if the user is authenticated
  const session = await auth();
  const user = session?.user;
  if (!user?.email) throw new Error("User not authenticated");

  // Updating user's macros and calories (was null)
  await saveUserData(user.email, {
    goal,
    macros: { carbs, protein, fat },
    totalCalories,
  });

  redirect("/macronutrients");
}
