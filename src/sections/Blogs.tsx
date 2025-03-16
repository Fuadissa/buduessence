"use client";

import React, { useRef } from "react";
// import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Blogs = () => {
  const router = useRouter();
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto px-6 md:px-12 lg:py-20 py-14 space-y-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="z-40 text-4xl md:text-4xl lg:text-6xl font-bold mt-6 tracking-tighter bg-gradient-to-b from-black to-[#f8efa1] text-transparent bg-clip-text">
          Our Latest Articles
        </h2>
        <button className="btn mt-8 py-4 px-7">Browse all article</button>
      </motion.div>

      {/* Blog Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {data.map((blog, index) => ( */}
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            onClick={() => router.push(`/blogs/1`)}
            key={index}
            className="bg-white rounded-sm shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 p-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src="/asset/image_fx_ (57).jpg"
              alt="WorkPlace Well being"
              width={600}
              height={500}
              className="w-full h-52 object-cover rounded-xs"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                WorkPlace Well being Of the mansion
                {/* {blog.title} */}
              </h3>
              <p className="text-gray-600 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                explicabo iste nobis, vitae illo illum libero, laudantium.
              </p>
              <motion.div
                className="inline-block mt-4 text-gray-400 font-medium hover:text-gray-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                5 min read
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* ))} */}
      </div>
    </div>
  );
};
