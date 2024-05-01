'use client';
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "../Components/Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "../design/Pricing";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";


const Pricing = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2" ref={parallaxRef}>
        <div className="hidden relative items-center h-[250px] justify-center mb-[6.5rem] lg:flex">
          <ScrollParallax isAbsolutelyPositioned>
            <div className="hidden relative items-center h-[250px] justify-center mb-[6.5rem] lg:flex">
              <img
                src={smallSphere.src}
                className="relative z-2 self-center"
                width={255}
                height={255}
                alt="sphere"
              />
            </div>
          </ScrollParallax>
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars.src}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="flex justify-center items-center">
          <PricingList />
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider border-b uppercase"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
