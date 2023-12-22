"use client";
import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import useLoginModel from "@/app/hook/useLoginModal";
import { useShoppingCart } from "../context/shopincartConext";

type Props = {
  productId?: number;
  lable: boolean;
};

const AddWatchList = ({ productId, lable }: Props) => {
  const { data: session } = useSession();
  const { increaseWatchListQuantity } = useShoppingCart();
  const id = session?.user.id;
  const loginModel = useLoginModel();
  const handleWatchList = async () => {
    if (session?.user) {
      try {
        const response = await axios
          .post("/api/watchlist", {
            productId: productId,
            userId: id,
          })
          .then((response) => {
            increaseWatchListQuantity(productId ?? 0);
            console.log(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      loginModel.onOpen();
    }
  };
  return (
    <div
      onClick={handleWatchList}
      className="flex items-center space-x-4 bg-amber-400 text-gray-100 p-2 rounded-full cursor-pointer hover:bg-amber-500"
    >
      <span className="flex justify-between gap-1 text-white text-sm">
        <FaRegHeart size={15} />
        {lable && "Add to favorits"}
      </span>
    </div>
  );
};

export default AddWatchList;
