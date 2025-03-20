"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface BlogHeroProps {
  title: string;
  image: SanityImageSource;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ title, image }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[80vh] lg:h-[100vh] md:h-[70vh] flex justify-center items-center flex-col"
    >
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: ``,
              }}
            />
            <Image
              src={urlFor(image).url()}
              alt={`image-blogs-1`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />

            {/* Black Overlay (only over the image) */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 space-y-8">
        {/* Text Animation */}
        <motion.div
          className="md:max-w-[30rem] text-center max-w-[20rem] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Explore our collection of thoughtful articles, expert insights, and
          inspiring stories about fragrance, beauty, and wellness
        </motion.div>

        {/* Hero Section */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-[4rem] lg:text-8xl font-bold text-center audiowide-regular text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="z-40 font-bold mt-6 tracking-tighter bg-gradient-to-b from-[#969696] to-[#f8efa1] text-transparent bg-clip-text">
            {title}
          </span>
        </motion.h1>
      </div>
    </section>
  );
};
