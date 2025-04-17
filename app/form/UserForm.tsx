"use client";

import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Select from "@/_components/Select";
import SpinnerMini from "@/_components/SpinnerMini";
import { calcMacrosAction } from "@/_lib/actions";
import { useTransition } from "react";
import toast from "react-hot-toast";

export default function UserForm() {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await calcMacrosAction(formData);

      if (!result?.error) {
        toast.error("Please fill all fields correctly.");
      } else {
        toast.success("Dados enviados com sucesso!");
      }
    });
  }

  return (
    <form
      className="grid grid-cols-1 justify-center gap-4 rounded-lg bg-white p-6 shadow-md sm:grid-cols-2 sm:gap-10 md:px-16"
      action={handleSubmit}
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
        <Button type="submit" disable={isPending}>
          {isPending ? <SpinnerMini /> : "Send form"}
        </Button>
      </div>
    </form>
  );
}
