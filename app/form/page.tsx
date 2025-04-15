import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Select from "@/_components/Select";
import { calcMacrosAction } from "@/_lib/actions";

export default function Page() {
  return (
    <div>
      <h2 className="mb-4 text-center text-2xl font-bold md:mb-8 md:text-3xl">
        Enter your physical data
      </h2>

      <form
        className="grid grid-cols-1 justify-center gap-3 rounded-lg bg-white p-6 shadow-md sm:grid-cols-2 md:gap-10 md:px-16"
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
        <div className="flex justify-center sm:col-span-2">
          <Button type="submit">Send form</Button>
        </div>
      </form>
    </div>
  );
}
