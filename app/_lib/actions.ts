"use server";

import { calcMacros } from "@/utils/calcMacros";
import { calcMetabolicBasalRate } from "@/utils/calcMetabolicBasalRate";
import { calcTotalCalories } from "@/utils/calcTotalCalories";
import { redirect } from "next/navigation";

export async function handleSubmit(formData: FormData) {
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

  const MBR = calcMetabolicBasalRate({ age, weight, height, gender });

  const { carbs, protein, fat } = calcMacros({
    MBR,
    weight,
    goal,
    activityLevel,
  });

  const totalCalories = calcTotalCalories({ carbs, protein, fat });

  redirect(
    `/macronutrients?totalCalories=${totalCalories}&carbs=${carbs}&protein=${protein}&fat=${fat}`,
  );
}
