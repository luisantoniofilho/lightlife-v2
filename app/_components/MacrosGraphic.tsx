"use client";

import { calcPercentage } from "@/utils/calcPercentage";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import LinkButton from "./LinkButton";

type MacrosGraphicProps = {
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
  totalCalories: number;
};

export default function MacrosGraphic(props: MacrosGraphicProps) {
  const { carbs, protein, fat } = props.macros;
  const totalCalories = props.totalCalories;

  // Calc calories of each macronutrient
  const carbsKcal = carbs * 4;
  const proteinKcal = protein * 4;
  const fatKcal = fat * 9;

  // Calc percentages
  const carbsPercentage = calcPercentage(carbs, totalCalories);
  const proteinPercentage = calcPercentage(protein, totalCalories);
  const fatPercentage = calcPercentage(fat, totalCalories);

  // Create array data for the graphic
  const data = [
    {
      name: "Carbs",
      value: carbsPercentage,
      grams: carbs,
      kcal: carbsKcal,
    },
    {
      name: "Protein",
      value: proteinPercentage,
      grams: protein,
      kcal: proteinKcal,
    },
    {
      name: "Fat",
      value: fatPercentage,
      grams: fat,
      kcal: fatKcal,
    },
  ];

  const COLORS = ["#5a9bf1", "#a6a09b", "#fab650"];

  return (
    <div className="flex flex-col items-center justify-center bg-stone-100">
      <div className="flex h-[500px] w-[300px] flex-col items-center justify-center rounded-lg bg-stone-100 p-2">
        <p className="text-lg font-semibold text-gray-700">
          Total calories: {totalCalories} kcal
        </p>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={130}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                name,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="central"
                    pointerEvents="none"
                  >
                    {`${name.slice().at(0)}: ${data[index].grams}g`}
                  </text>
                );
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, _, entry) => [
                `${Math.round(value)}% (${entry.payload.kcal} kcal)`,
                entry.payload.name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Caption */}
        <div className="mb-2 flex flex-col justify-center pl-6">
          {data.map((entry, index) => (
            <div key={index} className="mb-2 flex items-center">
              <div
                className="mr-2 h-4 w-4 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="font-medium text-gray-700">{entry.name}</span>
            </div>
          ))}
        </div>
        <LinkButton href="/recipeSuggestions">Recipe suggestions</LinkButton>
      </div>
    </div>
  );
}
