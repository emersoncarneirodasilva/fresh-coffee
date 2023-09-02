const Section = ({ children, id }) => {
  return (
    <section
      id={id}
      className={`${
        id === "dessert" ? "px-[4rem]" : "px-[2rem]"
      } relative w-screen min-h-screen overflow-x-hidden sm:px-[4rem] py-[1rem]`}
    >
      {children}
    </section>
  );
};

export default Section;
