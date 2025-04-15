"use client";

import Link from "next/link";
import { useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { LoginIcon } from "./LoginIcon";
import { MobileMenuButton } from "./MobileMenuButton";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleCloseMenu = () => setMenuIsOpen(false);

  const links = [
    { href: "/form", label: "Form" },
    { href: "/macronutrients", label: "Macronutrients" },
    { href: "/mealsSuggestions", label: "Meals" },
  ];

  return (
    <header className="flex items-center justify-between border-b border-stone-50 px-6 py-4 sm:justify-center sm:gap-10">
      {/* Logo */}
      <Link
        href="/"
        className="text-primary-900 hover:text-primary-200 text-2xl"
      >
        LightLifeV2
      </Link>

      {/* Desktop menu */}
      <nav className="hidden gap-4 sm:flex sm:gap-6">
        {links.map(({ href, label }) => (
          <HeaderLink key={href} href={href}>
            {label}
          </HeaderLink>
        ))}

        <LoginIcon />
      </nav>

      {/* Mobile menu button */}
      <MobileMenuButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          menuIsOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={handleCloseMenu}
      />

      {/* Mobile drawer */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-green-50 p-6 shadow-lg transition-transform duration-300 ${
          menuIsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-2 flex">
          <LoginIcon />
          <MobileMenuButton
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
          />
        </div>

        <ul className="flex flex-col gap-4">
          {/* Home link */}
          <li>
            <HeaderLink href="/" onClick={handleCloseMenu}>
              Início
            </HeaderLink>
          </li>

          {links.map(({ href, label }) => (
            <li key={href}>
              <HeaderLink href={href} onClick={handleCloseMenu}>
                {label}
              </HeaderLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
