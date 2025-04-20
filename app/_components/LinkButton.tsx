import Link from "next/link";
import { ReactNode } from "react";

type buttonProps = {
  href: string;
  children: ReactNode;
  optionalClassName?: string;
};

export default function LinkButton({
  href,
  children,
  optionalClassName,
}: buttonProps) {
  return (
    <Link
      href={href}
      className={`mx-auto flex cursor-pointer gap-2 rounded-full bg-green-600 px-8 py-3 text-center text-lg tracking-widest text-white transition-all hover:bg-green-700 lg:text-2xl ${optionalClassName}`}
    >
      {children}
    </Link>
  );
}
