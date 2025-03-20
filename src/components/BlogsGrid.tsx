"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BlogContent } from "@/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export const BlogsGrid: React.FC<{ data: BlogContent[] }> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* {data.map((blog, index) => ( */}
      {data.map((blog) => (
        <motion.a
          onClick={() => router.push(`/blogs/1`)}
          key={blog._id}
          className="bg-white rounded-sm shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 * 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          href={`/blogs/${blog.slug.current}`}
        >
          <Image
            src={urlFor(blog.mainImage).url()}
            alt={blog.title}
            width={600}
            height={500}
            className="w-full h-52 object-cover rounded-xs"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {blog.title}
              {/* {blog.title} */}
            </h3>
            <p className="text-gray-600 mt-3">{blog.excerpt}</p>
            <motion.div
              className="inline-block mt-4 text-gray-400 font-medium hover:text-gray-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              5 min read
            </motion.div>
          </div>
        </motion.a>
      ))}

      {/* ))} */}
    </div>
  );
};
