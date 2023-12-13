// Importing necessary components and hooks from packages and local files

import Image from "next/image";
import { FunctionComponent } from "react";
import Container from "../components/reusableComponents/Container";
import Heading from "../components/reusableComponents/Heading";

// Defining the OurMission component as a functional component
const OurHistory: FunctionComponent = () => {
  // The component returns JSX to be rendered
  return (
    <Container>
      <div className="grid grid-cols-4 mx-auto">
        {/* Div for the text content with styling and responsive design */}

        <div className="md:col-span-3 col-span-4 rounded-md text-black text-left">
          <Heading title={"The history of the foundation"} center={false} />
          <p className="my-4 mb-0 leading-relaxed tracking-wide">
            It all started during my school years, when I was allowed to
            represent my mum at the Christmas market in Mondsee. When I moved to
            Vienna for my studies in 2018, I ran a stand at the Christmas market
            at Hof together with my brother and a friend. After a year of ups
            and downs, I always had a bigger vision in mind and wanted to create
            my own brand. After a few bumpy years marked by the pandemic, I
            didn&apost give up but took the chance. In 2021 I created my first
            online shop and in 2022 I was able to realise a big dream and found
            my own brand &quotEvomina&quot. This name is made up of the Greek
            word Evodia and my middle name Tamina. Why Greek? My grandmother
            lived in Greece for a long time and she was always an inspiration to
            me. So I always have her by my side when I work on Evomina.
            Evomina&aposs mission is simple: we strive to keep our customers
            happy and healthy in the midst of hectic modern life. To do this, we
            offer fragrance profiles that promote grounding and well-being.
          </p>
        </div>
        <div className="relative md:col-span-1 col-span-4 h-80">
          <Image
            src="/historyLara.svg" // Image source
            fill // Use fill to make the image cover the div
            style={{ objectFit: "contain" }} // Ensure the image covers the div without distortion
            alt="About Us Image" // Alt text for accessibility
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizing
          />
        </div>
      </div>
      {/* Horizontal rule for visual separation */}
      <hr className="my-4" />
    </Container>
  );
};

// Exporting the component for use in other parts of the application
export default OurHistory;
