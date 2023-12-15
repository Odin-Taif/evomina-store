// Using client-side rendering only
"use client";

// Importing the framer-motion library for animations
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode; // Expecting children components to be passed as props
};

function ClientOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = useState(false); // State to check if component has mounted

  useEffect(() => {
    setHasMounted(true); // Setting state to true when component mounts
  }, []); // Empty dependency array means this effect runs once after initial render

  if (!hasMounted) {
    return null; // If component hasn't mounted, return null (nothing is rendered)
  }

  return (
    // Once the component has mounted, render children with a fade-in animation
    <motion.div
      initial={{ opacity: 0 }} // Start with an opacity of 0
      whileInView={{ opacity: 1 }} // Fade to opacity 1 when in view
      viewport={{ once: true }} // Ensure this animation only happens once
    >
      {children} {/* Rendering children components */}
    </motion.div>
  );
}

export default ClientOnly;