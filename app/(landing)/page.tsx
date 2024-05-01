import Header from "@/components/Header.tsx";
import ButtonGradient from "../../assets/svg/ButtonGradient.jsx";
import Hero from "@/components/Hero.tsx";
import Benefits from '@/components/Benefits'
function LandingPage() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <ButtonGradient />
    </div>
  );
}

export default LandingPage;
