import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import { Gradient } from "../design/Roadmap";
import Button from "./button";
import Heading from "./heading";
import Section from "./Section";
import Tagline from "./Tagline";
import PlusSvg from "../assets/svg/PlusSvg";
import { gradient } from "../assets"

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />
        <div className="relative grid gap-6  md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 ">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid.src}
                      alt="Grid"
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2.src : loading1.src}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt="status"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl.src}
                        className="w-full"
                        alt={item.title}
                        width={630}
                        height={420}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
              <img
                className="w-full"
                src={gradient.src}
                width={942}
                height={942}
                alt="Gradient"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
      <div className="hidden absolute left-[2rem] -h-1 lg:left-7.5 xl:left-9 lg:right-7.5 xl:right-9 right-[2rem] h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute left-[2rem] z-2 xl:block  lg:left-7.5 xl:left-9" />
      <PlusSvg className="hidden absolute right-[2rem] z-2 xl:block lg:right-7.5 xl:right-9" />
    </Section>
  );
};

export default Roadmap;
