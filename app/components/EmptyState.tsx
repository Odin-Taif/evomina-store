// Using client-side rendering only
"use client";

// Importing necessary libraries and components
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "./reusableComponents/Button";
import Heading from "./reusableComponents/Heading";

import { BiLogIn } from "react-icons/bi";
import Container from "./reusableComponents/Container";
import useLoginModel from "../hook/useLoginModal";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

function EmptyState({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}: Props) {
  const router = useRouter(); // Using Next.js hook for routing
  const loginModel = useLoginModel(); // Custom hook for login modal state

  return (
    // Component wrapper with fade-in animation
    <motion.div
      initial={{ opacity: 0.1 }} // Start with a lower opacity
      whileInView={{ opacity: 1 }} // Fade to full opacity when in view
      viewport={{ once: true }} // Ensure this animation only happens once
      className="h-[60vh] flex flex-col gap-2 justify-center items-center" // Styling for centering content
    >
      <Heading center title={title} subtitle={subtitle} />{" "}
      {/* Heading component with title and subtitle */}
      <Container>
        {" "}
        {/* Container for the button */}
        {showReset && ( // Conditional rendering of the login button
          <Button
            label="Log in" // Button label
            onClick={loginModel.onOpen} // Function to open login modal
            widthFull={false} // Button does not take full width
            icon={BiLogIn} // Login icon
          />
        )}
      </Container>
    </motion.div>
  );
}

export default EmptyState;
