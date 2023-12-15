import Container from "./components/container/Container";
import MiniDrawer from "./components/container/FilterSearchDrawer";
import NewsletterForm from "./components/newsLetter/NewsLetterForm";
import ContactSection from "./components/reusableComponents/ContactSection";
import OurMission from "./components/reusableComponents/OurMission";

export default async function Home() {
  return (
    <>
      <div className="px-5 max-w-[1280px] mx-auto">
        <Container />
        <ContactSection />
        <OurMission />
        <NewsletterForm
          status={undefined}
          message={undefined}
          onValidated={undefined}
        />
      </div>
    </>
  );
}
