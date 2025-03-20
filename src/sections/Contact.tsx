"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Email sent successfully!" });
        form.current.reset();
      } else {
        setMessage({ type: "error", text: "Failed to send email." });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage({ type: "error", text: "Failed to send email." });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 4000);
    }
  };

  return (
    <motion.section
      id="contactus"
      className="lg:py-24 py-12 px-5 md:px-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="text-center">
          <h5 className="text-lg text-gray-500">Get In Touch</h5>
          <motion.div
            className="flex justify-center mt-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight bg-gradient-to-b from-black to-[#f8efa1] text-transparent bg-clip-text">
              Contact Us
            </div>
          </motion.div>
        </div>

        <motion.div
          className="lg:mx-[300px] md:mx-[150px] mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 lg:p-8 rounded-lg"
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full p-4 rounded-md border text-black border-gray-300 focus:ring focus:ring-blue-300"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-md border border-gray-300 text-black focus:ring focus:ring-blue-300"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={7}
              required
              className="w-full p-4 rounded-md border text-black border-gray-300 focus:ring focus:ring-blue-300 resize-none"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="btn py-3 px-6 rounded-md text-white hover:bg-blue-600 transition"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          {message && (
            <motion.div
              className={`mt-2 px-4 py-2 rounded-md text-center ${
                message.type === "success" ? "text-green-500" : "text-red-500"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {message.text}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};
