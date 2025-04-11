import Image from "next/image";
import { HeaderLink } from "./HeaderLink";
import { useSession } from "next-auth/react";

export function LoginIcon() {
  const { data: session } = useSession();

  return (
    <HeaderLink href="/login">
      {session ? (
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
