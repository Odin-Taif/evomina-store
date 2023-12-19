// Importing necessary components and hooks from packages and local files

import Image from "next/image";
import { FunctionComponent } from "react";
import Heading from "../components/reusableComponents/Heading";

// Defining the OurMission component as a functional component
const AboutEvomina: FunctionComponent = () => {
  // The component returns JSX to be rendered
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-4 px-3 py-10 bg-amber-50">
      <div className="grid grid-cols-4 mx-auto">
        {/* Div for the text content with styling and responsive design */}

        {/* Div for the image with responsive sizing */}
        <div className="relative md:col-span-1 col-span-4 h-80">
          <Image
            src="/aboutUs.svg" // Image source
            fill // Use fill to make the image cover the div
            style={{ objectFit: "contain" }} // Ensure the image covers the div without distortion
            alt="About Us Image" // Alt text for accessibility
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizing
          />
        </div>
        <div className="md:col-span-3 col-span-4 rounded-md text-black text-left">
          <Heading title={"About Evomina"} center={false} />
          <p className="my-4 mb-0 leading-relaxed tracking-wide">
            The combination of fragrances from all over the world makes Evomina
            a very special place. From delicate, seductive scents to tangy,
            strong aromas, there&apos;s so much to discover in our product
            range. We are all about the magic of scent. Our journey began at the
            Christmas market in Mondsee and eventually led us to a second stand
            in Vienna. While we are continuously expanding our business, we are
            proud to stay true to our original promise: to offer high-quality
            products made from natural plants, minerals and oils. We firmly
            believe that what is good for you must also be good for our beloved
            earth. In our diverse collection, you&apos;ll find not only
            fragrances, but also a story. Each fragrance tells its own story and
            connects you to the faraway places it comes from. The World of Scent
            is not just about products, it&apos;s a journey for the senses. We
            invite you to experience this journey with us and discover the world
            of scent in a very special way. Immerse yourself in our world and
            let yourself be enchanted by the fascinating flavors and fragrances.
            We are proud to accompany you on this beautiful journey of scents
            and look forward to introducing you to the uniqueness and diversity
            of fragrances from around the world. <br />
            Welcome to Evomina!
          </p>
        </div>
      </div>
      {/* Horizontal rule for visual separation */}
      <hr className="my-4" />
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default AboutEvomina;
