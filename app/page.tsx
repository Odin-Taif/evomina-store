import Image from "next/image";
import { getCurrentUser } from "./lib/session";
import Container from "./components/container/Container";
import Footer from "./components/Footer/Footer";
import ContactSection from "./components/reusableComponents/ContactSection";

export default async function Home() {
  const user = await getCurrentUser();
  // console.log(user)
  return (
    <>
      <div className="px-5 max-w-[1280px] mx-auto">
        <hr />
        <Container />
        <ContactSection />
      </div>

      <Footer />
    </>
  );
}
