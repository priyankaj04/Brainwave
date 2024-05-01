import Header from "@/components/Header.tsx";
import ButtonGradient from "../../assets/svg/ButtonGradient.jsx";
import Hero from "@/components/Hero.tsx";
import Benefits from '@/components/Benefits'
function LandingPage() {
  return (
    <div className="pt-[4.75rem] h-full lg:pt-[6.25rem] overflow-auto">
      <div className="hidden fixed z-50 top-0 left-0 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden fixed z-50 top-0 right-0 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
      <Header />
      <Hero />
      <Benefits />
      <ButtonGradient />
    </div>
  );
}

export default LandingPage;
