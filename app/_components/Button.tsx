import Link from "next/link";

type buttonProps = {
  href: string;
  children: string;
};

export default function Button({ href, children }: buttonProps) {
  return (
    <Link
      href={href}
      className="rounded-full bg-green-600 px-8 py-3 text-lg tracking-widest text-white transition-all hover:bg-green-700"
    >
      {children}
    </Link>
  );
}
