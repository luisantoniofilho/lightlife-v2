import Link from "next/link";

export default function MissingNutritionAlert() {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-lg bg-white p-6 text-center shadow-md sm:grid-cols-1 md:px-16">
      <h2 className="text-xl font-semibold text-green-800">
        You haven&apos;t calculated your macronutrients yet.
      </h2>
      <p className="text-base text-stone-600">
        Calculate them to unlock personalized nutrition features.
      </p>
      <div className="flex justify-center">
        <Link
          href="/form"
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700"
        >
          Go to form
        </Link>
      </div>
    </div>
  );
}
