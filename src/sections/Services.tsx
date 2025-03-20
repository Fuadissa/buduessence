"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";
import { getServiceContent } from "@/sanity/sanity-utils";

interface Service {
  title: string;
  description: string;
  label: string;
  _key: string;
}

interface ServiceContent {
  title: string;
  description: string;
  services: Service[];
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export const Services = () => {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, amount: 0.2 });

  const [data, setData] = useState<ServiceContent | null>(null);

  useEffect(() => {
    async function getData() {
      const content = await getServiceContent();
      setData(content);
    }
    getData();
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto px-6 md:px-12 lg:py-20 py-14 space-y-12"
      id="service"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="z-40 text-4xl md:text-4xl lg:text-6xl font-bold mt-6 tracking-tighter bg-gradient-to-b from-black to-[#f8efa1] text-transparent bg-clip-text">
          {data?.title}
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {data?.description}
        </p>
        <button className="btn mt-8">Learn More</button>
      </motion.div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.services.map((service, index) => (
          <motion.div
            key={service._key}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.5 }}
            className={twMerge(
              `flex flex-col px-4 pb-4 bg-white shadow-md rounded-md transition hover:shadow-2xl`,
              index === 2 ? "bg-[#e2c35b]" : ""
            )}
          >
            <h3
              className={twMerge(
                "text-4xl font-thin border-b-[1px] border-gray-300 py-4 font-sans",
                index === 2 ? "text-white border-white" : ""
              )}
            >
              0{index + 1}_
            </h3>
            <h4
              className={twMerge(
                "mt-4 text-2xl font-medium text-gray-900 pb-4",
                index === 2 ? "text-white" : ""
              )}
            >
              {service.title}
            </h4>
            <p
              className={twMerge(
                "mt-2 text-gray-500 font-sans",
                index === 2 ? "text-white" : ""
              )}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
