import Image from "next/image";
import Link from "next/link";

// Import Component
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-screen h-screen overflow-x-auto text-white scroll-smooth"
    >
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <Image
          src="/images/bgweb.jpg"
          alt="Backgound Image"
          fill
          className="object-cover"
        />
      </div>

      <Navbar />

      <div className="relative flex flex-col items-center justify-center h-[70%] px-[2rem] py-[1rem] z-[10] mt-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl uppercase sm:text-3xl xl:text-4xl 2xl:text-5xl">
            server you better taste of coffee
          </h1>

          <p className="mt-2 mb-10 text-base font-medium tracking-wider sm:text-2xl">
            fresh place to drink coffee
          </p>

          <Link
            href="#menu"
            className="px-[1.35rem] py-[0.5rem] sm:px-[2rem] rounded-xl bg-gray-800 scroll-smooth hover:bg-gray-900 hover:scale-[1.02] transition-all duration-300"
          >
            <p className="text-sm font-semibold tracking-wider uppercase sm:text-base">
              menu
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
