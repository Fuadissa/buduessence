import React from "react";

export const Trusted = () => {
  return <div className="h-[50vh]"></div>;
};






// const services = [
//   {
//     service: "Nutrient-Rich Beverages",
//     description:
//       "Our handcrafted beverages are infused with essential nutrients, designed to nourish and rejuvenate your body from within. Each blend is carefully curated to support overall well-being and vitality.",
//   },
//   {
//     service: "Holistic Wellness Guidance",
//     description:
//       "We offer expert wellness advice to help you build a balanced lifestyle. From mindful nutrition to stress management, our guidance is tailored to support your individual health journey.",
//   },
//   {
//     service: "Personalized Health Plans",
//     description:
//       "Every individual is unique, and so is their wellness journey. Our customized health plans are designed to align with your body’s needs, promoting sustainable well-being and inner harmony.",
//   },
//   {
//     service: "Community & Support",
//     description:
//       "At Budu Essence, we believe in the power of community. Join our vibrant wellness family to connect with like-minded individuals and share your path to a healthier life.",
//   },
//   {
//     service: "Sustainable Living Practices",
//     description:
//       "Wellness extends beyond the individual. We advocate for sustainable living, using ethically sourced ingredients and eco-friendly packaging to protect both your health and the environment.",
//   },
// ];

// export const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const scrollPosition = container.scrollTop;
//       const sectionHeight = container.clientHeight;
//       const currentIndex = Math.round(scrollPosition / sectionHeight);
//       setActiveIndex(currentIndex);
//     };

//     container.addEventListener("scroll", handleScroll);
//     return () => container.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen px-8 md:px-16 lg:px-24 py-20 flex flex-col gap-16 ">
//       {/* Header Section */}
//       <div className="border-b border-neutral-300 pb-14 max-w-3xl">
//         <h1 className="text-4xl md:text-6xl font-extralight tracking-tight text-gray-900">
//           Our Commitment to Wellness
//         </h1>
//         <p className="text-lg text-gray-700 mt-4 leading-relaxed">
//           At Budu Essence, we go beyond traditional health approaches, offering
//           carefully crafted solutions that promote holistic well-being. Whether
//           it’s through mindful nutrition, expert guidance, or a supportive
//           community, we’re here to help you cultivate a lifestyle of balance and
//           vitality.
//         </p>
//       </div>

//       {/* Services Section */}
//       <div className="grid grid-cols-12 gap-10 relative">
//         {/* Large Sticky Number */}
//         <div className="col-span-12 md:col-span-5 flex items-start sticky top-0">
//           <span className="text-[8rem] md:text-[12rem] font-extralight text-gray-300 leading-none transition-all duration-500 ease-in-out">
//             {String(activeIndex + 1).padStart(2, "0")}
//           </span>
//         </div>

//         {/* Services List */}
//         <div
//           ref={containerRef}
//           className="col-span-12 md:col-span-7 h-[70vh] overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
//         >
//           {services.map((service, index) => (
//             <div
//               key={service.service}
//               ref={(el) => {
//                 sectionsRef.current[index] = el;
//               }}
//               className="min-h-[70vh] border-b border-gray-200 pb-6 snap-start snap-always flex flex-col justify-center"
//             >
//               <h2 className="text-2xl md:text-3xl font-extralight text-[#252525]">
//                 {service.service}
//               </h2>
//               <p className="text-lg text-gray-700 mt-2 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
