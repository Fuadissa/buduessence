"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

const StyledSection = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#fffde8",
  background:
    "radial-gradient(ellipse 200% 100% at bottom left, #f8efa1, #fffde8 100%)",
}));

const MotionContainer = motion(Container);
const MotionTextField = motion(TextField);
const MotionSelect = motion(Select);
const MotionButton = motion(Button);

export const Calories = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    activity: "moderate",
  });
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (result) {
      setShowResult(true);
      const timer = setTimeout(() => {
        setShowResult(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [result]);

  const calculateCalories = () => {
    const { weight, height, age, gender, activity } = formData;
    let bmr = 0;

    if (gender === "male") {
      bmr =
        88.362 +
        13.397 * Number(weight) +
        4.799 * Number(height) -
        5.677 * Number(age);
    } else {
      bmr =
        447.593 +
        9.247 * Number(weight) +
        3.098 * Number(height) -
        4.33 * Number(age);
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const calories =
      bmr * activityMultipliers[activity as keyof typeof activityMultipliers];
    setResult(Math.round(calories));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  const ref = useRef(null);

  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <StyledSection ref={ref}>
      <MotionContainer
        maxWidth="sm"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            className="z-40 text-3xl md:text-4xl font-bold mt-6 tracking-tighter bg-gradient-to-b from-black to-[#f8efa1] text-transparent bg-clip-text"
            mb={4}
          >
            Calories Calculator
          </Typography>
        </motion.div>
        <Box component="form" display="flex" flexDirection="column" gap={3}>
          <MotionTextField
            variants={itemVariants}
            label="Weight (kg)"
            type="number"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
          />
          <MotionTextField
            variants={itemVariants}
            label="Height (cm)"
            type="number"
            value={formData.height}
            onChange={(e) =>
              setFormData({ ...formData, height: e.target.value })
            }
          />
          <MotionTextField
            variants={itemVariants}
            label="Age"
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <MotionSelect
            variants={itemVariants}
            value={formData.gender}
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value as "male" | "female",
              })
            }
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </MotionSelect>
          <MotionSelect
            variants={itemVariants}
            value={formData.activity}
            onChange={(e) =>
              setFormData({ ...formData, activity: e.target.value as string })
            }
          >
            <MenuItem value="sedentary">
              Sedentary (little or no exercise)
            </MenuItem>
            <MenuItem value="light">Light (exercise 1-3 times/week)</MenuItem>
            <MenuItem value="moderate">
              Moderate (exercise 3-5 times/week)
            </MenuItem>
            <MenuItem value="active">Active (exercise 6-7 times/week)</MenuItem>
            <MenuItem value="veryActive">
              Very Active (hard exercise daily)
            </MenuItem>
          </MotionSelect>
          <MotionButton
            variants={itemVariants}
            variant="contained"
            onClick={calculateCalories}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            sx={{
              mt: 2,
              py: 2,
              borderRadius: "5px",
              backgroundColor: "#af912d",
              "&:hover": {
                backgroundColor: "#ebcc65",
              },
            }}
          >
            Calculate
          </MotionButton>
          <AnimatePresence>
            {showResult && result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h5" textAlign="center" mt={3}>
                  Your daily calorie needs: {result} calories
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </MotionContainer>
    </StyledSection>
  );
};
