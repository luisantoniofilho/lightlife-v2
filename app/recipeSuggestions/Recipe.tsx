import Button from "@/_components/Button";
import { ClockIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export type MealItemProps = {
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
}: MealItemProps) {
  return (
    <div className="flex max-w-sm flex-col items-center justify-center rounded-lg bg-white text-center shadow-md transition hover:shadow-lg">
      {/* Image */}
      <Image
        src={`https://spoonacular.com/recipeImages/${image}`}
        alt={title}
        width={500}
        height={300}
        className="rounded-t-lg object-cover"
      />

      {/* Content */}
      <div className="flex flex-col items-center p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
          {title}
        </h3>

        {/* Info section */}
        <div className="mb-4 flex items-center justify-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <ClockIcon className="h-5 w-5 text-stone-600" />
            <span>{readyInTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersIcon className="h-5 w-5 text-green-500" />
            <span>{servings} servings</span>
          </div>
        </div>

        {/* Recipe link */}
        <Link className="text-center" href={sourceUrl} target="blank">
          <Button type="button">View Recipe</Button>
        </Link>
      </div>
    </div>
  );
}

export default MealItem;
