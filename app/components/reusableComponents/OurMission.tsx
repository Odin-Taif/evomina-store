// Importing necessary components and hooks from packages and local files

import Image from "next/image";
import { FunctionComponent, MouseEvent } from "react";
import Container from "./Container";
import Heading from "./Heading";
import Button from "./Button";
import Link from "next/link";

// Defining the OurMission component as a functional component
const OurMission: FunctionComponent = () => {
  // The component returns JSX to be rendered
  return (
    // Container component for consistent styling
    <Container>
      {/* Heading component to display the title */}
      {/* Section for the main content, with responsive design using flexbox */}
      <section className="grid grid-cols-4 mx-auto h-fit gap-3">
        {/* Div for the text content with styling and responsive design */}
        <div className="md:col-span-3 col-span-4 rounded-md text-black text-left">
          <Heading title={"Our Mission"} center={false} />
          <p className="my-5 mb-10 leading-relaxed tracking-wide">
            We want to bring the power of nature and the wonderful aromas back
            into everyone&apos;s everyday life. Scents have the unique ability
            to awaken our senses and trigger emotions in us. At the same time,
            our nature is inexhaustible in its diversity and offers numerous
            treasures that we want to use. Our goal is to tap into the healing
            powers of nature and support you in your daily life with them.
          </p>
        </div>

        <div className="relative md:col-span-1 col-span-4 h-80">
          <Image
            src="/homeLara.svg" // Image source
            fill // Use fill to make the image cover the div
            style={{ objectFit: "contain" }} // Ensure the image covers the div without distortion
            alt="About Us Image" // Alt text for accessibility
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizing
          />
        </div>
        {/* Div for the image with responsive sizing */}
      </section>
      {/* Horizontal rule for visual separation */}
      <span className="bg-amber-400 p-3 rounded hover:cursor-pointer hover:bg-amber-500 text-white">
        <Link href="/">Find out more</Link>
      </span>
      <hr className="my-4" />
    </Container>
  );
};

// Exporting the component for use in other parts of the application
export default OurMission;
