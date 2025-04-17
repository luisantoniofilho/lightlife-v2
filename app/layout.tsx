import "@/_styles/globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ReactNode } from "react";

import { Quicksand } from "next/font/google"; // Importando a fonte Quicksand
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "400", // Ou outro peso, dependendo da sua escolha
});

export const metadata = {
  title: {
    template: "%s / LightLife",
    default: "Welcome / LightLife",
  },
  description: "The diet tool that helps you to follow a diet!",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} flex min-h-screen flex-col bg-stone-100 text-stone-800 antialiased`}
      >
        {/* Header */}
        <SessionProvider>
          <Toaster />
          <Header />

          {/* Page content */}
          <main className="mx-auto flex-grow p-6">{children}</main>
        </SessionProvider>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
