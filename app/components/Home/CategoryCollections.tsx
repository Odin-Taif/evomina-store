import Link from "next/link";
import React, { useState } from "react";

// "Accessories",
//     "Gift sets",
//     "Incense cones",
//     "Diffuser",
//     "Frankincense",
//     "Essential oil",
//     "Incense burners",
//     "Incense sticks",
export default function CategoryCollections() {
  return (
    <div className="flex justify-center items-center bg-amber-50">
      <div className="2xl:mx-auto 2xl:container py-6 w-full px-2 sm:px-2 xl:px-2 2xl:px-0">
        <div className="flex flex-col jusitfy-center items-center space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
            <div className="relative group flex justify-center items-center h-60 w-full">
              <img
                className="object-center object-cover h-full w-full"
                src="/accessories.webp"
                alt="girl-image"
              />
              <Link
                href={`/filters/Accessories`}
                className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
              >
                Accessories
              </Link>

              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>

            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
              <div className="relative group flex justify-center items-center h-40 w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="/gift-sets.webp"
                  alt="shoe-image"
                />
                <Link
                  href={`/filters/Gift sets`}
                  className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
                >
                  Gift sets
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>

              <div className="relative group flex justify-center items-center h-60 w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="/incense-cones.webp"
                  alt="watch-image"
                />
                <Link
                  href={`/filters/Incense cones`}
                  className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
                >
                  Incense cones
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>

            <div className="relative group justify-center items-center h-80 w-full hidden lg:flex">
              <img
                className="object-center object-cover h-full w-full"
                src="/diffuser.webp"
                alt="girl-image"
              />
              <Link
                href={`/filters/Diffuser`}
                className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
              >
                Diffuser
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>

            <div className="relative group flex justify-center items-center h-60 w-full mt-4 md:hidden md:mt-8 lg:hidden">
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src="/diffuser.webp"
                alt="girl-image"
              />
              <img
                className="object-center object-cover h-full w-full md:hidden"
                src="/diffuser.webp"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <Link
                href={`/filters/Diffuser`}
                className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
              >
                Diffuser
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>

          <div className="relative group hidden md:flex justify-center items-center h-40 w-full mt-4 md:mt-8 lg:hidden">
            <img
              className="object-center object-cover h-full w-full hidden md:block"
              src="/diffuser.webp"
              alt="girl-image"
            />
            <img
              className="object-center object-cover h-full w-full sm:hidden"
              src="/diffuser.webp"
              alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
            />
            <Link
              href={`/filters/Diffuser`}
              className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
            >
              Diffuser
            </Link>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
          </div>
        </div>
      </div>
      <div className="2xl:mx-auto 2xl:container py-6 px-2 sm:px-2 xl:px-2 2xl:px-0 w-full">
        <div className="flex flex-col jusitfy-center items-center space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
            <div className="relative group flex justify-center items-center h-60 w-full">
              <img
                className="object-center object-cover h-full w-full"
                src="/frankincense.webp"
                alt="girl-image"
              />
              <Link
                href={`/filters/Frankincense`}
                className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
              >
                Frankincense
              </Link>

              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>

            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
              <div className="relative group flex justify-center items-center h-40 w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="/essential-oil.webp"
                  alt="shoe-image"
                />
                <Link
                  href={`/filters/Essential oil`}
                  className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
                >
                  Essential oil
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>

              <div className="relative group flex justify-center items-center h-60 w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="/incense-burners.webp"
                  alt="watch-image"
                />
                <Link
                  href={`/filters/Incense burners`}
                  className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
                >
                  Incense burners
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>

            <div className="relative group justify-center items-center h-80 w-full hidden lg:flex">
              <img
                className="object-center object-cover h-full w-full"
                src="/incense-sticks.webp"
                alt="girl-image"
              />
              <Link
                href={`/filters/Incense sticks`}
                className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
              >
                Incense sticks
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>

            <div className="relative group flex justify-center items-center h-60 w-full mt-4 md:hidden md:mt-8 lg:hidden">
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src="/incense-sticks.webp"
                alt="girl-image"
              />
              <img
                className="object-center object-cover h-full w-full md:hidden"
                src="/incense-sticks.webp"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <Link
                href={`/filters/Incense sticks`}
                className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
              >
                Incense sticks
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>

          <div className="relative group hidden md:flex justify-center items-center h-40 w-full mt-4 md:mt-8 lg:hidden">
            <img
              className="object-center object-cover h-full w-full hidden md:block"
              src="/incense-sticks.webp"
              alt="girl-image"
            />
            <img
              className="object-center object-cover h-full w-full sm:hidden"
              src="/incense-sticks.webp"
              alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
            />
            <Link
              href={`/filters/Incense sticks`}
              className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center"
            >
              Incense sticks
            </Link>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
