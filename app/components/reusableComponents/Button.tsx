// Client-only directive for Next.js.
"use client";

// Importing necessary React and external libraries.
import React from "react";
import { IconType } from "react-icons";
import { MoonLoader } from "react-spinners";

// Defining the types for the component's props.
type Props = {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  isColor?: boolean;
  widthFull?: boolean;
  loading?: boolean;
};

// Functional component to render a button with various styling options.
function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  widthFull,
  icon: Icon,
  isColor,
  loading,
}: Props) {
  // Rendering the button element.
  return (
    // Applying conditional styling classes based on the passed props.
    <button
      // Disabling the button if the 'disabled' prop is true.
      disabled={disabled}
      // Calling the 'onClick' function when the button is clicked.
      onClick={onClick}
      // Tailwind CSS classes for styling.
      className={`inline-flex items-center relative disabled:opacity-70 px-2 mx-1 disabled:cursor-not-allowed rounded hover:opacity-80 transition ${
        outline ? "bg-white" : "bg-amber-400"
      }
      ${widthFull ? "w-full" : "w-auto"} ${
        outline ? "border-black" : "border-amber-400"
      }
      ${outline ? "text-black" : "text-white"} ${small ? "text-sm" : "text-md"}
      ${small ? "py-1" : "py-2"} ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}`}
    >
      {Icon && (
        // Rendering the icon if it is provided, with optional color styling.
        <Icon
          size={20}
          className={`left-4 top-3 mr-2 ${isColor && "text-blue-600"}`}
        />
      )}
      {/* Displaying the button's label. */}
      <span>{label}</span>
      {loading && (
        // Displaying a loading spinner if the 'loading' prop is true.
        <MoonLoader
          color="#000000" // Setting the color of the loading spinner.
          size={15} // Setting the size of the loading spinner.
          loading={loading} // Activating the loading state.
          cssOverride={{ marginLeft: "10px" }} // Adding additional CSS styling.
        />
      )}
    </button>
  );
}

// Exporting the component to be used in other parts of the application.
export default Button;
