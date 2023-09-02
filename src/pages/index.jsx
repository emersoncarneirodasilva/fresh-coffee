import Homepage from "@/sections/home";
import OurMenu from "@/sections/menu";
import Dessert from "@/sections/dessert";
import About from "@/sections/about";
import Footer from "@/sections/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="freshcoffee website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fresh Coffee</title>
      </Head>
      <Homepage />
      <OurMenu />
      <Dessert />
      <About />
      <Footer />
    </>
  );
}
