"use client";
import React from "react";
import axios from "axios";
import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "../context/shopincartConext";

type Props = {
  productId: number;
  userId: number;
};

const DeleteCart = (props: Props) => {
  const { removeFromCart, getItemQuantity } = useShoppingCart();
  const router = useRouter();
  const itemQuantity = getItemQuantity(props.productId);
  const handleDelete = async () => {
    try {
      await axios.delete("/api/cart", {
        data: {
          productId: props.productId,
          userId: props.userId,
        },
      });
      removeFromCart(props.productId);
      // removeFromCart(props.productId);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="flex flex-row cursor-pointer mt-4 text-red-400"
        onClick={handleDelete}
      >
        <GoTrash className="text-red-500 pt-2" size={25} />
        <span className="underline">remove</span>
      </div>
    </>
  );
};

export default DeleteCart;
