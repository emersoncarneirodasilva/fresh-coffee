"use client";

import { useState } from "react";
import { Ourmenu } from "@/constant";

// Import Components
import Section from "@/components/Section";
import CoffeeCard from "@/components/CoffeeCard";
import { RunningText, TitlePage } from "@/components/TypingText";

const OurMenu = () => {
  const [active, setActive] = useState("coffee3");

  return (
    <Section id="menu">
      <RunningText />
      <TitlePage title="Our main menus" />

      <div className="flex flex-row gap-2 min-h-[70vh] mt-[50px] ">
        {Ourmenu.map((coffee, index) => (
          <CoffeeCard
            key={coffee.id}
            {...coffee}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </Section>
  );
};

export default OurMenu;
