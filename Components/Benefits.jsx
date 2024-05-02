import { benefits } from "../constants";
import Heading from "./heading";
import Arrow from "../assets/svg/Arrow";
import PlusSvg from "../assets/svg/PlusSvg";

const Benefits = () => {
  return (
    <section
      id="feature"
      className={`pt-[12rem] -mt-[5.25rem] py-10 lg:py-16 xl:py-20`}
    >
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative cursor-pointer p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl.src}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: `url(#benefits)` }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      className="w-full h-full object-cover"
                      src={item.imageUrl.src}
                      alt={item.title}
                      height={362}
                      width={350}
                    />
                  )}
                </div>
              </div>
              <svg className="block" width={0} height={0}>
                <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                  <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
                </clipPath>
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden absolute left-[2rem] -h-1 lg:left-7.5 xl:left-9 lg:right-7.5 xl:right-9 right-[2rem] h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute left-[2rem] z-2 xl:block  lg:left-7.5 xl:left-9" />
      <PlusSvg className="hidden absolute right-[2rem] z-2 xl:block lg:right-7.5 xl:right-9" />
    </section>
  );
};

export default Benefits;
