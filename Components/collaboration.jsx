import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import PlusSvg from "../assets/svg/PlusSvg";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container mb-10 lg:mb-15 lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seemless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check.src} alt="check" width={24} height={24} />
                  <h6 className="h6 body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it Now</Button>
        </div>
        <div className='flex flex-col mb-14 justify-end'>
          <LeftCurve className='mb-28' />
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center h-full w-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol.src}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                    }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                      }`}
                  >
                    <img
                      src={item.icon.src}
                      className="m-auto"
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col mt-64 justify-center'>
          <RightCurve />
        </div>
      </div>
      <div className="hidden absolute left-[2rem] -h-1 lg:left-7.5 xl:left-9 lg:right-7.5 xl:right-9 right-[2rem] h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute left-[2rem] z-2 xl:block  lg:left-7.5 xl:left-9" />
      <PlusSvg className="hidden absolute right-[2rem] z-2 xl:block lg:right-7.5 xl:right-9" />
    </Section>
  );
};

export default Collaboration;
