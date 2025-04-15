import {
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { ElementType } from "react";
import LinkButton from "./_components/LinkButton";

type FeatureProps = {
  children: React.ReactNode;
  icon: ElementType;
};

function Feature({ children, icon: Icon }: FeatureProps) {
  return (
    <div className="flex items-center gap-3 text-base sm:text-2xl">
      <Icon className="h-6 w-6 text-green-600 md:h-8 md:w-8" />
      <span>{children}</span>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col items-center px-4 py-10">
      {/* Responsive titles */}
      <div className="flex flex-col gap-6 text-center text-stone-700">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Welcome to LightLifeV2
        </h1>
        <h2 className="text-3xl sm:text-4xl">
          Your journey to better nutrition starts here.
        </h2>
      </div>

      {/* Main image */}
      <div className="relative mt-6 mb-12 w-full max-w-2xl md:mb-20">
        <Image
          className="h-auto w-full"
          priority
          alt="health food"
          width={1170}
          height={370}
          src="/main-image.png"
        />
      </div>

      {/* Features */}
      <div className="mb-8 flex flex-col gap-3 text-center sm:gap-5 md:gap-6 lg:mb-16 lg:flex-row">
        {/* Import the icons from heroicons */}
        <Feature icon={AdjustmentsHorizontalIcon}>
          Track your macros with precision.
        </Feature>
        <Feature icon={ChartBarIcon}>Easily monitor your daily intake.</Feature>
        <Feature icon={UserCircleIcon}>Get personalized meal plans.</Feature>
        <Feature icon={SparklesIcon}>
          Optimize your diet for best results.
        </Feature>
      </div>

      <LinkButton href="/login">START NOW</LinkButton>

      {/* New nutrition section */}
      <section className="mt-16 flex w-full max-w-6xl flex-col gap-10">
        {/* Block 1 - Text left, image right */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-stone-700">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Why Nutrition Matters
            </h2>
            <p className="text-lg md:text-xl">
              Good nutrition provides the fuel your body needs to perform at its
              best. It helps with weight management, improves mood and energy
              levels, and reduces the risk of chronic diseases.
            </p>
            <p className="text-lg md:text-xl">
              When you eat well, you feel well. And with LightLife, your
              nutrition is no longer a guessing game — it&apos;s a guided
              journey.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/healthy-food.png"
              alt="Healthy food"
              width={5746}
              height={3830}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Block 2 - Image left, text right */}
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="order-2 w-full md:order-1">
            <Image
              src="/healthy-food-2.png"
              alt="Healthy meal"
              width={2793}
              height={3059}
              className="h-auto w-full"
            />
          </div>
          <div className="order-1 space-y-4 text-stone-700 md:order-2">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Build Better Habits
            </h2>
            <p className="text-lg md:text-xl">
              Nutrition isn&apos;t about restriction — it&apos;s about balance.
              Learn how to build meals that fuel your goals, fit your
              preferences, and nourish your body.
            </p>
            <p className="text-lg md:text-xl">
              LightLife adapts to your lifestyle, giving you the tools to eat
              smarter and live better.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
