import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[820px] px-4 py-14 sm:px-6">
        <h1 className="mb-6 font-display text-[30px] font-extrabold leading-[1.5]">{title}</h1>
        <div className="flex flex-col gap-4 text-[16px] leading-8 text-body [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-ink">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
