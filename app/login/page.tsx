import SigninButton from "@/_components/SigninButton";
import SignoutButton from "@/_components/SignoutButton";
import { auth } from "@/_lib/auth";

export const metadata = {
  title: "Login",
};

export default async function Page() {
  const session = await auth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full min-w-2 flex-col items-center rounded-lg bg-white p-6 shadow-md">
        {!session ? (
          <>
            <h2 className="mb-4 text-center text-3xl font-bold">Welcome</h2>
            <p className="mb-6 text-center text-base text-gray-600 md:text-lg">
              Sign in or create an account
            </p>
            <SigninButton />
          </>
        ) : (
          <>
            <h2 className="mb-4 text-center text-2xl font-bold">
              Welcome again!
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Sign in or create an account
            </p>
            <SignoutButton />
          </>
        )}
      </div>
    </div>
  );
}
