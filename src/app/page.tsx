import { Navbar } from "@/components/Navbar";
import { AboutUs } from "@/sections/AboutUs";
import { Calories } from "@/sections/Calories";
import { Hero } from "@/sections/Hero";
import { OurProduct } from "@/sections/OurProduct";
import { Services } from "@/sections/Services";
// import { Trusted } from "@/sections/Trusted";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Calories />
      <OurProduct />
      {/* <Trusted /> */}
    </>
  );
}
