import Link from "next/link";
import { ReactNode } from "react";

type HeaderLinkProps = {
  href: string;
  children: ReactNode;
};

function HeaderLink({ href, children }: HeaderLinkProps) {
  return (
    <Link
      key={href}
      href={href}
      className="hover:bg-primary-900 rounded-full px-4 py-2 text-base text-stone-600 transition-all duration-300 hover:text-white"
    >
      {children}
    </Link>
  );
}

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
        <HeaderLink href="form">Form</HeaderLink>

        <HeaderLink href="macronutrients">Macronutrients</HeaderLink>

        <HeaderLink href="mealsSuggestions">Meals</HeaderLink>
      </div>
    </header>
  );
}

export default Header;
