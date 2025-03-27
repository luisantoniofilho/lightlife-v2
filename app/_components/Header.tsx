import Link from "next/link";
import HeaderLink from "./HeaderLink";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-50 px-6 py-4 sm:justify-center sm:gap-10">
      {/* Link to main page */}
      <Link
        href="/"
        className="text-primary-900 hover:text-primary-200 text-lg"
      >
        LightLifeV2
      </Link>

      {/* Links to other pages */}
      <div className="flex gap-4 sm:gap-6">
        <HeaderLink href="inputPhysicalData">Form</HeaderLink>

        <HeaderLink href="macronutrients">Macronutrients</HeaderLink>

        <HeaderLink href="mealsSuggestions">Meals</HeaderLink>
      </div>
    </header>
  );
}

export default Header;
