import { useSession } from "next-auth/react";
import Image from "next/image";
import { HeaderLink } from "./HeaderLink";
import SpinnerMini from "./SpinnerMini";

export function LoginIcon() {
  const { data: session, status } = useSession();

  return (
    <HeaderLink href="/login">
      {status === "loading" ? (
        // Loading
        <SpinnerMini />
      ) : session ? (
        <Image
          className="rounded-full"
          src={session.user?.image ?? "/default-avatar.png"}
          alt="User"
          width={25}
          height={25}
        />
      ) : (
        "Login"
      )}
    </HeaderLink>
  );
}
