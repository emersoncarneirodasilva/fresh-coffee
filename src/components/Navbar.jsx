import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [bgNavbar, setBgNavbar] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const setNavbarHandler = () => {
      if (window.scrollY >= 350) return setBgNavbar(true);
      return setBgNavbar(false);
    };

    document.addEventListener("scroll", setNavbarHandler);

    return () => {
      document.removeEventListener("scroll", setNavbarHandler);
    };
  }, []);

  const toggleMenuHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`${
        bgNavbar || isNavOpen ? "bg-[#333131]" : "bg-transparent"
      } ${
        isNavOpen ? "flex justify-center items-center h-screen opacity-95" : ""
      } w-full fixed px-[2rem] sm:px-[4rem] py-[0.5rem] z-[100] opacity-80 transition-all duration-500`}
    >
      <div
        className={`${
          isNavOpen ? "justify-center" : "justify-between"
        } flex items-center`}
      >
        {!isNavOpen && (
          <div className="scroll-smooth">
            <Link href="/">
              <Image src="/logo.png" alt="Logo Image" width={70} height={70} />
            </Link>
          </div>
        )}

        <div className="absolute block top-7 right-5 sm:hidden">
          <GiHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenuHandler}
          />
        </div>

        <ul
          className={`${
            isNavOpen
              ? "flex-col flex gap-6 text-center items-center text-3xl"
              : "hidden text-base gap-4"
          } md:text-2xl sm:flex scroll-smooth`}
        >
          <li className="transition-all duration-300 hover:brightness-90">
            <Link href="/" onClick={isNavOpen && toggleMenuHandler}>
              Home
            </Link>
          </li>
          <li className="transition-all duration-300 hover:brightness-90">
            <Link href="#menu" onClick={isNavOpen && toggleMenuHandler}>
              Our Menu
            </Link>
          </li>
          <li className="transition-all duration-300 hover:brightness-90">
            <Link href="#dessert" onClick={isNavOpen && toggleMenuHandler}>
              Dessert
            </Link>
          </li>
          <li className="transition-all duration-300 hover:brightness-90">
            <Link href="#about" onClick={isNavOpen && toggleMenuHandler}>
              About us
            </Link>
          </li>
          <li className="transition-all duration-300 hover:brightness-90">
            <Link href="#contact" onClick={isNavOpen && toggleMenuHandler}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
