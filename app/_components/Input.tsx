type inputProps = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
};

export default function Input({ label, type, name, placeholder }: inputProps) {
  return (
    <div>
      <label className="block text-2xl font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-xl focus:ring focus:ring-green-300"
      />
    </div>
  );
}
