"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { Bottle } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { FaBottleWater } from "react-icons/fa6";

const surveySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  heardAbout: z.string().min(2, "This field is required"),
  feedback: z.string().optional(),
  healthConcern: z.enum(["Rarely", "Sometimes", "Often", "Always"]),
  healthyLifestyleImportance: z.string(),
  wellnessChallenges: z.string().optional(),
  usesWellnessProducts: z.enum(["yes", "no"]),
});

export default function SurveyPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(surveySchema),
  });

  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  type MessageType = {
    type: "success" | "error";
    text: string;
  } | null;
  const [message, setMessage] = useState<MessageType>(null);
  const [followedInstagram, setFollowedInstagram] = useState(false);

  const handleInstagramClick = () => {
    setFollowedInstagram(true);
    window.open("https://www.instagram.com/buduessence", "_blank");
  };

  interface SurveyFormData {
    name: string;
    email: string;
    healthConcern: string;
    heardAbout: string;
    feedback?: string;
    healthyLifestyleImportance: string;
    wellnessChallenges?: string;
    usesWellnessProducts: string;
  }

  interface FormRef {
    reset: () => void;
  }

  const onSubmit = async (data: SurveyFormData) => {
    console.log("submitting", data);
    if (!followedInstagram) {
      alert("Please follow BuduEssence on Instagram to participate!");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Email sent successfully!" });
        if (form.current) (form.current as FormRef).reset();
        setIsModalOpen(true);
      } else {
        setMessage({ type: "error", text: "Failed to send email." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to send email." });
      console.log(error);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 4000);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden h-[80vh] lg:h-[100vh] md:h-[70vh] flex justify-center items-center flex-col"
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="absolute inset-0 w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/asset/image_fx_ (52).jpg"
                alt="BuduEssence Event"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 space-y-8">
          <motion.div
            className="md:max-w-[30rem] text-center max-w-[20rem] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Participate in our survey and stand a chance to win a refreshing
            bottle of BuduEssence!
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[8rem] font-bold text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="z-40 font-bold tracking-tighter bg-gradient-to-b from-[#969696] to-[#f8efa1] text-transparent bg-clip-text">
              Win a Bottle
            </span>
          </motion.h1>
        </div>
      </section>
      <div className="max-w-lg mx-auto p-6 bg-white">
        <h2 className="z-40 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold mt-6 tracking-tighter bg-gradient-to-b from-black to-[#f8efa1] text-transparent bg-clip-text">
          Win a Bottle of BuduEssence!
        </h2>
        <p className="mb-4">
          Complete the survey and follow us on Instagram to qualify.
        </p>
        <button
          onClick={handleInstagramClick}
          className="flex items-center justify-center gap-2 w-full bg-pink-600 text-white py-2 rounded-md mb-4"
        >
          <FaInstagram size={20} /> Follow BuduEssence on Instagram
        </button>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <label className="block font-medium">Name</label>
            <input
              {...register("name")}
              className="w-full p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              {...register("email")}
              className="w-full p-2 border rounded"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">
              How often do you worry about your health?
            </label>
            <select
              {...register("healthConcern")}
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="Rarely">Rarely</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Often">Often</option>
              <option value="Always">Always</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">
              How important is maintaining a healthy lifestyle to you?
            </label>
            <select
              {...register("healthyLifestyleImportance")}
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="Not important">Not important</option>
              <option value="Somewhat important">Somewhat important</option>
              <option value="Very important">Very important</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">
              What’s your biggest challenge in maintaining a healthy lifestyle?
            </label>
            <input
              {...register("wellnessChallenges")}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">
              Do you currently use any wellness or self-care products?
            </label>
            <select
              {...register("usesWellnessProducts")}
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">
              How did you hear about BuduEssence?
            </label>
            <input
              {...register("heardAbout")}
              className="w-full p-2 border rounded"
            />
            {errors.heardAbout && (
              <p className="text-red-500 text-sm">
                {errors.heardAbout.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium">
              Any feedback or suggestions?
            </label>
            <textarea
              {...register("feedback")}
              className="w-full p-2 border rounded"
              rows={3}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn text-white py-2 rounded disabled:opacity-80"
            disabled={!followedInstagram || loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center text-${message.type === "success" ? "green" : "red"}-500`}
          >
            {message.text}
          </p>
        )}
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <Confetti width={width} height={height} />
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              🎉 Congratulations! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center my-4">
            <FaBottleWater size={64} className="text-yellow-500" />
          </div>
          <p className="text-center">
            You have won a bottle of BuduEssence! 🎁
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
