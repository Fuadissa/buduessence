"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={twMerge(
        "top-0 z-50 bg-transparent w-full py-4 px-6 md:px-10 lg:px-28 text-black transition-colors duration-500 fixed",
        isScrolled ? "backdrop-blur-sm" : "",
        isOpen ? "backdrop-blur-sm" : ""
      )}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="w-full flex justify-between items-center">
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
        <nav
          className={twMerge(
            `hidden lg:flex space-x-4 md:gap-4 lg:gap-8 transition-colors duration-500`
          )}
        >
          <div className="flex justify-center items-center text-[#cabb89] font-sans">
            About Us
          </div>
          <div className="flex justify-center items-center text-[#cabb89] font-sans">
            Our Services
          </div>
          <div className="flex justify-center items-center text-[#cabb89] font-sans">
            Our Products
          </div>
          <div className="flex justify-center items-center text-[#cabb89] font-sans">
            Case Study
          </div>
          <div className="flex justify-center items-center text-[#cabb89] font-sans">
            Contact Us
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#dabd5f] text-white px-4 py-2 rounded-md">
              Join the Movement
            </button>
          </div>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={twMerge(
            `feather feather-menu lg:hidden transition-colors duration-500 text-[#dabd5f] cursor-pointer`
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
            className={twMerge(
              "origin-left transition",
              isOpen && "rotate-45 -translate-y-1"
            )}
          ></line>
          <line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            className={twMerge("transition", isOpen && "opacity-0")}
          ></line>
          <line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
            className={twMerge(
              "origin-left transition",
              isOpen && "-rotate-45 translate-y-1"
            )}
          ></line>
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full flex flex-col items-center space-y-4 py-4 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex justify-center items-center text-[#cabb89] font-sans">
              About Us
            </div>
            <div className="flex justify-center items-center text-[#cabb89] font-sans">
              Our Services
            </div>
            <div className="flex justify-center items-center text-[#cabb89] font-sans">
              Our Products
            </div>
            <div className="flex justify-center items-center text-[#cabb89] font-sans">
              Case Study
            </div>
            <div className="flex justify-center items-center text-[#cabb89] font-sans">
              Contact Us
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-[#dabd5f] text-white px-4 py-2 rounded-md">
                Join the Movement
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
