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
import { useShoppingCart } from "@/app/context/shopincartConext";
type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [cartProductsCount, setcartProductsCount] = useState<number>(0);
  const { openCart, cartQuantity, cartItems } = useShoppingCart();
  console.log(cartQuantity);
  console.log(cartItems);
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
                <span>{cartQuantity}</span>
              </div>
            </Link>
          ) : (
            <div onClick={loginModel.onOpen}>
              <div className="p-2 bg-gray-100 rounded-full hover:cursor-pointer">
                <CiShoppingCart size={20} />
                {cartQuantity}
              </div>
            </div>
          )}

          {/* {cartQuantity > 0 && (
            <button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              // variant="outline-primary"
              className="rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>

              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </button>
          )} */}
          <UserProfile />

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
