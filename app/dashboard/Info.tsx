"use client";
import React, { useState } from "react";
import ReactStars from "react-rating-star-with-type";
import { FaRegCommentDots } from "react-icons/fa";
import { CiShoppingCart, CiCreditCard1 } from "react-icons/ci";
import { SlTag } from "react-icons/sl";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiCubeFocusThin } from "react-icons/pi";
import { AiTwotoneEdit } from "react-icons/ai";
import Size from "../components/Size";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AddCart from "../components/AddCart";
import IncreDecrementProducts from "../cart/IncreDecrementProducts";

interface Props {
  id: number;
  title: string;
  description: string;
  category: string;
  store: string;
  price: number;
  images: string;
  userId: number;
  rating: number;
  numbercomments: number;
}

const Info: React.FC<Props> = ({
  title,
  description,
  id,
  price,
  userId,
  store,
  rating,
  numbercomments,
}) => {
  const { data: session } = useSession();
  const currentUserId = session?.user.id;

  return (
    <div className="relative info">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h3 className="text-sm text-neutral-500">{store}</h3>
      <div className="flex items-center mt-7 space-x-2">
        <AddCart productId={id} />
        <span className="font-medium w-fit px-2 bg-gray-100 rounded-lg">
          Add To Cart
        </span>
      </div>
      <hr className="w-9/12 mt-10" />
      <div className="grid grid-cols-2 gap-10 opacity-70 mt-5">
        <span className="text-sm flex items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <CiCreditCard1 size={24} />
          </span>
          <p className="font-bold">Secure Payment</p>
        </span>
        {/* <IncreDecrementProducts productId={id ?? 0} /> */}
        {/* <span className="text-sm flex items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <LiaShippingFastSolid size={34} />
          </span>
          <p className="font-bold">Free Shipping</p>
        </span> */}
        {/* <span className="text-sm flex items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <PiCubeFocusThin size={34} />
          </span>
          <p className="font-bold">Free Shipping & Return</p>
        </span> */}
      </div>
      {currentUserId === userId && (
        <Link href={`/edit/${id}`}>
          <span className="absolute top-0 right-0 p-2 bg-green-600 rounded-full text-white cursor-pointer">
            <AiTwotoneEdit size={34} />
          </span>
        </Link>
      )}
    </div>
  );
};

export default Info;
