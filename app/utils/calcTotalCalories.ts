type calcTotalCaloriesProps = {
  carbs: number;
  protein: number;
  fat: number;
};

export function calcTotalCalories({
  carbs,
  protein,
  fat,
}: calcTotalCaloriesProps) {
  const carbsCalories = carbs * 4;
  const proteinCalories = protein * 4;
  const fatCalories = fat * 9;

  const totalCalories = carbsCalories + proteinCalories + fatCalories;

  return totalCalories;
}
