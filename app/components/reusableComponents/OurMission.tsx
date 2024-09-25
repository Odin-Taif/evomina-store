// Importing necessary components and hooks from packages and local files

import Image from "next/image";
import { FunctionComponent } from "react";
import Container from "./Container";
import Heading from "./Heading";
import Link from "next/link";

// Defining the OurMission component as a functional component
const OurMission: FunctionComponent = () => {
  // The component returns JSX to be rendered
  return (
    // Container component for consistent styling
    <Container>
      <section className="grid grid-cols-4 mx-auto h-fit gap-3">
        {/* Div for the text content with styling and responsive design */}
        <div className="md:col-span-3 col-span-4 rounded-md text-black text-left justify-start items-start">
          <Heading title={"Our Mission"} center={false} />
          <p className="mb-10 leading-relaxed tracking-wide">
            At Levantisk, we are dedicated to reintroducing the essence of
            nature and its captivating aromas into your daily life. Harnessing
            the diverse treasures of our natural world, we aim to awaken your
            senses and evoke emotions through our unique blends. Our mission is
            to unlock the healing powers of nature, enriching your daily
            experience with its therapeutic benefits.
          </p>

          <Link
            href="/aboutus"
            className="relative group flex items-center h-10 w-full"
          >
            {/* Dynamically link to the item's category */}
            <span className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center">
              Explore more
            </span>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-gray-200 bg-opacity-50" />
          </Link>
        </div>

        {/* Div for the image with responsive sizing */}
        <div className="hidden sm:block md:col-span-1 relative h-60">
          <Image
            src="/ourmission.png" // Image source
            fill // Use fill to make the image cover the div
            style={{ objectFit: "contain" }} // Ensure the image covers the div without distortion
            alt="About Us Image" // Alt text for accessibility
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizing
          />
        </div>
      </section>
      <hr className="my-4" />
    </Container>
  );
};

export default OurMission;
