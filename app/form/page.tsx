import Input from "@/_components/Input";
import Select from "@/_components/Select";
import { calcMacrosAction } from "@/_lib/actions";

export default function Page() {
  return (
    <>
      <h2 className="mb-4 text-center text-2xl font-bold">
        Enter your physical data
      </h2>
      <form
        className="flex flex-col justify-center gap-3 rounded-lg bg-white p-6 shadow-md"
        action={calcMacrosAction}
      >
        {/* Age */}
        <Input
          label="Age"
          type="number"
          name="age"
          placeholder="Enter your age"
        />

        {/* Weight */}
        <Input
          label="Weight (kg)"
          type="number"
          name="weight"
          placeholder="Ex: 70"
        />

        {/* Height */}
        <Input
          label="Height (cm)"
          type="number"
          name="height"
          placeholder="Ex: 175"
        />

        {/* Gender */}
        <Select label="Gender" name="gender" options={["male", "female"]} />

        {/* Activity level */}
        <Select
          label="Activity level"
          name="activityLevel"
          options={["sedentary", "light", "moderate", "active", "very-active"]}
        />

        {/* Goal */}
        <Select
          label="Goal"
          name="goal"
          options={["gain-muscle", "lose-fat", "mantain"]}
        />

        {/* Send button */}
        <div className="self-center">
          <button
            className="cursor-pointer rounded-full bg-green-600 px-8 py-3 text-lg tracking-widest text-white transition-all hover:bg-green-700"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}
