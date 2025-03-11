"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AboutUs = () => {
  const ref = useRef(null);
  // `threshold: 0.3` means the animation will trigger when 30% of the component is in view.
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="lg:h-[100vh] w-full bg-[#f5f0c7] flex justify-center items-center py-16 md:px-24 px-4">
      <div
        ref={ref}
        className="h-full w-full bg-white rounded-md grid grid-cols-12 gap-4 p-4"
      >
        {/* Animated Image Section */}
        <motion.div
          className="relative w-full lg:h-full lg:col-span-5 col-span-12 h-[20rem] md:h-[25rem] overflow-hidden"
          initial={{ scale: 1 }}
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <Image
            alt="about-us-image"
            src="/asset/image_fx_ (57).jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </motion.div>

        {/* Animated Text Content Section */}
        <motion.div
          className="lg:col-span-7 col-span-12 flex flex-col justify-between py-14 text-center lg:text-left px-4 sm:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="z-40 text-3xl md:text-4xl font-bold mt-6 tracking-tighter bg-gradient-to-b from-black to-[#f8efa1] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            What Is Budu Essence?
          </motion.h1>

          <motion.p
            className="lg:text-base text-md text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            At Budu Essence, we believe that true wellness goes beyond just diet
            and exercise—it’s a lifestyle. Our mission is to empower individuals
            with holistic health solutions that nourish both the body and mind.
            We offer a range of carefully crafted, nutrient-rich beverages made
            from natural ingredients, designed to rejuvenate and energize you
            from within. Alongside our wellness products, we provide
            personalized health services, expert guidance, and a vibrant
            community that supports your journey toward a balanced and
            fulfilling life. Whether you&apos;re looking to enhance your daily
            routine or embark on a transformative wellness path, Budu Essence is
            here to inspire and guide you every step of the way.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.a
              href="#learn-more"
              className="inline-block btn cursor-pointer px-8 border-[#af912d] border-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
