"use client";

import React, { useEffect, useRef, useState } from "react";
// import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";
import { BlogsGrid } from "@/components/BlogsGrid";
import { BlogContent } from "@/types";
import { getBlogsContent } from "@/sanity/sanity-utils";
import Link from "next/link";

export const Blogs = () => {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [data, setData] = useState<BlogContent[] | []>([]);

  useEffect(() => {
    async function getData() {
      const content = await getBlogsContent();
      setData(content);
    }
    getData();
  }, []);

  console.log(data);
  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto px-6 md:px-12 lg:py-20 py-14 space-y-12"
      id="blogs"
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
        <Link className="btn mt-8 py-4 px-7" href="/blogs">
          Browse all article
        </Link>
      </motion.div>

      {/* Blog Cards */}
      <BlogsGrid data={data.slice(0, 3)} />
    </div>
  );
};
