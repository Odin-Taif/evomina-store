// "use client";
import { useContext, useEffect } from "react";
import AboutEvomina from "./aboutus/AboutEvomina";
import Banner from "./components/Home/Banner";
import CategoryCollections from "./components/Home/CategoryCollections";
import NewsLetter from "./components/Home/NewLetter";
import ContactSection from "./components/reusableComponents/ContactSection";
import OurMission from "./components/reusableComponents/OurMission";
import { WixClientContext } from "./context/wixcontext";
import { wixClientServer } from "./lib/wixClientServer";

export default async function Home() {
  // const wixClient = useContext(WixClientContext);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };

  //   getProducts();
  // }, [wixClient]);
  // server fetching
  const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  const cats = await wixClient.collections.queryCollections().find();
  // console.log(res.items);

  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Banner />
        <CategoryCollections />
        {/* <hr className="my-4" />
        <OurMission />
        <AboutEvomina />
        <ContactSection />
        <NewsLetter /> */}
      </div>
    </>
  );
}
