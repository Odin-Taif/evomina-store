// Importing necessary components and hooks from packages and local files
import { FunctionComponent } from "react";
import Image from "next/image";
import Container from "../components/reusableComponents/Container";
import Heading from "../components/reusableComponents/Heading";

// Data array for the leadership team members
const people = [
  {
    name: "Mathias",
    role: "Co-Founder / CEO",
    imageUrl: "/assets/picmathias.webp",
  },
  {
    name: "Jasmin",
    role: "Business Manager",
    imageUrl: "/assets/picjasmin.webp",
  },
  {
    name: "Lukas",
    role: "Co-Founder / CTO",
    imageUrl: "/assets/piclukas.webp",
  },
  {
    name: "Mohamad",
    role: "Markting Manager",
    imageUrl: "/assets/mohammed.webp",
  },
  {
    name: "Odin",
    role: "Web Developer",
    imageUrl: "/assets/odin.webp",
  },
];

// Defining the OurHeros component as a functional component
const OurHeros: FunctionComponent = () => {
  // The component returns JSX to be rendered
  return (
    // Container component for consistent styling
    <Container>
      {/* Heading component to display the title */}
      <Heading title={"Meet our leadership"} center={true} />
      {/* Section for the team members, with responsive design using grid layout */}
      <section className="relative block py-10 px-6 md:px-10">
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mapping through the people array to create a card for each team member */}
          {people.map((person) => (
            <div key={person.name}>
              <div className="flex flex-col items-center gap-x-6 gap-y-6">
                {/* Div for the image with rounded border */}
                <div className="relative h-32 w-32 rounded-full border-4 border-teal-500 overflow-hidden">
                  <Image
                    src={person.imageUrl}
                    style={{
                      objectFit: "cover",
                      borderRadius: "rounded-full",
                    }}
                    fill
                    sizes="10vw"
                    alt="Profile Picture"
                  />
                </div>
                {/* Div for the text content */}
                <div className="flex flex-col">
                  <h3 className="content-center text-center text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Horizontal rule for visual separation */}
      <hr className="my-4" />
    </Container>
  );
};

// Exporting the component for use in other parts of the application
export default OurHeros;
