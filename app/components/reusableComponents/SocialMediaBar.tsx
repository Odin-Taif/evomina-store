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
    href: "https://www.instagram.com/friendsinflats/",
    target: "_blank",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/profile.php?id=100091522494885",
    target: "_blank",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/friends-in-flats-367356272/",
    target: "_blank",
  },
  {
    name: "mailto",
    icon: <FaMailBulk />,
    href: "mailto:office@friends-in-flats.at",
    target: "_blank",
  },
  {
    name: "mobile",
    icon: <FaMobileAlt />,
    href: "/contact",
    target: "_self",
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
