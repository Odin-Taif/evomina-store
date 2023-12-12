import Image from "next/image";
import Link from "next/link";

type Props = {};
function Logo({}: Props) {
  // This component renders the logo of the website, which is wrapped in a Link component
  // to make it clickable and redirect the user to the home page when clicked.
  return (
    <Link href={"/"}>
      {/* The Image component from Next.js is used here to optimize image loading.
          'alt' attribute is provided for accessibility,
          and 'className' is used to apply TailwindCSS styles. */}
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer w-auto h-auto"
        height="60"
        width="60"
        sizes="70px"
        src="/evomina.webp"
      />
    </Link>
  );
}

export default Logo;
