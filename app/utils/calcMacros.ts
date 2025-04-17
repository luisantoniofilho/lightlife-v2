type calcMacrosProps = {
  MBR: number;
  weight: number;
  goal: "gain-muscle" | "lose-fat" | "maintain";
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very-active";
};

export function calcMacros({
  MBR,
  weight,
  goal,
  activityLevel,
}: calcMacrosProps) {
  /*    Guide
      1g of carb = 4kcal
      1g of protein = 4kcal
      1g of fat = 9kcal
    */

  let physicalActivityLevel: number;

  // Activity factor
  if (activityLevel === "sedentary") {
    physicalActivityLevel = 1.6;
  } else if (activityLevel === "light") {
    physicalActivityLevel = 1.7;
  } else if (activityLevel === "moderate") {
    physicalActivityLevel = 1.8;
  } else {
    physicalActivityLevel = 1.9;
  }

  const TEE = MBR * physicalActivityLevel;

  let kcals, protein;

  // Fat = 1g per kg in all goals
  const fat = weight;

  // Gain muscle
  if (goal === "gain-muscle") {
    //400kcal superavit
    kcals = TEE + 400;

    // 2g per kg
    protein = Math.round(weight * 2);
  }
  // Lose fat
  else if (goal === "lose-fat") {
    // Deficit based on the current weight
    kcals = TEE - (weight < 100 ? 1000 : 1500);

    // 2.2g per kg
    protein = Math.round(weight * 2.2);
  }
  // Mantain weight
  else {
    kcals = TEE;

    // 2g per kg
    protein = Math.round(weight * 2);
  }

  const totalKcalFatAndProtein = fat * 9 + protein * 4;

  // remain calories
  const carbs = Math.round((kcals - totalKcalFatAndProtein) / 4);

  return { carbs, protein, fat };
}
