import Link from "next/link";
import { ReactNode } from "react";

type HeaderLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
};

export function HeaderLink({ href, children, onClick }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:bg-primary-900 rounded-full px-4 py-2 text-base text-stone-600 transition-all duration-300 hover:text-white lg:text-lg"
    >
      {children}
    </Link>
  );
}
