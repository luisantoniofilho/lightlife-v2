import { capitalize } from "@/utils/capitalize";

type SelectProps = {
  name: string;
  label: string;
  options: string[];
};

export default function Select({ name, label, options }: SelectProps) {
  return (
    <div>
      <label className="block text-2xl font-medium text-gray-700 sm:text-xl">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-2xl focus:ring focus:ring-green-400 sm:text-2xl"
      >
        <option value="" disabled>
          Select one option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {capitalize(option)}
          </option>
        ))}
      </select>
    </div>
  );
}
