// Importing necessary libraries and components
"use client"; // Ensuring the module is only executed on the client side

import React from "react"; // Importing React for component creation
import FooterColumn from "./FooterColumn"; // Importing FooterColumn component to display columnar data in the footer
import Link from "next/link";
import Image from "next/image";

// Defining the Props type for the Footer component (currently empty as no props are used)
type Props = {};

// Defining the Footer component
function Footer({}: Props) {
  // Defining the data to be displayed in the footer columns
  const itemData = [
    [
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "Impressum", href: "/Impressum" },
      { name: "FAQ", href: "/FAQ" },
      { name: "AGB", href: "/agb" },
    ],
    [
      { name: "Home", href: "/" },
      { name: "Contact", href: "/contact" },
      { name: "About Us", href: "/aboutus" },
      { name: "Blog", href: "/blog" },
    ],
  ];

  // Mapping over itemData to create an array of FooterColumn components
  const footerColumns = itemData.map((item, index) => (
    <FooterColumn index={index} data={item} key={index} />
  ));

  // Rendering the footer with its contents
  return (
    <>
      {/* Main container for the footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 px-20 py-14 bg-gray-100 text-gray-600">
        {footerColumns} {/* Injecting the footer columns */}
        <div className=" text-gray-400">
          <Link href={"/"}>
            {/* The Image component from Next.js is used here to optimize image loading.
          'alt' attribute is provided for accessibility,
          and 'className' is used to apply TailwindCSS styles. */}
            <Image
              alt="logo"
              className="md:block cursor-pointer w-auto h-auto"
              height="60"
              width="60"
              sizes="70px"
              src="/evomina.webp"
            />
          </Link>
          Evomina - World of Scent. <br />
          Rainerstraße 2 5310 Mondsee, Austria
        </div>
      </div>

      {/* Horizontal rule to separate the main content of the footer from the copyright information */}
      <hr className="border-gray-200" />
      {/* Container for the copyright information */}
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm font-semibold py-1 text-gray-400">
            {/* Displaying the current year and the copyright text */}
            Copyright © {new Date().getFullYear()} | Evomina
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
