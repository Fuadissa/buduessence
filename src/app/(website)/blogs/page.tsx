"use client";

import { BlogsGrid } from "@/components/BlogsGrid";
import { BlogsHero } from "@/components/BlogsHero";
import { getBlogsContent } from "@/sanity/sanity-utils";
import { ContactUs } from "@/sections/Contact";
import { BlogContent } from "@/types";
import { useEffect, useState } from "react";

const Page = () => {
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
    <>
      <BlogsHero />
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:py-20 py-14 space-y-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight bg-gradient-to-b from-[#252525] to-[#f8efa1] text-transparent bg-clip-text">
          Our Blogs
        </h1>
        <BlogsGrid data={data} />
      </div>
      <ContactUs />
    </>
  );
};

export default Page;
