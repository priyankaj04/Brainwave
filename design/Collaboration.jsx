import { curve1, curve2 } from "../assets";

export const RightCurve = () => {
  return (
    <div className="hidden top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve2.src} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden bottom-0 right-1/2 w-[32.625rem] -mt-1 pointer-events-none xl:block">
      <img src={curve1.src} width={522} height={182} alt="Curve 1" />
    </div>
  );
};
