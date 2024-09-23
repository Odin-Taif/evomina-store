"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

import { useSession } from "next-auth/react";
import useLoginModel from "@/app/hook/useLoginModal";
import axios from "axios";
import { useShoppingCart } from "@/app/context/shopincartConext";
import { UserProfile } from "./UserProfile";
type Props = {};

export const UserSection = (props: Props) => {
  const links = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/" },
    { name: "About", url: "/aboutus" },
    { name: "Contact", url: "/contact" },
  ];
  const [showNav, setShowNav] = useState<boolean>(false);
  const { openCart, cartQuantity, watchlistQuantity, cartItems } =
    useShoppingCart();

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
        // setCartitemsToprismaItems(data.products);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };
    if (session?.user) {
      getAllCartProducts();
    }
  }, [session?.user, cartItems]);

  return (
    <div className="flex items-center space-x-4">
      {/* <SearchBar /> */}
      {session?.user ? (
        <Link href="/watchlist">
          <div className="relative">
            <div className="p-2 bg-gray-100 rounded-full text-red-400">
              <FaRegHeart size={15} />
            </div>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 text-black rounded-full p-1 text-xs">
              {watchlistQuantity}
            </span>
          </div>
        </Link>
      ) : (
        <div onClick={loginModel.onOpen}>
          <div className="relative">
            <div className="p-2 bg-gray-100 rounded-full text-red-400">
              <FaRegHeart size={15} />
            </div>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 text-black rounded-full p-1 text-xs">
              0
            </span>
          </div>
        </div>
      )}

      {session?.user ? (
        <Link href="/cart">
          <div className="relative">
            <div className="p-2 bg-gray-100 rounded-full text-green-500">
              <CiShoppingCart size={20} />
            </div>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 text-black rounded-full p-1 text-xs">
              {cartQuantity}
            </span>
          </div>
        </Link>
      ) : (
        <div onClick={loginModel.onOpen}>
          <div className="relative">
            <div className="p-2 bg-gray-100 rounded-full text-green-500">
              <CiShoppingCart size={20} />
            </div>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 text-black rounded-full p-1 text-xs">
              0
            </span>
          </div>
        </div>
      )}

      {/* user UserProfile */}
      <UserProfile />
    </div>
  );
};
