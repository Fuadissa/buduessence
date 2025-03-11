"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const OurProduct = () => {
  const products = [
    {
      id: 1,
      name: "Energy Boost Plus",
      description: "Premium energy drink with natural caffeine.",
      size: "355ml",
      price: "$4.99",
      image: "/asset/image_fx_ (60).jpg",
    },
    {
      id: 2,
      name: "Vitality Green Tea",
      description: "Organic green tea infused with antioxidants.",
      size: "250ml",
      price: "$3.99",
      image: "/asset/image_fx_ (62).jpg",
    },
    {
      id: 3,
      name: "Hydration Elixir",
      description: "Electrolyte-packed hydration for peak performance.",
      size: "500ml",
      price: "$5.99",
      image: "/asset/image_fx_ (63).jpg",
    },
    {
      id: 4,
      name: "Calm & Relax Tonic",
      description: "Herbal blend for relaxation and stress relief.",
      size: "300ml",
      price: "$4.49",
      image: "/asset/image_fx_ (64).jpg",
    },
  ];

  const ref = useRef(null);

  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20" ref={ref}>
      <div className="text-center flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#f8efa1] text-transparent bg-clip-text"
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          At Budu Essence, we bring wellness to life through natural, holistic
          solutions. Explore our products designed to nourish, uplift, and
          sustain your well-being.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full md:h-72 h-[22rem]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 truncate">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-gray-500 mt-1 text-sm">{product.size}</p>
              <p className="text-lg font-bold text-gray-900 mt-4">
                {product.price}
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <button type="button" className="btn">
                  Add to Cart
                </button>
                <button type="button" className="btn btn-primary">
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="px-6 py-3 btn text-white rounded-lg text-lg hover:bg-yellow-600 cursor-pointer"
        >
          See All Our Products
        </button>
      </div>
    </div>
  );
};
