import Banner from "./components/Home/Banner";
import CategoryCollections from "./components/Home/CategoryCollections";
import Header from "./components/Home/Header";
import NewsLetter from "./components/Home/NewLetter";
import ContactSection from "./components/reusableComponents/ContactSection";
import OurMission from "./components/reusableComponents/OurMission";

export default async function Home() {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <div className="max-w-[1280px] mx-auto">
        <CategoryCollections />
        <hr className="my-4" />
        <OurMission />
        <ContactSection />
        <NewsLetter />
      </div>
    </>
  );
}
