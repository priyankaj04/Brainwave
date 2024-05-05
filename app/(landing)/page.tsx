import Header from "@/Components/header";
import ButtonGradient from "../../assets/svg/ButtonGradient.jsx";
import Hero from "@/Components/hero";
import Benefits from '@/Components/benefits.jsx'
import Collaboration from '@/Components/collaboration.jsx'
import Services from "@/Components/services.jsx";
import Pricing from "@/Components/pricing.jsx";
import Roadmap from "@/Components/roadmap.jsx";
import Footer from "@/Components/footer.jsx";

function LandingPage() {
  return (
    <div className="pt-[4.75rem] overflow-x-hidden h-full lg:pt-[6.25rem] overflow-y-auto">
      <div className="hidden fixed z-50 top-0 left-0 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden fixed z-50 top-0 right-0 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
      <ButtonGradient />
    </div>
  );
}

export default LandingPage;
