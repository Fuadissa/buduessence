import { AboutUs } from "@/sections/AboutUs";
import { Blogs } from "@/sections/Blogs";
import { Calories } from "@/sections/Calories";
import { ContactUs } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
// import { OurProduct } from "@/sections/OurProduct";
import { Services } from "@/sections/Services";
// import { Trusted } from "@/sections/Trusted";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Calories />
      <Blogs />
      <ContactUs />
      {/* <OurProduct /> */}
      {/* <Trusted /> */}
    </>
  );
}
