import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

const Banner = () => {
  return (
    <div className="mx-auto bg-gray-100 sm:hidden">
      <div className="flex w-full py-2 md:py-2 px-2 justify-center">
        <h4 className="text-sm md:text-md font-semibold text-gray-800">
          From <span className="font-bold text-red-300">50€</span> free shipping
          in Sweden and <span className="font-bold text-red-300">150€</span>{" "}
          free shipping EU-wide
        </h4>
        <span className="px-2 bg-gray-100 inline-block rounded-full">
          <LiaShippingFastSolid size={30} />
        </span>
      </div>
    </div>
  );
};

export default Banner;
