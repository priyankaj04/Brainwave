import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full odd:my-4 px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8"
        >
          <h4 className={`h4 mb-4 ${item.color}`}>{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem]">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem]">{item.price}</div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "www.taqiabbas.me/Contact"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                className="flex items-start py-5 border-t border-n-6"
                key={index}
              >
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;