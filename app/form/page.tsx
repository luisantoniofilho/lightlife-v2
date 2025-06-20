import { auth } from "@/_lib/auth";
import UserForm from "./UserForm";
import { redirect } from "next/navigation";

export default async function Page() {
  // Authentication check
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold sm:mb-16">
        Enter your physical data
      </h2>

      <UserForm />
    </div>
  );
}
