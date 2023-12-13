// Importing the necessary React components and custom components
import AboutEvomina from "./AboutEvomina";

import OurValues from "./OurValues";

// The Aboutus component, exported as the default component of this module
export default async function Aboutus() {
  // The component returns a div element containing three custom components:
  // OurMission, OurGoals, and OurHeros.
  return (
    // The outer div has a margin-top and margin-bottom set to 2.5rem (40px if the root font-size is 16px)
    <div className="my-10">
      {/* The OurMission component is rendered first. */}
      <AboutEvomina />
      {/* The OurGoals component is rendered next. */}
      <OurValues />
      {/* The OurHeros component is rendered last. */}
      {/* <OurHeros /> */}
    </div>
  );
}
