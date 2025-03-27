import { ClockIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export type MealProps = {
  title: string;
  image: string;
  readyInTime: number;
  servings: number;
  sourceUrl: string;
};

export function MealItem({
  title,
  image,
  readyInTime,
  servings,
  sourceUrl,
}: MealProps) {
  return (
    <div className="max-w-sm rounded-lg bg-white shadow-md transition hover:shadow-lg">
      {/* Image */}
      <Image
        src={`https://spoonacular.com/recipeImages/${image}`}
        alt={title}
        width={500} // layout="responsive"
        height={300}
        className="rounded-t-lg object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>

        {/* Info section */}
        <div className="mb-4 flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <ClockIcon className="h-5 w-5 text-blue-500" />
            <span>{readyInTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersIcon className="h-5 w-5 text-green-500" />
            <span>{servings} servings</span>
          </div>
        </div>

        {/* Recipe link */}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-900 hover:bg-primary-200 inline-block w-full rounded-md px-4 py-2 text-center text-white transition"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default MealItem;
