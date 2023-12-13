import Link from "next/link";
import { FunctionComponent } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMobileAlt,
  FaTiktok,
} from "react-icons/fa";

// Array containing social media and contact information
const socialmedia = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/evomina.scent",
    target: "_blank",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@evomina.scent",
    target: "_blank",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/evomina.scent",
    target: "_blank",
  },
  {
    name: "mailto",
    icon: <FaMailBulk />,
    href: "mailto:info@evomina.com",
    target: "_blank",
  },
];

// Functional component for rendering the social media bar
const SocialMediaBar: FunctionComponent = () => {
  return (
    <div className="flex flex-wrap text-center lg:text-left">
      {/* Social media icons container */}
      <div className="flex flex-row mt-6 lg:mb-0">
        {socialmedia &&
          socialmedia.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-start justify-center p-2 md:m-2 text-black shadow-lg font-normal h-10 w-10 rounded-full outline-none focus:outline-none hover:bg-yellow-500"
            >
              {item.icon}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SocialMediaBar;
