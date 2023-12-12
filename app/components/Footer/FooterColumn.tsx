// Ensuring that this module is executed on the client-side.
"use client";

// Importing motion from framer-motion for adding animations to the component.
import { motion } from "framer-motion";

// Importing Link from Next.js for client-side navigation.
import Link from "next/link";

// Defining the props type for this component.
type Props = {
  index: number; // Index of this footer column, used for determining animation direction.
  data: Array<any>; // Array of objects representing the links to be displayed in this column.
};

// Functional component for a footer column.
function FooterColumn({ index, data }: Props) {
  // Mapping over the data array to create Link components for each item.
  const columnItems = data.map((item, index) => (
    // Link component for client-side navigation.
    <Link
      className="m-2 text-gray-400 hover:text-black" // Applying styles to the Link (This is incorrect. Styles should be applied to an 'a' tag inside the Link).
      key={index} // Unique key for each item, required by React for rendering lists.
      href={item.href} // The URL to navigate to when the link is clicked.
    >
      {item.name}
    </Link>
  ));

  // Returning the JSX for the footer column.
  return (
    // motion.div for adding an animation to the footer column.
    <motion.div
      initial={{
        x: index % 2 === 0 ? -100 : 100, // Initial x position for the animation. Columns with even indices slide in from the left, odd indices from the right.
        opacity: 0, // The column starts out fully transparent.
      }}
      transition={{ duration: 1 }} // The animation takes 1 second to complete.
      whileInView={{ opacity: 1, x: 0 }} // The column fades in and slides to its final position when it comes into view.
      className="flex flex-col items-left" // Styling: a flex container, column layout, items aligned to the left.
    >
      {columnItems}
    </motion.div>
  );
}

// Exporting the FooterColumn component.
export default FooterColumn;
