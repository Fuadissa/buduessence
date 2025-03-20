"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
// import HeroPage from "@/components/HeroPage";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon
import { getBlogContent } from "@/sanity/sanity-utils";
import { BlogContent } from "@/types";
import { PortableText } from "next-sanity";
import { BlogHero } from "@/components/BlogHero";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogContent | null>(null);

  useEffect(() => {
    async function getData() {
      const content = await getBlogContent(id as string);
      setBlog(content);
    }
    getData();
  }, []);

  console.log(blog);

  if (!blog)
    return (
      <div className="container mx-auto px-6 py-12 text-[#f8e960] w-full h-[100vh] flex items-center justify-center bg-white">
        <FaSpinner className="animate-spin text-4xl" /> {/* Animated spinner */}
      </div>
    );

  return (
    <>
      <BlogHero title={blog.title} image={blog.mainImage} />
      <section className="container mx-auto px-6 py-12 text-black max-w-4xl">
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {blog.title}
        </motion.h1>
        <p className="text-center text-gray-500 mt-2">By {blog.author}</p>

        {/* First Image */}
        <div className="relative my-8 w-full h-[30vh] md:h-[40vh] lg:h-[60vh] rounded-lg overflow-hidden max-w-2xl place-self-center">
          <Image
            src={urlFor(blog.mainImage).url()}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="mt-4 text-lg leading-relaxed gap-3 flex flex-col">
          <PortableText value={blog.content} />
        </div>
      </section>
    </>
  );
};

export default BlogPost;
