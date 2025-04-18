import UserForm from "./UserForm";

export default function Page() {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold sm:mb-16">
        Enter your physical data
      </h2>

      <UserForm />
    </div>
  );
}
