"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import SearchBar from "../SearchBar";
import { useSession } from "next-auth/react";
import Logo from "./Logo";
import UserProfile from "./UserProfile";
import useLoginModel from "@/app/hook/useLoginModal";
type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  // const [cartProducts, setCartProducts] = useState<any[]>([]);
  // const [products, setProducts] = useState<any[]>([]);
  const loginModel = useLoginModel();
  const { data: session } = useSession();

  // useEffect(() => {
  //   const fetchCartProducts = async () => {
  //     try {
  //       const cartProducts = await prisma.cart.findMany({
  //         where: {
  //           userId: session?.user?.id,
  //         },
  //       });
  //       setCartProducts(cartProducts);
  //       console.log(cartProducts);
  //       // console.log("Response", response.data.products);
  //     } catch (cartProducts) {
  //       console.log("Error");
  //     }
  //   };
  //   fetchCartProducts();
  // }, [cartProducts]);

  // console.log(session?.user)
  // Array of menu items for the user dropdown
  return (
    <div className="border-b border-amber-400 mb-2">
      <div className="flex items-center justify-between py-2 px-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <Logo />
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
              <li>
                <a
                  href="/"
                  className="py-3 inline-block w-full hover:text-yellow-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/filters/All Products"
                  className="py-3 inline-block w-full hover:text-yellow-600"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="py-3 inline-block w-full hover:text-yellow-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="py-3 inline-block w-full hover:text-yellow-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <UserProfile />

          {session?.user ? (
            <Link href="/cart">
              <div className="p-2 bg-gray-100 rounded-full">
                <CiShoppingCart size={20} />
              </div>
            </Link>
          ) : (
            <div onClick={loginModel.onOpen}>
              <div className="p-2 bg-gray-100 rounded-full hover:cursor-pointer">
                <CiShoppingCart size={20} />
              </div>
            </div>
          )}
          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-gray-100 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <a href="/" className="py-3 inline-block w-full ">
              Shop
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="py-3 inline-block w-full hover:text-yellow-600"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="/aboutus"
              className="py-3 inline-block w-full hover:text-yellow-600"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
