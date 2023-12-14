import Container from "./components/container/Container";
import ContactSection from "./components/reusableComponents/ContactSection";
import OurMission from "./components/reusableComponents/OurMission";

export default async function Home() {
  return (
    <>
      <div className="px-5 max-w-[1280px] mx-auto">
        <Container />
        <OurMission />
        <ContactSection />
      </div>
    </>
  );
}
