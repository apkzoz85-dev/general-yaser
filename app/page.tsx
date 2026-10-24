import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import LeadPopup from "@/components/LeadPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
      <FloatingButtons />
      <LeadPopup />
    </>
  );
}
