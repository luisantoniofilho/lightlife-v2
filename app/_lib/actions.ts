"use server";

import { calcMacros } from "@/utils/calcMacros";
import { calcMetabolicBasalRate } from "@/utils/calcMetabolicBasalRate";
import { calcTotalCalories } from "@/utils/calcTotalCalories";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { saveUserData } from "./firebaseActions";

export async function signInAction() {
  await signIn("google", { redirectTo: "/form" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function calcMacrosAction(formData: FormData) {
  // Taking the form data
  const age = Number(formData.get("age"));
  const weight = Number(formData.get("weight"));
  const height = Number(formData.get("height"));
  const gender = formData.get("gender") as "male" | "female";
  const activityLevel = formData.get("activityLevel") as
    | "sedentary"
    | "light"
    | "moderate"
    | "active";
  const goal = formData.get("goal") as "gain-muscle" | "lose-fat" | "maintain";

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
    macros: { carbs, protein, fat },
    totalCalories,
  });

  redirect("/macronutrients");
}
