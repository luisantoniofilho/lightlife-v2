"use client";

import Button from "@/_components/Button";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const macronutrients = [
  { name: "Protein", grams: 100, kcalPerGram: 4 },
  { name: "Carbohydrates", grams: 50, kcalPerGram: 4 },
  { name: "Fat", grams: 50, kcalPerGram: 9 },
];

// Calcula as calorias totais
const totalCalories = macronutrients.reduce(
  (sum, macro) => sum + macro.grams * macro.kcalPerGram,
  0,
);

const data = macronutrients.map((macro) => ({
  name: macro.name,
  value: ((macro.grams * macro.kcalPerGram) / totalCalories) * 100, // Percentual das calorias
  grams: macro.grams,
  kcal: macro.grams * macro.kcalPerGram, // Adicionando calorias
}));

const COLORS = ["#4CAF50", "#FF9800", "#F44336"];

export default function MacronutrientPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-stone-100 px-6">
      <h1 className="mb-10 text-2xl font-bold">Macronutrients distribution</h1>

      <div className="flex h-[500px] w-[400px] flex-col items-center justify-center rounded-lg bg-stone-100 p-2 shadow-md">
        <p className="mb-4 text-lg font-semibold text-gray-700">
          Total calories: {totalCalories} kcal
        </p>

        <ResponsiveContainer width="70%" height="100%">
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
                percent,
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
              formatter={(value, name, entry) => [
                `${Math.round(value)}% (${entry.payload.kcal} kcal)`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Legenda ao lado */}
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
        <Button href="/mealsSuggestions">Meals suggestions</Button>
      </div>
    </div>
  );
}
