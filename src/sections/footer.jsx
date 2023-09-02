import FooterTitle from "@/components/FooterTitle";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const date = new Date();

  return (
    <section
      id="contact"
      className="scroll-smooth h-[50vh] w-screen overflow-x-hidden relative px-[4rem] py-[1rem] bg-[#333131] items-center"
    >
      <div className="grid grid-cols-1 gap-6 mt-12 md:whitespace-nowrap sm:gap-0 sm:grid-cols-2">
        <div className="">
          <FooterTitle>Contact</FooterTitle>
          <div className="flex items-center text-[#e8e8e8] opacity-90">
            <HiOutlineMail />
            <p className="ml-2">freshcoffee@gmail.com</p>
          </div>
          <div className="flex items-center text-[#e8e8e8] opacity-90">
            <HiOutlineLocationMarker />
            <p className="ml-2">Jln.kemana saja no.1</p>
          </div>
        </div>

        <div className="flex flex-col justify-around gap-4 sm:gap-6 sm:flex-row">
          <div className="flex flex-col">
            <FooterTitle>Social media</FooterTitle>
            <a href="#" className="text-[#e8e8e8] opacity-90 w-fit">
              Instagram
            </a>
            <a href="#" className="text-[#e8e8e8] opacity-90 w-fit">
              Facebook
            </a>
            <a href="#" className="text-[#e8e8e8] opacity-90 w-fit">
              Tiktok
            </a>
            <a href="#" className="text-[#e8e8e8] opacity-90 w-fit">
              Whatsapp
            </a>
          </div>

          <div className="flex flex-col">
            <FooterTitle>Products</FooterTitle>
            <p className="text-[#e8e8e8] opacity-90">Coffees</p>
            <p className="text-[#e8e8e8] opacity-90">Desserts</p>
            <p className="text-[#e8e8e8] opacity-90">Beverages</p>
          </div>

          <div className="flex flex-col">
            <FooterTitle>Facility</FooterTitle>
            <p className="text-[#e8e8e8] opacity-90">Wifi</p>
            <p className="text-[#e8e8e8] opacity-90">Comfy place</p>
            <p className="text-[#e8e8e8] opacity-90">Musical instrument</p>
            <p className="text-[#e8e8e8] opacity-90">Custom room</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1.5px] bg-[#e8e8e8] opacity-90 mt-20" />
      <p className="text-[#e8e8e8] opacity-90 text-xs font-light tracking-wider text-center mt-2">
        &copy;{date.getFullYear()} Freshcoffee. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
