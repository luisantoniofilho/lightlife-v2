type calcMetabolicBasalRateProps = {
  age: number;
  weight: number;
  height: number;
  gender: "male" | "female";
};

export function calcMetabolicBasalRate({
  age,
  weight,
  height,
  gender,
}: calcMetabolicBasalRateProps) {
  const MBR =
    gender === "male"
      ? 66 + 13.8 * weight + 5.0 * height - 6.8 * age // MALE
      : 655 + 9.6 * weight + 1.9 * height - 4.7 * age; // FEMALE

  return MBR;
}
