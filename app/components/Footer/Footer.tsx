// Importing necessary libraries and components
"use client"; // Ensuring the module is only executed on the client side

import React from "react"; // Importing React for component creation
import FooterColumn from "./FooterColumn"; // Importing FooterColumn component to display columnar data in the footer

// Defining the Props type for the Footer component (currently empty as no props are used)
type Props = {};

// Defining the Footer component
function Footer({}: Props) {
  // Defining the data to be displayed in the footer columns
  const itemData = [
    [
      { name: "About Us", href: "/aboutus" },
      { name: "Terms and Conditions", href: "/terms&conditions" },
      { name: "Privacy Policy", href: "/privacy&policy" },
      { name: "Imprint", href: "/imprint" },
      { name: "Contact", href: "/contact" },
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
      <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 px-20 py-14 bg-gray-100 text-gray-600">
        {footerColumns} {/* Injecting the footer columns */}
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
