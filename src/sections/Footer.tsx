"use client";

import { getSocialLinks } from "@/sanity/sanity-utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface SocialLinksContent {
  linkedin: string;
  twitter: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

export const Footer = () => {
  const [data, setData] = useState<SocialLinksContent | null>(null);

  useEffect(() => {
    async function getData() {
      const content = await getSocialLinks();
      setData(content);
    }
    getData();
  }, []);

  return (
    <footer
      className="relative shadow-md pt-6 text-[#BCBCBC] text-sm pb-12 text-center bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f8efa1,#fffde8_100%)]"
      id="footer"
    >
      <div className="container mx-auto px-6">
        {/* Animated Brand Name */}
        <motion.span
          className="text-4xl font-bold text-white block place-self-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div
            className={twMerge(
              "transition-colors duration-500 text-2xl md:text-3xl lg:text-4xl text-[#dabd5f] font-serif flex justify-center items-center space-x-2"
            )}
          >
            <span>
              <Image
                src="/asset/BuduLogo.png"
                alt="Budu Essence Logo"
                width={50}
                height={50}
              />
            </span>
            Budu Essence
          </div>
        </motion.span>

        {/* Navigation Links */}
        <motion.nav
          className="flex flex-wrap justify-center gap-6 mt-6 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {["home", "blogs", "about-us", "service", "calories-Cal", "contact-us"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace("-", "")}`}
                className="hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                ).join(' ')}
              </motion.a>
            )
          )}
        </motion.nav>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {data?.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit LinkedIn Page"
              className="hover:scale-110 transition duration-300"
            >
              <FaLinkedin className="text-gray-700 hover:text-white transition duration-300" />
            </a>
          )}

          {data?.facebook && (
            <a
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit LinkedIn Page"
              className="hover:scale-110 transition duration-300"
            >
              <FaFacebook className="text-gray-700 hover:text-white transition duration-300" />
            </a>
          )}

          {data?.twitter && (
            <a
              href={data.twitter}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit LinkedIn Page"
              className="hover:scale-110 transition duration-300"
            >
              <FaXTwitter className="text-gray-700 hover:text-white transition duration-300" />
            </a>
          )}

          {data?.instagram && (
            <a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit LinkedIn Page"
              className="hover:scale-110 transition duration-300"
            >
              <FaInstagram className="text-gray-700 hover:text-white transition duration-300" />
            </a>
          )}

          {data?.youtube && (
            <a
              href={data.youtube}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit LinkedIn Page"
              className="hover:scale-110 transition duration-300"
            >
              <FaYoutube className="text-gray-700 hover:text-white transition duration-300" />
            </a>
          )}
        </motion.div>

        {/* Copyright Notice */}
        <motion.p
          className="mt-6 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          &copy; 2025 Budu Essence, Inc. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};
