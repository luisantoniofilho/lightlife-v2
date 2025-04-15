import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-full bg-green-600 px-8 py-3 text-lg tracking-widest text-white transition-all hover:bg-green-700">
      {children}
    </button>
  );
}
