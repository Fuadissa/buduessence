"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { motion } from "framer-motion";
import { DialogBox } from "@/components/DialogBox";
import { FaSpinner } from "react-icons/fa6";
import { getHeroContent } from "@/sanity/sanity-utils";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Button {
  _key: string;
  link: string;
  style: string;
  text: string;
}

interface HeroContent {
  backgroundImages: SanityImageSource[];
  heroText: string;
  title: string;
  buttons: Button[];
}

export const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [data, setData] = useState<HeroContent | null>(null);

  useEffect(() => {
    async function getData() {
      const content = await getHeroContent();
      setData(content);
    }
    getData();
  }, []);

  if (!data)
    return (
      <div className="container mx-auto px-6 py-12 text-[#f8e960] w-full h-[100vh] flex items-center justify-center bg-white">
        <FaSpinner className="animate-spin text-4xl" /> {/* Animated spinner */}
      </div>
    );

  return (
    <div id="home" className="grid grid-cols-12 h-[90vh] lg:h-[100vh] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f8efa1,#fffde8_100%)] pt-28 relative">
      <DialogBox open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="col-span-12 lg:col-span-7 pt-10 flex flex-col z-40">
        <motion.div
          className="md:w-[600px] lg:w-[478px] pl-10 md:pl-28 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="z-40 text-4xl md:text-6xl font-bold mt-6 tracking-tighter bg-gradient-to-b from-white lg:from-black to-[#f8efa1] text-transparent bg-clip-text">
            {data.title}
          </h1>
          <p className="text-xl text-[#dfdcdc] lg:text-[#222327] tracking-tight mt-6">
            {data.heroText}
          </p>
          <div className="flex gap-3 items-center mt-[30px]">
            <button
              type="button"
              className="btn cursor-pointer px-8 border-[#af912d] border-2"
              onClick={() => setIsDialogOpen(true)}
            >
              Get Started
            </button>
            <a
              type="button"
              href="https://calendly.com/buduessence/consultancy-session"
              target="_blank"
              rel="noopener"
              className="text-[#dfdcdc] cursor-pointer lg:text-[#2b2b2b] btn btn-text gap-1 border-2 border-[#af912d] hover:bg-[#af912d] hover:text-white"
            >
              <span>Speak to a Specialist</span>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="lg:px-0 col-span-12 lg:col-span-5 lg:relative absolute top-0 right-0 h-full w-full">
        <Swiper
          className="bg-transparent w-full h-full"
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {data.backgroundImages.map((src, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <Image
                src={urlFor(src).url()}
                alt={`image-${index}`}
                layout="fill"
                objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Black Overlay (only over the image) */}
        <div className="absolute inset-0 bg-black lg:hidden opacity-50 h-full w-full z-30"></div>
      </div>
    </div>
  );
};
