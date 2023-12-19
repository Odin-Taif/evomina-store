// Importing the required modules from external libraries
"use client";
import { motion } from "framer-motion"; // For animating the component
import PrivacyPolicySection from "./privacy&policySection"; // Component that displays the privacy policy content
import Container from "../components/reusableComponents/Container";

// Defining the animation for sliding in the component
const slideIn = {
  initial: { x: "-100%", opacity: 0 }, // Start position: Component is fully to the left and invisible
  animate: { x: "0%", opacity: 1 }, // End position: Component is in its normal position and fully visible
  exit: { x: "100%", opacity: 0 }, // Exit position: Component moves to the right and becomes invisible
};

// Defining the transition for the animation
const transition = {
  duration: 1, // Animation will take 1 second to complete
  ease: "easeOut", // Easing function to make the animation smooth
};

// Functional component for the Terms and Conditions page
const TermsAndConditions = () => {
  return (
    // Using the reusable Container component to wrap the content
    <Container>
      {/* Applying the slideIn animation to the content */}
      <motion.div
        variants={slideIn}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        {/* Including the Privacy Policy content component */}
        <PrivacyPolicySection />
      </motion.div>

      {/* Horizontal rule to separate content */}
      <hr />
    </Container>
  );
};

// Exporting the component to be used in other parts of the application
export default TermsAndConditions;
