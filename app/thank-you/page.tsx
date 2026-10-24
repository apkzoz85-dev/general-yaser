import type { Metadata } from "next";
import Header from "@/components/Header";
import ThankYou from "./ThankYou";

export const metadata: Metadata = {
  title: "شكراً لتواصلك",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[70vh] max-w-[640px] flex-col items-center justify-center gap-5 px-4 py-16 text-center">
        <ThankYou />
      </main>
    </>
  );
}
