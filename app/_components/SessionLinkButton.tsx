"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { ReactNode } from "react";

type SessionLinkButtonProps = {
  // href if the user is authenticated - href if it is not
  hrefs: [string, string];
  children: ReactNode;
};

export default function SessionLinkButton({
  hrefs,
  children,
}: SessionLinkButtonProps) {
  const { data: session } = useSession();

  const href = session ? hrefs[0] : hrefs[1];

  return (
    <Link
      href={href}
      className="flex cursor-pointer gap-2 rounded-full bg-green-600 px-8 py-3 text-lg tracking-widest text-white transition-all hover:bg-green-700 lg:text-4xl"
    >
      {children}
    </Link>
  );
}
