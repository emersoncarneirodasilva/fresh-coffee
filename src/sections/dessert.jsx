import { Desserts } from "@/constant";

// Import Components
import Section from "@/components/Section";
import DessertCard from "@/components/DessertCard";
import { RunningText, TitlePage } from "@/components/TypingText";

const Dessert = () => {
  return (
    <Section id="dessert">
      <RunningText />
      <TitlePage title="Desserts & Beverages" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-1 mt-[50px] mb-16 min-h-[70vh]">
        {Desserts.map((dessert) => (
          <DessertCard key={dessert.id} {...dessert} />
        ))}
      </div>
    </Section>
  );
};

export default Dessert;
