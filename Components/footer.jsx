import { socials } from "../constants";
import Section from "./section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="flex container sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="items-center flex justify-center rounded-full transition-colors w-10 h-10 bg-n-7 hover:bg-n-6"
            >
              <img src={item.iconUrl.src} alt={item.title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
