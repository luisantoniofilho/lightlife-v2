import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      className="cursor-pointer rounded-full bg-green-600 px-8 py-3 text-lg tracking-widest text-white transition-all hover:bg-green-700 sm:text-xl md:text-2xl"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
