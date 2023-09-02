import { RunningText, TitlePage } from "@/components/TypingText";
import Image from "next/image";

const { default: Section } = require("@/components/Section");

const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-2 mb-[3rem] h-fit">
        <div className="flex items-center justify-center border">
          <Image
            src="/images/coffee-shop.jpg"
            alt="Coffee Shop"
            width={350}
            height={500}
            className="rounded-xl"
          />
        </div>

        <div className="absolute hidden sm:block top-0 right-0 w-1/2 h-full bg-[#333131] z-0" />

        <div className="relative z-50 flex items-center justify-start px-10 py-8 bg-[#333131]">
          <h1 className="absolute text-4xl font-bold text-white md:text-5xl xl:text-6xl top-10 left-10 opacity-10">
            freshcoffee
          </h1>

          <div>
            <RunningText color="brown" align="left" />
            <TitlePage title="About us" color="white" />
            <div className="mt-8 text-[#e8e8e8] text-lg font-normal text-justify">
              <p className="opacity-90">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                saepe a, reiciendis repellendus quaerat eaque optio placeat?
                Nesciunt, quia architecto illo dolore ex mollitia eius sit! Ad
                maiores dignissimos voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
