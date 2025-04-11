type SelectProps = {
  name: string;
  label: string;
  options: string[];
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function Select({ name, label, options }: SelectProps) {
  return (
    <div>
      <label className="block font-medium text-gray-700">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-green-400"
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
