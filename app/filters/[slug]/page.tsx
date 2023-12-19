"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Filter from "../Filter";
// import { useParams, useSearchParams } from "next/navigation";
import ResponsiveDrawer from "@/app/components/container/FilterSearchDrawer";
import AddCart from "@/app/components/AddCart";
import OurMission from "@/app/components/reusableComponents/OurMission";
import ContactSection from "@/app/components/reusableComponents/ContactSection";
import NewsLetter from "@/app/components/Home/NewLetter";

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
    const fetchdata = async () => {
      try {
        const response = await axios
          .get("/api/filterproduct", {
            params: {
              categories:
                selectedCategories[0] == "All Products"
                  ? allCategories
                  : selectedCategories,
            },
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // console.log("response", response.data);
            setResponse(response.data);
          });
        // console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchdata();
  }, [selectedCategories]);

  return (
    <>
      <div className="px-5 max-w-[1280px] mx-auto">
        <div className="md:hidden">
          <ResponsiveDrawer
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <hr />
        <div className="flex">
          <div className="md:w-[250px] border-l-[0.5px] border-r-[0.5px] w-0 max-md:invisible">
            <Filter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
          <div className="mx-auto px-auto md:px-4">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-5">
              {response && response.products && response.products.length > 0 ? (
                response.products.map((product: any) => (
                  <div key={product.id}>
                    <Link href={`/dashboard/${product.id}`}>
                      <div className="relative rounded-lg border border-amber-300 ">
                        <img
                          src={product.images.split(",")[0]}
                          className="w-[200px] h-[200px] object-cover object-top rounded-lg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col items-left justify-between px-2 mt-2">
                        <div>
                          <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                            {product.title}
                          </h1>
                          <p className="text-[13px] opacity-60">
                            {product.store}
                          </p>
                        </div>
                        <span className="font-medium w-fit px-2 bg-gray-100 rounded-lg">
                          ${product.price}.00
                        </span>
                      </div>
                    </Link>
                    <div className="relative">
                      <span className="absolute bottom-0 right-0 w-fit">
                        <AddCart productId={product.id} />
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found</p>
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
