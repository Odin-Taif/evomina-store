// Importing necessary React hooks and components for the section

import Container from "./Container";
import Heading from "./Heading";
import SocialMediaBar from "./SocialMediaBar";

// Defining the main functional component for the Contact section
export default function Contact() {
  // Setting up form handling using react-hook-form

  // JSX rendering for the Contact section
  return (
    <Container>
      <div className="flex flex-col items-center justify-center pt-10">
        <Heading
          title={"Contact Evomina"}
          subtitle={
            "Have something to say? We are here to help. Send an email or make a phone call."
          }
          center={true}
        />
        <SocialMediaBar />
      </div>
      <hr className="my-4" />
    </Container>
  );
}
