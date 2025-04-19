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
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-8 shadow-lg sm:max-w-lg md:max-w-xl md:p-12">
        {!session && (
          <div className="mb-4 w-full rounded-lg bg-blue-50 p-3 text-center text-blue-700">
            ⚠️ Log In to access all website content!
          </div>
        )}

        {!session ? (
          <>
            <h2 className="mb-4 text-center text-3xl font-bold">Welcome!</h2>
            <p className="mb-6 text-center text-base text-gray-600 md:text-lg">
              Sign in or create an account
            </p>
            <SigninButton />
          </>
        ) : (
          <>
            <h2 className="mb-4 text-center text-3xl font-bold">
              You are already logged in!
            </h2>
            <p className="mb-6 text-center text-base text-gray-600 md:text-lg">
              Want to logout?
            </p>
            <SignoutButton />
          </>
        )}
      </div>
    </div>
  );
}
