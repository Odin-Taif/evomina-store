"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "../Filter";
// import { useParams, useSearchParams } from "next/navigation";
import ResponsiveDrawer from "@/app/components/container/FilterSearchDrawer";
import OurMission from "@/app/components/reusableComponents/OurMission";
import ContactSection from "@/app/components/reusableComponents/ContactSection";
import NewsLetter from "@/app/components/Home/NewLetter";
import FilteredItems from "../filteredItems";

// Define a type for the expected API response
interface ApiResponse {
  products: any[]; // Update 'any' with the actual type of your products array
  // Add other properties if needed
}

const Page = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = params.slug
    ? decodeURIComponent(params.slug as string)
    : "";
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    decodedSlug,
  ]);
  const [response, setResponse] = useState<ApiResponse>({ products: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [price, setPrice] = useState({
    min: 0,
    max: 1000,
  });
  const allCategories = [
    "All Products",
    "Accessories",
    "Gift sets",
    "Incense cones",
    "Diffuser",
    "Frankincense",
    "Essential oil",
    "Incense burners",
    "Other",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/filterproduct", {
          params: {
            categories:
              selectedCategories[0] === "All Products"
                ? allCategories
                : selectedCategories,
            price: {
              min: price.min,
              max: price.max,
            },
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        setResponse(response.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategories, price]);

  return (
    <>
      <div className="md:hidden">
        <ResponsiveDrawer
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          price={price}
          setPrice={setPrice}
        />
      </div>
      <div className="px-5 max-w-[1280px] mx-auto">
        <div className="flex">
          <div className="md:w-[250px] border-l-[0.5px] border-r-[0.5px] w-0 max-md:invisible">
            <Filter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              price={price}
              setPrice={setPrice}
            />
          </div>
          <div className="mx-auto px-auto md:px-4">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-5">
              {loading ? (
                <div>loaindg...</div>
              ) : response &&
                response.products &&
                response.products.length > 0 ? (
                <FilteredItems products={response.products} />
              ) : (
                <div className="mx-auto px-auto md:px-4">
                  <img src="/noproduct.webp" alt="No Products Found" />
                  <span className="items-center"> No Products Found</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <OurMission />
      <ContactSection />
      <NewsLetter />
    </>
  );
};

export default Page;
