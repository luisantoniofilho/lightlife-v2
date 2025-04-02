"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PreserveParamsButton({
  newPath,
  children,
}: {
  newPath: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  // Mounts a new URL keeping the current params
  const params = searchParams.toString();
  const href = params ? `${newPath}?${params}` : newPath;

  return (
    <Link
      href={href}
      className="rounded-full bg-green-600 px-8 py-3 text-lg tracking-widest text-white transition-all hover:bg-green-700"
    >
      {children}
    </Link>
  );
}
