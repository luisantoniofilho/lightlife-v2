import { Bars4Icon, XMarkIcon } from "@heroicons/react/20/solid";

type MobileMenuButtonProps = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MobileMenuButton({
  menuIsOpen,
  setMenuIsOpen,
}: MobileMenuButtonProps) {
  return (
    <button
      className="ml-auto cursor-pointer p-2 text-gray-700 md:hidden"
      onClick={() => setMenuIsOpen((prev) => !prev)}
    >
      {menuIsOpen ? (
        <XMarkIcon className="h-6 w-6 text-stone-600" />
      ) : (
        <Bars4Icon className="h-6 w-6 text-stone-600" />
      )}
    </button>
  );
}
