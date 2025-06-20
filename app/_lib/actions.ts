"use server";

import { calcMacros } from "@/utils/calcMacros";
import { calcMetabolicBasalRate } from "@/utils/calcMetabolicBasalRate";
import { calcTotalCalories } from "@/utils/calcTotalCalories";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { saveUserData } from "./mongodb/mongodbActions";
import { macroFormSchema } from "@/schemas/macroFormSchema";
import { z } from "zod/v4";

/* //////////////////
// AUTH ACTIONS
*/ //////////////////

export async function signInAction() {
  await signIn("google", { redirectTo: "/form" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

/* //////////////////
// MACROS ACTIONS
*/ //////////////////

export async function calcMacrosAction(formData: FormData) {
  // Checking if the user is authenticated
  const session = await auth();
  const user = session?.user;
  if (!user?.email) throw new Error("User not authenticated");

  // Transform FormData in object
  const rawData = Object.fromEntries(formData.entries());

  const parsed = macroFormSchema.safeParse(rawData);
  if (!parsed.success) {
    console.error(z.treeifyError(parsed.error));
    return { error: z.prettifyError(parsed.error) };
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

  // Updating user's macros and calories (was null)
  await saveUserData({
    goal,
    macros: { carbs, protein, fat },
    totalCalories,
  });

  redirect("/macronutrients");
}
