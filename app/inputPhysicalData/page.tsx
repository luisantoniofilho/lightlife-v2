import Button from "@/_components/Button";
import Input from "@/_components/Input";

export default function Page() {
  return (
    <>
      <h2 className="mb-4 text-center text-2xl font-bold">
        Your physical data
      </h2>
      <form className="flex flex-col justify-center gap-3 rounded-lg bg-white p-6 shadow-md">
        {/* Name */}
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
        />

        {/* Age */}
        <Input
          label="Age"
          type="number"
          name="age"
          placeholder="Enter your age"
        />

        {/* Height */}
        <Input
          label="Height (cm)"
          type="number"
          name="height"
          placeholder="Ex: 175"
        />

        {/* Weight */}
        <Input
          label="Weight (kg)"
          type="number"
          name="weight"
          placeholder="Ex: 70"
        />

        {/* Gender */}
        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-green-400"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Activity level */}
        <div>
          <label className="block font-medium text-gray-700">
            Activity level
          </label>
          <select
            name="activityLevel"
            className="mb-4 mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-green-400"
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Light (1-2 days per week)</option>
            <option value="moderate">Moderate (3-4 days per week)</option>
            <option value="active">Active (5-6 days per week)</option>
            <option value="very-active">Very active (atleta)</option>
          </select>
        </div>

        {/* Send button */}
        <div className="self-center">
          <Button href="/macronutrients">Send</Button>
        </div>
      </form>
    </>
  );
}
