import React from "react";

export default function NewsLetter() {
  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="bg-gradient-to-r from-red-100 to-yellow-200 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full px-4 flex flex-col items-center justify-center relative z-40">
        <h1 className="text-4xl font-semibold leading-9 text-black text-center">
          Don’t miss out!
        </h1>
        <p className="text-base leading-normal text-center text-black mt-6">
          Be the first to know about the latest news, products and trends.
        </p>
        <div className="sm:border border-black flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
          <input
            className="border border-black sm:border-transparent text-base w-full font-medium leading-none text-black p-4 focus:outline-none bg-transparent placeholder-black"
            placeholder="Email Address"
          />
          <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-black sm:border-transparent w-full sm:w-auto bg-black text-white py-4 px-6 hover:bg-opacity-75">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
