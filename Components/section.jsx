import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <section
      id={id}
      className={`pt-[12rem] -mt-[5.25rem] py-10 lg:py-16 xl:py-20`}
    >
      {children}
      <div className="hidden absolute top-0 left-0 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 -right-[4.5rem] w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
    </section>
  );
};

export default Section;
