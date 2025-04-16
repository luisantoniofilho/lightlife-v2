import { ReactNode } from "react";

export function Caption({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg p-4">
      <h3 className="font-semibold md:text-xl">{label}</h3>
      <p className="md:text-lg">{children}</p>
    </div>
  );
}
