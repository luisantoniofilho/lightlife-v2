import { signOutAction } from "@/_lib/actions";
import Image from "next/image";

export default function SignoutButton() {
  return (
    <form action={signOutAction}>
      <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-3 text-lg tracking-widest text-white transition-all hover:bg-green-700">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height={24}
          width={24}
        />
        <span>Sign out</span>
      </button>
    </form>
  );
}
