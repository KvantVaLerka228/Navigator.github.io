import Header from "@/components/layout/Header";
import ProfessionLadder from "@/components/sections/ProfessionLadder";
import ProfessionMap from "@/components/sections/ProfessionMap";
import SoftwareChoice from "@/components/sections/SoftwareChoice";
import ProfileSection from "@/components/sections/ProfileSection";
import MythBuster from "@/components/sections/MythBuster";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <ProfessionLadder />
        <ProfessionMap />
        <SoftwareChoice />
        <ProfileSection />
        <MythBuster />
      </main>
      <Footer />
    </>
  );
}