"use client";
import React from "react";
import Imprint from "./imprintSection"; // Importing the Imprint section component

import { motion } from "framer-motion"; // Importing the motion component for animations
import Container from "../components/reusableComponents/Container";

const slideIn = {
  initial: { x: "-100%", opacity: 0 }, // Start position for slide-in animation
  animate: { x: "0%", opacity: 1 }, // End position for slide-in animation
  exit: { x: "100%", opacity: 0 }, // Exit position for slide-out animation
};

const transition = {
  duration: 1, // Duration of the animation in seconds
  ease: "easeOut", // Easing function for the animation
};

function Page() {
  return (
    <Container>
      <motion.div
        variants={slideIn}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        <Imprint />
      </motion.div>
    </Container>
  );
}

export default Page;
