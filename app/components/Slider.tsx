"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "",
    description: "",
    img: "/levantiskgif.gif",
    url: "/",
    bg: "bg-gradient-to-r from-red-100 to-yellow-200",
  },
  {
    id: 2,
    title: "",
    description: "People disapoints, pizza is eternal.",
    img: "/",
    url: "/",
    bg: "bg-gradient-to-r from-red-100 to-yellow-200",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  // client components
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(30vh-40px)] overflow-hidden ">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div className={`${slide.bg} w-screen h-full flex`} key={slide.id}>
            {/* IMAGE CONTAINER */}
            <div className="hidden md:flex flex-col w-1/3 h-full relative">
              <Image
                src={slide.img}
                alt="Levantisk GIF"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain select-none"
              />
            </div>
            <div className="flex flex-col h-full p-4 m-2 justify-center items-left">
              <div className="text-left">
                <h1 className="text-xl text-red-700 md:text-4xl font-bold">
                  Off 20% Collections
                </h1>
              </div>
              <Link href={slide.url}>
                <button className="my-4 px-6 py-3 bg-amber-300 hover:bg-amber-400 text-black rounded">
                  Order Online Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="relative m-auto left-1/2 bottom-10 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-4 h-4  rounded-full ring-1 ring-orange-200 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
