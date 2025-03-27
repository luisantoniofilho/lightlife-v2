import Image from "next/image";
import Button from "./_components/Button";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <ChevronDoubleRightIcon className="h-6 w-6 text-green-400" />
      <span>{text}</span>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col gap-20 text-center text-stone-700">
        <h1 className="text-5xl font-bold">Welcome to LightLifeV2</h1>
        <p className="text-3xl">
          Your journey to better nutrition starts here.
        </p>
      </div>

      {/* Main image */}
      <Image
        className="mt-3 mb-12 px-4"
        priority
        alt="health food"
        width={1170}
        height={370}
        src="/main-image.png"
      />

      {/* Features */}
      <div className="mb-8 flex flex-col gap-2">
        <Feature text="Track your macros with precision." />
        <Feature text="Easily monitor your daily intake." />
        <Feature text="Get personalized meal plans." />
        <Feature text="Optimize your diet for better results." />
      </div>

      <Button href="/inputPhysicalData">START</Button>
    </div>
  );
}
