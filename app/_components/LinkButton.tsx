import Link from "next/link";
import { ReactNode } from "react";

type buttonProps = {
  href: string;
  children: ReactNode;
};

export default function LinkButton({ href, children }: buttonProps) {
  return (
    <Link
      href={href}
      className="flex cursor-pointer gap-2 rounded-full bg-green-600 px-8 py-3 text-lg tracking-widest text-white transition-all hover:bg-green-700"
    >
      {children}
    </Link>
  );
}
