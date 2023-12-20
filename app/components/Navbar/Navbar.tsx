"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsChevronCompactUp } from "react-icons/bs";
import SearchBar from "../SearchBar";
import { useSession } from "next-auth/react";
import Logo from "./Logo";
import UserProfile from "./UserProfile";
import useLoginModel from "@/app/hook/useLoginModal";

import axios from "axios";
type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [cartProductsCount, setcartProductsCount] = useState<number>(0);
  // console.log(cartProductsCount);
  const loginModel = useLoginModel();
  const { data: session } = useSession();
  useEffect(() => {
    const getAllCartProducts = async () => {
      try {
        // Assuming userId is a variable containing the user's ID
        const response = await axios.get("/api/cartproducts", {
          params: { userId: session?.user?.id }, // Use params to pass userId as a query parameter
        });
        const data = response.data;
        // console.log(data, "this is data");
        setcartProductsCount(data.products.length);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };
    if (session?.user) {
      getAllCartProducts();
    }
  }, [session?.user, cartProductsCount]);

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
            <Link href="/watchlist">
              <div className="p-2 bg-gray-100 rounded-full">
                <FaRegHeart size={20} />
              </div>
            </Link>
          ) : (
            <div onClick={loginModel.onOpen}>
              <div className="p-2 bg-gray-100 rounded-full hover:cursor-pointer">
                <FaRegHeart size={20} />
              </div>
            </div>
          )}

          {session?.user ? (
            <Link href="/cart">
              <div className="p-2 bg-gray-100 rounded-full">
                <CiShoppingCart size={20} />
                <span>{cartProductsCount}</span>
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
