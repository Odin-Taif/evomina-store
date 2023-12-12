"use client";
import Image from "next/image";
import React from "react";

type Props = {
  src: string | null | undefined;
  userName?: string | null | undefined;
};

// Avatar Component: Displays user's avatar based on provided image source.
function Avatar({ src, userName }: Props) {
  return (
    // Container div with padding, border, and rounded corners for the avatar image.
    <div className="p-1 border rounded-full hover:bg-teal-500">
      {src ? (
        // If image source is provided, display the image.
        <Image
          className="rounded-full" // Makes the image round.
          height="30" // Sets height of the image.
          width="30" // Sets width of the image.
          alt="hasImage" // Alternative text for the image.
          src={src} // Image source URL.
        />
      ) : (
        /* If no image source is provided, display a default avatar image. */
        <Image
          className="rounded-full" // Makes the image round.
          height="30" // Sets height of the image.
          width="30" // Sets width of the image.
          alt="noUser" // Alternative text for the image.
          src="/assets/avatar.png" // Default avatar image source URL.
        />
      )}
    </div>
  );
}

export default Avatar;