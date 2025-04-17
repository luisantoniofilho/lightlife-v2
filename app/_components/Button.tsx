import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  disable?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  type,
  disable,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="cursor-pointer rounded-full bg-green-600 px-8 py-3 text-xl tracking-widest text-white transition-all hover:bg-green-700 md:text-2xl"
      type={type}
      disabled={disable ? disable : false}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
