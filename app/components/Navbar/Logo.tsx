import Image from "next/image";
import Link from "next/link";

type Props = {};
export const Logo = ({}: Props) => {
  return (
    <Link href={"/"}>
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer w-auto h-auto"
        height="30"
        width="30"
        sizes="40px"
        src="/levantisklogo.webp"
      />
    </Link>
  );
};
