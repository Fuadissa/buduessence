import { Navbar } from "@/components/Navbar";
import { AboutUs } from "@/sections/AboutUs";
import { Blogs } from "@/sections/Blogs";
import { Calories } from "@/sections/Calories";
import { ContactUs } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
// import { OurProduct } from "@/sections/OurProduct";
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
      <Blogs />
      <ContactUs />
      <Footer />
      {/* <OurProduct /> */}
      {/* <Trusted /> */}
    </>
  );
}
