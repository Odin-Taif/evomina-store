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

const DeleteWatchlist = (props: Props) => {
  const { removeFromWatchList } = useShoppingCart();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete("/api/watchlist", {
        data: {
          productId: props.productId,
          userId: props.userId,
        },
      });
      removeFromWatchList(props.productId);
      // removeFromCart(props.productId);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="flex flex-row cursor-pointer mt-10 text-red-400"
        onClick={handleDelete}
      >
        <GoTrash className="text-red-500 pt-2" size={20} />
        <span className="underline">remove</span>
      </div>
    </>
  );
};

export default DeleteWatchlist;
